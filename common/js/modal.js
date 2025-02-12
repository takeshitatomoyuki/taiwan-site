// モーダルを表示するスクリプト
var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

// ボタンをクリックしたときにモーダルを開く
btn.onclick = function () {
  modal.style.display = "block";
}

// <span> (x) をクリックしたときにモーダルを閉じる
span.onclick = function () {
  modal.style.display = "none";
}

// モーダルの外側をクリックしたときにモーダルを閉じる
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}