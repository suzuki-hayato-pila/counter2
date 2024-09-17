(() => {
  const $counter = document.getElementById("js-counter");
  const $plus2Button = document.querySelectorAll(".js-button")[3]; // 4番目のボタン（+2ボタン）を取得
  let clickCount = 0;
  let firstClick = true;

  // 初期状態で+2ボタンはHTMLですでに無効化されているため、再設定は不要

  const clickHandler = (e) => {
    const $targetButton = e.currentTarget;
    let currentCount = parseInt($counter.textContent);

    // 初めてクリックされたときにアラートを表示
    if (firstClick) {
      alert("100回まで高橋名人のように連打して!");
      firstClick = false;
    }

    clickCount++;

    // 特定のカウントに応じたアラート表示
    if (currentCount === 100) {
      alert("マインドフルネスできましたね");
    } else if (currentCount === 101) {
      alert("1000回まで押したら・・・");
    } else if (currentCount === 300 || currentCount === 301) {
      alert("負けないで、ほらそこにゴールは近づいてる");
    } else if (currentCount === 600 || currentCount === 601) {
      alert("揺れる思い、体中感じて");
    } else if (currentCount === 900 || currentCount === 901) {
      alert("桜並木のサライの空へ");
    } else if (currentCount === 1000 || currentCount === 1001) {
      alert("これが没頭ということですね。");
    }

    // 200回目のクリック時に+2ボタンを有効化
    if (clickCount === 200) {
      alert("+2ボタンが押せるようになりました");
      $plus2Button.disabled = false; // +2ボタンを有効にする
    }

    // ボタンに応じたカウント処理
    if ($targetButton.textContent === "+") {
      $counter.textContent = currentCount + 1;
    } else if ($targetButton.textContent === "-") {
      $counter.textContent = currentCount - 1;
    } else if ($targetButton.textContent === "+2") {
      if (clickCount < 200) {
        alert("200回クリックするまで押せません");
      } else {
        $counter.textContent = currentCount + 2;
      }
    }
  };

  // querySelectorAllでボタンを取得し、イベントリスナーをバインド
  const buttons = document.querySelectorAll(".js-button");
  buttons.forEach((button) => {
    button.addEventListener("click", clickHandler);
  });
})();
