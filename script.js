function changeText() {
    // 1. htmlの中から idが "title" の要素（h1）を探して、変数 target に入れます
    let target = document.getElementById("title");

    // 2. その要素の中身のテキスト（innerText）を書き換えます
    target.innerText = "ボタンが押されたので、文字が書き換わりました！";
}