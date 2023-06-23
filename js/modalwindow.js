// ボタンを押すと表示されるウィンドウ
const body = document.getElementById("body");
const grayout = document.getElementById("grayout");
const window_modal_1 = document.getElementById("window_modal_1");
const btn1 = document.getElementById("btn-1");
const btn2 = document.getElementById("btn-2");
const btn3 = document.getElementById("btn-3");
const openModal = () => {
  window_modal_1.showModal();
  body.classList.add("scroll-off");
  grayout.classList.remove("hide");
};
const closeModal = () => {
  window_modal_1.close();
  body.classList.remove("scroll-off");
  grayout.classList.add("hide");
};

btn1.addEventListener("click", () => openModal());
btn2.addEventListener("click", () => closeModal());
btn3.addEventListener("click", () => closeModal());
grayout.addEventListener("click", () => closeModal());
