window.addEventListener('DOMContentLoaded', () => {
    const consent = confirm("⚠️ 警告：このサイトは激しい光の点滅と大音量の音声が流れます。移動してもよろしいですか？");
    if (!consent) {
        window.location.href = "https://google.com";
    }
});

document.getElementById('start-btn').addEventListener('click', function() {
    const audio = document.getElementById('funk-track');
    audio.play().catch(err => console.log("再生エラー:", err));
    document.body.classList.add('crush-mode');
    
    // タブ名の切り替え
    let toggle = false;
    setInterval(() => {
        document.title = toggle ? "★ブラウザクラッシャー★" : "☆YOU ARE AN IDIOT☆";
        toggle = !toggle;
    }, 200);
    
    // ★0.2秒ごとに「偽ウィンドウ」を増殖させる
    setInterval(() => {
        spawnWindow();
    }, 200);
    
    this.style.display = 'none';
    document.querySelector('#welcome-screen p').innerText = "FUNK MUSIC NOW PLAYING...";
});

// ウィンドウを量産する関数
function spawnWindow() {
    const template = document.getElementById('window-template');
    const clone = template.cloneNode(true);
    
    clone.removeAttribute('id');
    clone.style.display = 'block';
    clone.classList.add('fake-window-shake'); // 揺れるアニメーションを追加
    
    // 画面上のランダムな位置を計算
    const x = Math.floor(Math.random() * (window.innerWidth - 350));
    const y = Math.floor(Math.random() * (window.innerHeight - 200));
    clone.style.left = x + 'px';
    clone.style.top = y + 'px';
    
    // ×ボタンを押したらさらに増殖するいたずら付き
    clone.querySelector('.close-btn').addEventListener('click', () => {
        spawnWindow();
        spawnWindow();
    });
    
    document.body.appendChild(clone);
}
