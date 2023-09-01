let images = document.querySelectorAll('img[alt="CDN media"]');

images.forEach(function(image) {
  image.removeAttribute('alt');
});
