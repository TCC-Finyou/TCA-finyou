const menu = document.querySelector("[data-menu]")

const menuItems = document.querySelector("[data-menu-items]")

menu.addEventListener("click", () => {
    menuItems.classList.toggle("show")
})