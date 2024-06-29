(() => {
  const $counter = document.getElementById("js-counter");
  let clickCount = 0;
  let firstClick = true;

  const clickHandler = (e) => {
    const $targetButton = e.currentTarget;
    let currentCount = parseInt($counter.textContent);

    console.log("Button clicked:", $targetButton.textContent);
    console.log("Current count:", currentCount);
    console.log("Click count:", clickCount);

    // 初めてクリックされたときにアラートを表示
    if (firstClick) {
      alert("100回まで高橋名人のように連打して!");
      firstClick = false;
    }

    clickCount++;

    // 100回目のクリック時にアラートを表示
    if (currentCount === 100) {
      alert("マインドフルネスできましたね");
    }

    // 101回目のクリック時にアラートを表示
    if (currentCount === 101) {
      alert("1000回まで押したら・・・");
    }

    // 300回目のクリック時にアラートを表示
    if (currentCount === 300 || currentCount === 301) {
      alert("負けないで、ほらそこにゴールは近づいてる");
    }

    // 600回目のクリック時にアラートを表示
    if (currentCount === 600 || currentCount === 601) {
      alert("揺れる思い、体中感じて");
    }

    // 900回目のクリック時にアラートを表示
    if (currentCount === 900 || currentCount === 901) {
      alert("桜並木のサライの空へ");
    }

    // 1000回目のクリック時にアラートを表示  =がひとつだとずっとalertが表示されるから注意
    if (currentCount === 1000 || currentCount === 1001) {
      alert("これが没頭ということですね。");
    }

    if (currentCount === 200) {
      alert("+2を押せるようになりました");
      // $plus2Button.disabled = false;
    }

    if ($targetButton.textContent === "+") {
      $counter.textContent = currentCount + 1;
    } else if ($targetButton.textContent === "-") {
      $counter.textContent = currentCount - 1;
    } else if ($targetButton.textContent === "+2") {
      console.log("Attempting to increment by +2");
      if (clickCount < 200) {
        alert("まだ押すことができません");
      } else {
        $counter.textContent = currentCount + 2;
      }
    }
  };

  const buttons = document.getElementsByClassName("js-button");
  for (let index = 0; index < buttons.length; index++) {
    buttons[index].addEventListener("click", (e) => clickHandler(e));
  }

  // 初期状態で+2ボタンを無効化
  // $plus2Button.disabled = true;
})();
