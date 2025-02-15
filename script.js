document.addEventListener("DOMContentLoaded", function () {
  // モーダルの要素取得
  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("modalImg");
  const closeBtn = document.querySelector(".close");

  // フォトギャラリー画像をクリックしたら、クリック位置にモーダルを表示
  const galleryImages = document.querySelectorAll(".gallery-container img");
  galleryImages.forEach(img => {
    img.addEventListener("click", function (e) {
      // クリック位置を取得
      const clickX = e.clientX;
      const clickY = e.clientY;
      
      // モーダルをクリック位置に配置
      modal.style.display = "block";
      modal.style.top = clickY + "px";
      modal.style.left = clickX + "px";
      
      modalImg.src = this.src;
    });
  });

  // バツボタンでモーダルを閉じる
  closeBtn.addEventListener("click", function () {
    modal.style.display = "none";
  });

  // モーダルの背景クリックで閉じる（画像部分以外をクリック）
  modal.addEventListener("click", function (e) {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
});
