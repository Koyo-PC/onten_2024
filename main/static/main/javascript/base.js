document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menu-toggle');
    const spBg = document.getElementById('sp__bg');
    const body = document.getElementById('mask');

    // メニューを閉じる関数
    function closeMenu() {
        menuToggle.classList.remove('active');
        spBg.classList.remove('active');
        body.style.overflow = 'auto';
    }

    // メニューを開閉する処理
    menuToggle.addEventListener('click', function () {
        // ハンバーガーメニューのボタンを切り替え
        this.classList.toggle('active');

        // メニュー背景の表示/非表示を切り替え
        spBg.classList.toggle('active');
        
        // メニューが表示されているときはスクロールを無効にする
        if (spBg.classList.contains('active')) {
            body.style.overflow = 'hidden';
        } else {
            body.style.overflow = 'auto';
        }
    });

    // メニュー背景をクリックしたときにメニューを閉じる
    spBg.addEventListener('click', closeMenu);

    // メニューアイコン以外の部分をクリックしてもメニューを閉じる
    document.addEventListener('click', function (event) {
        if (spBg.classList.contains('active') && !menuToggle.contains(event.target) && !spBg.contains(event.target)) {
            closeMenu();
        }
    });
});

function sleepSetTimeout(ms, callback) {
    setTimeout(callback, ms);
}

window.onload = function() {
    // sessionStorage を確認してアニメーションの表示を制御
    if (!sessionStorage.getItem("animationShown")) {
    var cont = document.getElementById("load-img-pc");
    var conte = document.getElementById("load-img-phone");

    cont.style.zIndex = 200000;
    conte.style.zIndex = 200000;

    // 3秒後にフェードアウト、6秒後に非表示
    sleepSetTimeout(3000, () => {
        cont.style.opacity = "0";
        conte.style.opacity = "0";
    });
    sleepSetTimeout(6000, () => {
        cont.style.display = "none";
        conte.style.display = "none";
    });

    // 動画要素を取得
    const videoPC = cont.querySelector("video");
    const videoPhone = conte.querySelector("video");

    // 動画をクリックしたら再生停止、フェードアウトして非表示にする
    videoPC.addEventListener('click', function() {
        videoPC.pause();
        cont.style.opacity = "0";
        sleepSetTimeout(3000, () => cont.style.display = "none");
    });

    videoPhone.addEventListener('click', function() {
        videoPhone.pause();
        conte.style.opacity = "0";
        sleepSetTimeout(3000, () => conte.style.display = "none");
    });

    // アニメーションが表示されたことを sessionStorage に記録
    sessionStorage.setItem("animationShown", "true");
    } else {
    // 2回目以降のアクセスではアニメーションを表示しない
    document.getElementById("load-img-pc").style.display = "none";
    document.getElementById("load-img-phone").style.display = "none";
    }
};

// sleepSetTimeout 関数の定義 (setTimeout のラッパー)
function sleepSetTimeout(ms, callback) {
    setTimeout(callback, ms);
}