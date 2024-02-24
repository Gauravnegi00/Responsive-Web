const menu=document.querySelector(".mediadiv");
const overlay=document.querySelector(".overlayer");
 function open_menu(){
    menu.classList.add("openMenu");
    overlay.classList.add("openOverlay");
}
function closeMenu(){
    menu.classList.remove("openMenu");
    overlay.classList.remove("openOverlay");
}
