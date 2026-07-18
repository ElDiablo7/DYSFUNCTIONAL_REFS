import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@/auth';
import { PrismaClient } from '@prisma/client';
import { writeFile, mkdir } from 'fs/promises';
import { join } from 'path';

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  try {
    const session = await auth();
    if (!session || !session.user || !session.user.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const formData = await req.formData();
    const file = formData.get('file') as File | null;

    if (!file) {
      return NextResponse.json({ error: 'No file uploaded' }, { status: 400 });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Make sure the uploads directory exists
    const uploadsDir = join(process.cwd(), 'public', 'uploads');
    try {
      await mkdir(uploadsDir, { recursive: true });
    } catch (e) {
      // Ignore if it already exists
    }

    // Sanitize filename and make it unique
    const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
    const originalName = file.name.replace(/[^a-zA-Z0-9.\-_]/g, '');
    const filename = `${uniqueSuffix}-${originalName}`;
    const filePath = join(uploadsDir, filename);

    // Save the file
    await writeFile(filePath, buffer);

    // Determine type
    const isVideo = file.type.startsWith('video/');
    const mediaType = isVideo ? 'VIDEO' : 'PHOTO';

    // Save to database
    const mediaUrl = `/uploads/${filename}`;
    const newMedia = await prisma.media.create({
      data: {
        url: mediaUrl,
        type: mediaType,
        userId: session.user.id,
      },
    });

    return NextResponse.json({ success: true, media: newMedia });
  } catch (error) {
    console.error('Upload Error:', error);
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 });
  }
}
