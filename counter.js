(() => {
  const $counter = document.getElementById("js-counter");
  const $plus2Button = document.getElementById("js-plus2-button"); // idで+2ボタンを取得
  let clickCount = 0;
  let firstClick = true;

  // 初期状態で+2ボタンが正しく無効化されているか確認
  if (!$plus2Button) {
    console.error("Error: +2 button not found.");
    return; // ボタンが見つからない場合は処理を中断
  }

  const clickHandler = (e) => {
    const $targetButton = e.currentTarget;
    let currentCount = parseInt($counter.textContent);

    // 初めてクリックされたときにアラートを表示
    if (firstClick) {
      alert("100回まで高橋名人のように連打して!");
      firstClick = false;
    }

    clickCount++;

    // 200回目のクリック時に+2ボタンを有効化
    if (clickCount === 200) {
      alert("+2ボタンが押せるようになりました");
      $plus2Button.disabled = false; // +2ボタンを有効にする
    }

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

    // ボタンに応じたカウント処理
    if ($targetButton.textContent === "+") {
      $counter.textContent = currentCount + 1;
    } else if ($targetButton.textContent === "-") {
      $counter.textContent = currentCount - 1;
    } else if ($targetButton.id === "js-plus2-button") {
      // クリック数が200回以上である場合のみ+2ボタンが動作
      if (clickCount >= 200) {
        $counter.textContent = currentCount + 2;
      } else {
        alert("200回クリックするまで押せません");
      }
    }
  };

  // querySelectorAllでボタンを取得し、イベントリスナーをバインド
  const buttons = document.querySelectorAll(".js-button");
  buttons.forEach((button) => {
    button.addEventListener("click", clickHandler);
  });
})();
