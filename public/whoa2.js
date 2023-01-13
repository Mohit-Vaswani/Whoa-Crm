// Chat Box list
const teamChat = document.getElementById("teamChat");
const clientChat = document.getElementById("clientChat");
const newChat = document.getElementById("newChat");
const notification = document.getElementById("notification");
const boxList1 = document.querySelectorAll(".boxList-1");
const boxList2 = document.querySelectorAll(".boxList-2");

if(teamChat.classList.contains("highlightChat")){
  boxList2.classList.add("hidden");
}