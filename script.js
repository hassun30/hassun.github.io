document.addEventListener("DOMContentLoaded", () => {
    const playerIcons = document.querySelectorAll(".player-icon");

    playerIcons.forEach(icon => {
        icon.addEventListener("click", () => {
            const imgSrc = icon.getAttribute("src");
            openImageModal(imgSrc);
        });
    });
});

function openImageModal(imageSrc) {
    const modal = document.createElement("div");
    modal.classList.add("modal");
    modal.innerHTML = `
        <div class="modal-content">
            <img src="${imageSrc}" alt="拡大画像">
        </div>
    `;
    modal.addEventListener("click", () => modal.remove());
    document.body.appendChild(modal);
}

// モーダル用のCSSを追加
const modalStyles = document.createElement("style");
modalStyles.innerHTML = `
    .modal {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.8);
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .modal-content img {
        max-width: 90%;
        max-height: 90%;
        border-radius: 10px;
    }
`;
document.head.appendChild(modalStyles);
