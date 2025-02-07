### **script.js**
```js
document.addEventListener("DOMContentLoaded", function () {
    // モーダル要素の取得
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modalImg");
    const closeBtn = document.querySelector(".close");

    // ギャラリーの画像をクリックしたらモーダルを表示
    const galleryImages = document.querySelectorAll(".gallery-container img");
    galleryImages.forEach(img => {
        img.addEventListener("click", function () {
            modal.style.display = "flex";  // flexを指定して中央に配置される\n            modalImg.src = this.src;\n        });\n    });\n\n    // バツボタンをクリックしたらモーダルを閉じる\n    closeBtn.addEventListener("click", function () {\n        modal.style.display = \"none\";\n    });\n\n    // モーダルの背景をクリックしても閉じる\n    modal.addEventListener("click", function (event) {\n        if (event.target === modal) {\n            modal.style.display = \"none\";\n        }\n    });\n});
