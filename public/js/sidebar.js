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
  