function showMenu() {
    var menu = document.getElementById("menu");
    if (menu.className === "menu-list") {
        menu.className += " show";
    } else {
        menu.className = "menu-list";
    }
}