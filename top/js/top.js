'use strict'
function showImage(imageNumber, button) {
  const images = document.querySelectorAll('.image-container img');
  images.forEach(image => image.style.display = 'none');
  document.getElementById(`image${imageNumber}`).style.display = 'block';

  const buttons = document.querySelectorAll('button');
  buttons.forEach(btn => btn.classList.remove('active'));
  button.classList.add('active');
}
