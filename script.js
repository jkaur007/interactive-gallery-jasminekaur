// Array of images and captions
const images = [
  { src: 'images/img1.jpg', caption: 'Sunflower in bloom', details: 'This image captures a sunflower in full bloom on a bright summer day.' },
  { src: 'images/img2.jpg', caption: 'Sunflower in the evening', details: 'A sunflower facing the sunset, casting a warm evening glow.' },
  { src: 'images/img3.jpg', caption: 'Rose close-up', details: 'A detailed close-up of a vibrant red rose petal.' },
  { src: 'images/img4.jpg', caption: 'Strawberry brownie', details: 'A delicious strawberry brownie dessert, perfect for a sweet treat.' },
  { src: 'images/img5.jpg', caption: 'Chocolate ice cream on brownie', details: 'A tempting chocolate ice cream sitting atop a freshly baked brownie.' },
  { src: 'images/img6.jpg', caption: 'Thanksgiving Day', details: 'A celebratory image capturing the warmth of Thanksgiving festivities.' },
  { src: 'images/img7.jpg', caption: 'Chocolate cake slice', details: 'A decadent slice of chocolate cake with rich layers and frosting.' },
  { src: 'images/img8.jpg', caption: 'Rose bouquet', details: 'A beautiful bouquet of fresh roses, perfect for gifting.' },
  { src: 'images/img9.jpg', caption: 'Bouquet of roses', details: 'A stunning bunch of roses, captured in natural light.' },
  { src: 'images/img10.jpeg', caption: 'Coffee cups', details: 'Two steaming cups of coffee, ready for a cozy conversation.' },
  { src: 'images/img11.jpeg', caption: 'Tea cup', details: 'A delicate tea cup with a soothing warm beverage.' },
  { src: 'images/img12.jpeg', caption: 'Black tea and milk', details: 'A beautiful contrast between black tea and creamy milk being poured in.' }
];

// Select gallery and modal elements
const gallery = document.getElementById('gallery');
const modal = document.getElementById('modal');
const modalImage = document.getElementById('modal-image');
const modalCaption = document.getElementById('modal-caption');

// Load images dynamically
images.forEach((imgData) => {
  const img = document.createElement('img');
  img.src = imgData.src;
  img.alt = imgData.caption;
  img.dataset.caption = imgData.caption;
  img.dataset.details = imgData.details;  // Store additional details in dataset
  gallery.appendChild(img);
});

// Event delegation for displaying HD image and caption with details
gallery.addEventListener('click', (event) => {
  const target = event.target;
  if (target.tagName === 'IMG') {
    modalImage.src = target.src;  // Assuming src contains HD image path
    modalCaption.innerHTML = `<strong>${target.dataset.caption}</strong><br>${target.dataset.details}`;
    modal.classList.add('visible');
  }
});

// Hide modal when clicked
modal.addEventListener('click', () => {
  modal.classList.remove('visible');
});


  