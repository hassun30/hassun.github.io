document.addEventListener("DOMContentLoaded", function () {
  // モーダルの要素取得
  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("modalImg");
  const closeBtn = document.querySelector(".close");
  
  // フォトギャラリーの画像クリック時の処理
  const galleryImages = document.querySelectorAll(".gallery-container img");
  galleryImages.forEach(img => {
    img.addEventListener("click", function () {
      modal.style.display = "flex"; // flexで中央配置
      modalImg.src = this.src;
    });
  });
  
  // バツボタンでモーダルを閉じる
  closeBtn.addEventListener("click", function () {
    modal.style.display = "none";
  });
  
  // モーダルの背景クリックでも閉じる処理
  modal.addEventListener("click", function (e) {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
});
