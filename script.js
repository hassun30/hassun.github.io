// script.js

// Bearer Tokenを環境変数に保存して読み込む
const BEARER_TOKEN = "あなたのBearer Token"; // 実際にはセキュリティ上、安全に保存する方法を使用する

// 最新ツイートを取得する関数
async function fetchLatestTweets(username) {
    const url = `https://api.twitter.com/2/tweets/search/recent?query=from:${username}&tweet.fields=created_at`;

    try {
        const response = await fetch(url, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${BEARER_TOKEN}`
            }
        });

        if (!response.ok) {
            throw new Error(`HTTPエラー: ${response.status}`);
        }

        const data = await response.json();
        displayTweets(data.data); // ツイートデータを表示
    } catch (error) {
        console.error("ツイート取得エラー:", error);
        const container = document.getElementById('tweets-container');
        container.innerHTML = `<p>ツイートの取得中にエラーが発生しました。</p>`;
    }
}

// ツイートデータをHTMLに反映
function displayTweets(tweets) {
    const container = document.getElementById('tweets-container');
    container.innerHTML = ""; // 既存の内容をクリア

    tweets.forEach(tweet => {
        const tweetElement = document.createElement('div');
        tweetElement.classList.add('tweet');
        tweetElement.innerHTML = `
            <p>${tweet.text}</p>
            <small>${new Date(tweet.created_at).toLocaleString()}</small>
        `;
        container.appendChild(tweetElement);
    });
}

// ページ読み込み時にツイートを取得
document.addEventListener("DOMContentLoaded", () => {
    const username = "your-account"; // ツイートを取得したいXアカウント名
    fetchLatestTweets(username);
});
