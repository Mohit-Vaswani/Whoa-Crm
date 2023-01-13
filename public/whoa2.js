// Chat Box list

const chatButtons = document.querySelectorAll(".chatButtons"); // tabBtn
const chatContents = document.querySelectorAll("chat__item"); // tabContents

chatButtons.forEach(function(element) {
   element.addEventListener("click", openTabs);
});

function openTabs(evt) {
  const btnTarget = evt.currentTarget;
  const item = btnTarget.dataset.item;

  chatContents.forEach(function(item) {
      item.classList.remove("chat__item--active");
   });

   chatButtons.forEach(function(item) {
      item.classList.remove("chat__btn--active");
   });

   document.querySelector(`#${item}`).classList.add("chat__item--active");

   btnTarget.classList.add("chat__btn--active"); 
}