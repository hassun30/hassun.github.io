// フォトギャラリーモーダル
function openModal(img) {
    document.getElementById("modal").style.display = "block";
    document.getElementById("modalImg").src = img.src;
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}

// ページがスクロールされたらアニメーション発火
document.addEventListener("scroll", function() {
    document.querySelectorAll('.fade-in').forEach(el => {
        if (el.getBoundingClientRect().top < window.innerHeight) {
            el.classList.add("active");
        }
    });
});
