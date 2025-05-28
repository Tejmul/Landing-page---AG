import sharp from 'sharp';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import fs from 'fs/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const publicDir = join(__dirname, '../public');
const images = [
  {
    name: 'assuredgiglogo.png',
    sizes: [
      { width: 32, height: 32, suffix: '-sm' },
      { width: 64, height: 64, suffix: '-md' },
      { width: 128, height: 128, suffix: '-lg' }
    ]
  }
];

async function optimizeImages() {
  // Create optimized directory if it doesn't exist
  const optimizedDir = join(publicDir, 'optimized');
  try {
    await fs.mkdir(optimizedDir, { recursive: true });
  } catch (error) {
    if (error.code !== 'EEXIST') {
      console.error('Error creating optimized directory:', error);
    }
  }

  for (const image of images) {
    const inputPath = join(publicDir, image.name);
    
    // Generate WebP versions
    for (const size of image.sizes) {
      const baseOutputPath = join(optimizedDir, image.name.replace('.png', size.suffix));
      
      try {
        // Generate WebP version
        await sharp(inputPath)
          .resize(size.width, size.height, {
            fit: 'contain',
            background: { r: 0, g: 0, b: 0, alpha: 0 }
          })
          .webp({ 
            quality: 80,
            effort: 6,
            lossless: false,
            nearLossless: true
          })
          .toFile(`${baseOutputPath}.webp`);

        // Generate AVIF version
        await sharp(inputPath)
          .resize(size.width, size.height, {
            fit: 'contain',
            background: { r: 0, g: 0, b: 0, alpha: 0 }
          })
          .avif({ 
            quality: 70,
            effort: 5,
            chromaSubsampling: '4:2:0'
          })
          .toFile(`${baseOutputPath}.avif`);

        // Generate fallback PNG version
        await sharp(inputPath)
          .resize(size.width, size.height, {
            fit: 'contain',
            background: { r: 0, g: 0, b: 0, alpha: 0 }
          })
          .png({ 
            quality: 80,
            compressionLevel: 9,
            palette: true
          })
          .toFile(`${baseOutputPath}.png`);
        
        console.log(`Optimized ${image.name} to multiple formats (${size.width}x${size.height})`);
      } catch (error) {
        console.error(`Error optimizing ${image.name}:`, error);
      }
    }
  }
}

optimizeImages().catch(console.error); 