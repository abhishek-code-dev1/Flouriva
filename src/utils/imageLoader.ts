/**
 * Custom Next.js Image Loader
 * Intercepts Unsplash images and overrides width/quality parameters
 * for highly optimized WebP/AVIF output.
 */
interface LoaderParams {
  src: string;
  width: number;
  quality?: number;
}

export default function unsplashLoader({ src, width, quality }: LoaderParams): string {
  // If the image is loaded from Unsplash CDN, rewrite parameters
  if (src.includes("images.unsplash.com")) {
    try {
      const url = new URL(src);
      // Set optimized width matching the viewport display size
      url.searchParams.set("w", width.toString());
      // Set quality (default to 70 for strong compression-to-quality ratio)
      url.searchParams.set("q", (quality || 70).toString());
      // Ensure auto-selection of modern format (WebP / AVIF)
      url.searchParams.set("auto", "format");
      // Crop aspect ratio properly
      url.searchParams.set("fit", "crop");
      return url.toString();
    } catch {
      return src;
    }
  }
  
  // Return original src if it's not a remote Unsplash image
  return src;
}
