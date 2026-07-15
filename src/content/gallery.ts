import { GalleryItem, VideoItem } from '@/lib/types';

/**
 * GALLERY DATA
 * =============
 * Add real gallery images and videos here.
 * Use Next.js Image component with proper width/height.
 * Ensure all images have descriptive alt text.
 */
export const galleryItems: GalleryItem[] = [
  // No gallery items have been added yet.
  // When adding items, use this format:
  // {
  //   id: 'gal-01',
  //   src: '/assets/gallery/match-action-01.jpg',
  //   alt: 'Referee managing a scrum during a sevens tournament',
  //   category: 'match-action',
  //   width: 1200,
  //   height: 800,
  //   caption: 'Optional caption for the image',
  // },
];

export const videoItems: VideoItem[] = [
  // No videos have been added yet.
  // When adding videos, use this format:
  // {
  //   id: 'vid-01',
  //   src: '/assets/videos/tournament-highlights.mp4',
  //   poster: '/assets/videos/tournament-highlights-poster.jpg',
  //   title: 'Tournament Highlights',
  //   duration: '2:30',
  // },
];

export function getGalleryByCategory(category: string): GalleryItem[] {
  return galleryItems.filter((item) => item.category === category);
}

export function getAllGalleryItems(): GalleryItem[] {
  return galleryItems;
}
