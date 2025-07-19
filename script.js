
let currentSlide = 0;
const slides = document.querySelectorAll('.hero-slider img');
setInterval(() => {
  slides.forEach((img, i) => {
    img.style.opacity = i === currentSlide ? '1' : '0';
  });
  currentSlide = (currentSlide + 1) % slides.length;
}, 6000);

function openGallery(type) {
  const viewer = document.getElementById('gallery-viewer');
  const content = document.getElementById('gallery-content');
  content.innerHTML = '';
  viewer.style.display = 'block';
  let count = type === 'images' ? 15 : 5;
  for (let i = 1; i <= count; i++) {
    const media = document.createElement(type === 'images' ? 'img' : 'video');
    media.src = `src=image/${type}${i}.jpg`;
    if (type === 'video') media.controls = true;
    media.style.width = '90%';
    media.style.margin = '1em 0';
    content.appendChild(media);
  }
}
function closeGallery() {
  document.getElementById('gallery-viewer').style.display = 'none';
}
