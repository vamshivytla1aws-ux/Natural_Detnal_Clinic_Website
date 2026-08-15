const fs = require('fs');
const path = require('path');

const mappings = {
  'adult-braces-guide.md': '/images/blog/blog-braces.jpg',
  'braces-care.md': '/images/blog/blog-braces.jpg',
  'dental-implants-guide.md': '/images/blog/blog-implant.jpg',
  'implants-vs-bridges.md': '/images/blog/blog-implant.jpg',
  'dental-crowns-vs-bridges.md': '/images/blog/blog-implant.jpg',
  'care-for-dental-crowns.md': '/images/blog/blog-implant.jpg',
  'child-first-dental-visit.md': '/images/blog/blog-child.jpg',
  'how-to-choose-best-dental-clinic-hyderabad.md': '/images/blog/blog-clinic.jpg',
  'how-often-dental-checkup.md': '/images/blog/blog-clinic.jpg',
  'dental-cleaning-guide.md': '/images/blog/blog-clinic.jpg',
  'dental-anxiety.md': '/images/blog/blog-clinic.jpg',
  'bleeding-gums-causes.md': '/images/blog/blog-gum.jpg',
  'wisdom-tooth-pain.md': '/images/blog/blog-gum.jpg',
  'swollen-gums-causes.md': '/images/blog/blog-gum.jpg',
  'tooth-pain-causes-when-to-see-dentist.md': '/images/blog/blog-tooth.jpg',
  'broken-chipped-tooth-what-to-do.md': '/images/blog/blog-tooth.jpg',
  'tooth-sensitivity-causes.md': '/images/blog/blog-tooth.jpg',
  'root-canal-signs-treatment-guide.md': '/images/blog/blog-tooth.jpg',
  'bad-breath-causes.md': '/images/blog/blog-tooth.jpg',
  'causes-of-cavities.md': '/images/blog/blog-tooth.jpg',
  'dental-filling-guide.md': '/images/blog/blog-tooth.jpg',
  'handle-dental-emergency.md': '/images/blog/blog-tooth.jpg',
  'pain-when-biting.md': '/images/blog/blog-tooth.jpg',
  'teeth-whitening-guide.md': '/images/blog/blog-tooth.jpg'
};

const blogDir = path.join(__dirname, 'src/content/blog');

fs.readdirSync(blogDir).forEach(file => {
  if (file.endsWith('.md')) {
    const filePath = path.join(blogDir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    
    if (mappings[file]) {
      // Replace exactly the line starting with image:
      content = content.replace(/^image:\s*".*?"/m, `image: "${mappings[file]}"`);
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Updated ${file}`);
    }
  }
});
