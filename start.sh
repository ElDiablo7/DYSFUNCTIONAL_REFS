#!/bin/sh
echo "Running Prisma DB Push..."
npx prisma db push

echo "Running Seed Script..."
npx --yes tsx prisma/seed.ts

echo "Starting Next.js Server..."
exec node server.js
