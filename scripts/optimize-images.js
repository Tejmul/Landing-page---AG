import sharp from 'sharp';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const publicDir = join(__dirname, '../public');
const images = ['assuredgiglogo.png'];

async function optimizeImages() {
  for (const image of images) {
    const inputPath = join(publicDir, image);
    const outputPath = join(publicDir, image.replace('.png', '.webp'));

    try {
      await sharp(inputPath)
        .webp({ quality: 80 })
        .toFile(outputPath);
      
      console.log(`Optimized ${image} to WebP format`);
    } catch (error) {
      console.error(`Error optimizing ${image}:`, error);
    }
  }
}

optimizeImages(); 