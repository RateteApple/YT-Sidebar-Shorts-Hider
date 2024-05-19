// ショートタブを削除する関数
function removeShortsTab() {
    // ショートタブを取得
    const shortsTabs = document.querySelectorAll('a[title="ショート"]');
    shortsTabs.forEach(tab => {
        if (tab && tab.parentElement) {
            tab.parentElement.style.display = 'none';
        }
    });
}

// ページロード時にショートタブを削除
window.addEventListener('load', removeShortsTab);

// 動的コンテンツ対応
const observer = new MutationObserver(removeShortsTab);
observer.observe(document.body, { childList: true, subtree: true });