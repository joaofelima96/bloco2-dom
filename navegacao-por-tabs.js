const tabMenu = document.querySelectorAll("js-tabmenu li");
const tabContent = document.querySelectorAll("js-tabmenu section");

if (tabContent && tabMenu) {
  function activeTab(index) {
    tabContent.forEach((content) => {
      content.classList.remove("ativo");
    });
    tabContent[index].classList.add("ativo");
  }

  tabMenu.forEach((itemMenu, index) => {
    itemMenu.addEventListener("click", () => {
      activeTab(index);
    });
  });
}
