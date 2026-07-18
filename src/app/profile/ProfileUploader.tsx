'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function ProfileUploader() {
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  const handleUpload = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) return;

    setUploading(true);
    setError('');

    const formData = new FormData();
    formData.append('file', file);

    try {
      const res = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      if (!res.ok) {
        throw new Error('Upload failed');
      }

      setFile(null);
      router.refresh();
    } catch (err) {
      setError('Something went wrong during upload.');
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="rounded-xl border border-gold/20 bg-black/30 p-6 shadow-inner">
      <h2 className="mb-4 text-xl font-semibold text-white">Upload Media</h2>
      <form onSubmit={handleUpload} className="flex flex-col space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-300">Select Photo or Video</label>
          <input
            type="file"
            accept="image/*,video/*"
            onChange={(e) => setFile(e.target.files?.[0] || null)}
            className="mt-2 block w-full text-sm text-gray-400 file:mr-4 file:rounded-full file:border-0 file:bg-pink file:px-4 file:py-2 file:text-sm file:font-semibold file:text-white hover:file:bg-pink/80"
          />
        </div>
        
        {error && <p className="text-sm text-red-500">{error}</p>}

        <button
          type="submit"
          disabled={!file || uploading}
          className={`btn-primary self-start ${!file || uploading ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          {uploading ? 'Uploading...' : 'Upload File'}
        </button>
      </form>
    </div>
  );
}
