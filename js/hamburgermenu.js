// 3本線から✕に変化するボタン-1
const btn_3x = document.getElementById("btn_3x");
btn_3x.addEventListener("click", function () {
  this.classList.toggle("active");
});

// 3本線から✕に変化するボタン-2
const btn_3x_2 = document.getElementById("btn_3x_2");
btn_3x_2.addEventListener("click", function () {
  this.classList.toggle("active");
});

// 2本線から✕に変化するボタン
const btn_2x = document.getElementById("btn_2x");
btn_2x.addEventListener("click", function () {
  this.classList.toggle("active");
});

// MENUから✕に変化するボタン
const btn_mx = document.getElementById("btn_mx");
btn_mx.addEventListener("click", function () {
  this.classList.toggle("active");
});
