// Switching between single chat and multiple chats

const chatSection = document.querySelector("#chatSection");
const singleChat = document.querySelector("#singleChat");
const sidebar = document.querySelector("#sidebar2");
const chatBox = document.querySelector("#chatBox");

chatBox.addEventListener("click", () => {
  if (
    chatSection.classList.contains("flex") &&
    singleChat.classList.contains("hidden")
  ) {
    chatSection.classList.add("hidden");
    singleChat.classList.remove("hidden");
    singleChat.classList.add("col-span-10");
    sidebar.classList.remove("col-span-4");
    sidebar.classList.add("col-span-2");
  }
});

// Sidebar open & close menu.

const elements = {
  menuBtn: document.getElementById("menu-btn"),
  sidebar: document.querySelector("#sidebar2"),
  sidebarElements: document.getElementById("sidebar-elements"),
  sidebarElementsNew: document.getElementById("sidebar-elements-2"),
  menu: document.getElementById("menu"),
  logo: document.getElementById("logo"),
  navMenu: document.getElementById("navMenu"),
};

elements.menuBtn.addEventListener("click", () => {
  if (elements.sidebarElements) {
    elements.sidebar.classList.add("w-16");
    elements.sidebar.classList.remove(
      "minWidth",
      "col-span-4",
      "lg:col-span-2"
    );
    elements.sidebarElements.classList.add("hidden");
    elements.sidebarElementsNew.classList.remove("hidden");
    elements.menu.classList.remove("md:ml-12");
    elements.menu.classList.add("ml-3");
    elements.logo.classList.add("hidden");
    elements.navMenu.classList.remove("ml-10");
    elements.navMenu.classList.add("ml-3");
    elements.menuBtn.classList.add("transform");
    elements.menuBtn.classList.add("rotate-180");
  }
});

// Different Chat Btns

const chatButtons = document.querySelectorAll(".chatButtons");

chatButtons.forEach(function(button) {
    button.addEventListener("click", function() {
      chatButtons.forEach(function(btn) {
            btn.classList.remove("highlightChat");
        });
        button.classList.add("highlightChat");
    });
});




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