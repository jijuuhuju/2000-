// ページが読み込まれたら最初に親切な警告を出す
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
    
    // タブ名の切り替え（0.2秒ごと）
    let toggle = false;
    setInterval(() => {
        document.title = toggle ? "★ブラウザクラッシャー★" : "☆YOU ARE AN IDIOT☆";
        toggle = !toggle;
    }, 200);
    
    // 画面内で「☻」の顔を無限に増やす（0.2秒ごと）
    setInterval(() => {
        createCrusherFace();
    }, 200); 
    
    this.style.display = 'none';
    document.querySelector('#welcome-screen p').innerText = "FUNK MUSIC NOW PLAYING...";
});

// 顔をランダムな位置に生成する関数
function createCrusherFace() {
    const face = document.createElement('div');
    face.innerText = '☻';
    face.className = 'spawned-face';
    
    // ランダムな大きさに設定（50px 〜 250px）
    const size = Math.floor(Math.random() * 200) + 50;
    face.style.fontSize = size + 'px';
    
    // 画面上のランダムな位置に配置
    const x = Math.floor(Math.random() * (window.innerWidth - size));
    const y = Math.floor(Math.random() * (window.innerHeight - size));
    face.style.left = x + 'px';
    face.style.top = y + 'px';
    
    document.body.appendChild(face);
}
