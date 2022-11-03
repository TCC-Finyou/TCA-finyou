const menu = document.querySelector("[data-menu]")

const menuItems = document.querySelector("[data-menu-items]")

const menuSpans=document.querySelectorAll("[data-menu-span]")

menu.addEventListener("click", () => {
    menuItems.classList.toggle("show")
    menuSpans.forEach(menuSpan => {
        menuSpan.classList.toggle("close")
    })
})