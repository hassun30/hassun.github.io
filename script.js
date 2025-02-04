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
}
let currentPage = 1;
const itemsPerPage = 3; // 1ページあたりの試合数

// ページネーション
const items = document.querySelectorAll('#latest ul');
const totalPages = Math.ceil(items.length / itemsPerPage);

function showPage(page) {
    const start = (page - 1) * itemsPerPage;
    const end = page * itemsPerPage;
    items.forEach((item, index) => {
        if (index >= start && index < end) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

function prevPage() {
    if (currentPage > 1) {
        currentPage--;
        showPage(currentPage);
    }
}

function nextPage() {
    if (currentPage < totalPages) {
        currentPage++;
        showPage(currentPage);
    }
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// スクロール時にトップに戻るボタンを表示
window.onscroll = function () {
    const scrollButton = document.querySelector('.scroll-to-top');
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        scrollButton.style.display = 'block';
    } else {
        scrollButton.style.display = 'none';
    }
};

// 初期表示のページ設定
showPage(currentPage);
.game-summary {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
}

.game-card {
    background-color: #fff;
    border-radius: 12px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    padding: 15px;
    max-width: 400px;
    width: 100%;
}

.game-card h3 {
    margin-top: 0;
    color: #0073e6;
}

.game-card ul {
    padding-left: 20px;
}

.game-card a {
    color: #e60000;
    font-weight: bold;
    text-decoration: none;
}

.game-card a:hover {
    text-decoration: underline;
}
.gallery-container img {
    width: auto;
    height: 24px;
    object-fit: cover;
}
