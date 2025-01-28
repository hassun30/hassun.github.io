// モーダル拡大表示の機能
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const captionText = document.getElementById('caption');
const galleryImages = document.querySelectorAll('.gallery-container img');
const closeModal = document.querySelector('.close');

galleryImages.forEach(img => {
    img.addEventListener('click', () => {
        modal.style.display = "block";
        modalImg.src = img.src;
        captionText.innerHTML = img.alt;
    });
});

closeModal.addEventListener('click', () => {
    modal.style.display = "none";
});
