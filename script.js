// 画像をクリックしたときにモーダルを開く
function openModal(imageElement) {
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modalImg");
    
    // モーダルの画像をクリックした画像に変更
    modal.style.display = "block";
    modalImg.src = imageElement.src;
}

// モーダルを閉じる
function closeModal() {
    const modal = document.getElementById("modal");
    
    // モーダルを非表示にする
    modal.style.display = "none";
}

// モーダルの外側をクリックしたときにも閉じる
window.onclick = function(event) {
    const modal = document.getElementById("modal");
    if (event.target === modal) {
        closeModal();
    }
};
