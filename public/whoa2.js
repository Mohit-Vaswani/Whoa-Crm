// Chat Box list
// const teamChat = document.getElementById("teamChat");
// const clientChat = document.getElementById("clientChat");
// const newChat = document.getElementById("newChat");
// const notification = document.getElementById("notification");
// const boxList1 = document.querySelectorAll(".boxList-1");
// const boxList2 = document.querySelectorAll(".boxList-2");

const chatOptions = document.getElementById("chatOptions"); // tabBtn
const chatItems = document.getElementById("chatItems"); // tabContents

chatOptions.forEach(function(element) {
   element.addEventListener("click", openTabs);
});

function openTabs(evt) {
  const btnTarget = evt.currentTarget;
  const item = btnTarget.dataset.item;

  chatItems.forEach(function(item) {
      item.classList.remove("tab__item--active");
   });

   chatOptions.forEach(function(item) {
      item.classList.remove("tab__btn--active");
   });

   document.querySelector(`#${item}`).classList.add("tab__item--active");

   btnTarget.classList.add("tab__btn--active"); 
}