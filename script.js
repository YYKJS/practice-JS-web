function changeText() {
    let target = document.getElementById("title");
    
    // 文字の内容を変える
    target.innerText = "文字の色が赤に変わりました！";
    
    // ★新機能：文字の色（styleのcolor）を赤に変える命令
    target.style.color = "red";
}
function changeText() {
    let target = document.getElementById("title");
    
    // もし、今の文字が「JavaScriptの練習ページ」だったら
    if (target.innerText === "JavaScriptの練習ページ") {
        target.innerText = "ボタンが押されました！";
        target.style.color = "orange"; // オレンジ色にする
    } 
    // そうじゃなければ（すでに文字が変わっていたら）元に戻す
    else {
        target.innerText = "JavaScriptの練習ページ";
        target.style.color = "black"; // 黒色に戻す
    }
}
