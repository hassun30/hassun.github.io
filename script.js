document.addEventListener("DOMContentLoaded", function () {
  // モーダルの要素取得
  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("modalImg");
  const closeBtn = document.querySelector(".close");

  // フォトギャラリー画像をクリックしたらモーダルを表示
  const galleryImages = document.querySelectorAll(".gallery-container img");
  galleryImages.forEach(img => {
    img.addEventListener("click", function () {
      modal.style.display = "flex";  // Flexで中央配置
      modalImg.src = this.src;
    });
  });

  // バツボタンをクリックしてモーダルを閉じる
  closeBtn.addEventListener("click", function () {
    modal.style.display = "none";
  });

  // モーダルの背景クリックで閉じる
  modal.addEventListener("click", function (e) {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
});
