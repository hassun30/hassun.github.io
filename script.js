document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".gallery-container img");
    const modal = document.createElement("div");
    modal.classList.add("modal");
    modal.innerHTML = `
        <span class="close">&times;</span>
        <img class="modal-content" id="modal-img">
    `;
    document.body.appendChild(modal);
    
    const modalImg = document.getElementById("modal-img");
    const closeBtn = document.querySelector(".close");
    
    images.forEach(img => {
        img.addEventListener("click", function () {
            modal.style.display = "flex";
            modalImg.src = this.src;
        });
    });
    
    closeBtn.addEventListener("click", function () {
        modal.style.display = "none";
    });
    
    modal.addEventListener("click", function (e) {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });
});
