let BurgerBtn = document.querySelector(".Burger-Menu-Btn");
let BurgerMenu = document.querySelector(".Burger-Menu");


let isMenuOpen = false;


BurgerBtn.onclick = function(){
    if(isMenuOpen){
        BurgerMenu.style.display = "none";
        BurgerBtn.style.backgroundPosition = "center , center left 50px";
        isMenuOpen = false;
    }
    else{
        BurgerMenu.style.display = "block";
        BurgerBtn.style.backgroundPosition = "center left 50px , center";
        isMenuOpen = true;
    }
}