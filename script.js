document.addEventListener('DOMContentLoaded', () => {
    const galleryContainer = document.getElementById('gallery-container');
    const hdImageContainer = document.getElementById('hd-image-container');
    const hdImage = document.getElementById('hd-image');
    const imageCaption = document.getElementById('image-caption');
  
    // Array of images with small and HD versions and captions
    const images = [
      { src: 'images/thumb1.jpg', hd: 'images/hd1.jpg', caption: 'Image 1 description' },
      { src: 'images/thumb2.jpg', hd: 'images/hd2.jpg', caption: 'Image 2 description' },
      { src: 'images/thumb3.jpg', hd: 'images/hd3.jpg', caption: 'Image 3 description' },
      // Add more images...
    ];
  
    // Dynamically add images to the gallery
    images.forEach(image => {
      const imgElement = document.createElement('img');
      imgElement.src = image.src;
      imgElement.alt = image.caption;
      imgElement.dataset.hd = image.hd;
      imgElement.dataset.caption = image.caption;
      galleryContainer.appendChild(imgElement);
    });
  
    // Event delegation for gallery images
    galleryContainer.addEventListener('click', (event) => {
      if (event.target.tagName === 'IMG') {
        // Display the HD version of the image and its caption
        hdImage.src = event.target.dataset.hd;
        imageCaption.textContent = event.target.dataset.caption;
        hdImageContainer.style.display = 'flex';
      }
    });
  
    // Close the HD image when clicked
    hdImageContainer.addEventListener('click', () => {
      hdImageContainer.style.display = 'none';
    });
  });
  