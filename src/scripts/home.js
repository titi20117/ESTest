let navSolutionTitle = document.querySelector(".block-page__item_header__intro__nav__solution_title");
let navSolutionTitleDetails = document.querySelector(".block-page__item_header__intro__nav__solution_title__details");

let menuLeft = document.querySelector(".block-page__item_header__description__menu-left");
let menuRight = document.querySelector(".block-page__item_header__description__menu-right");
let imgRobot = document.querySelector(".block-page__item_header__description__menu-left img");

console.log(navSolutionTitle);


let GetTitleDetails = () => {
    navSolutionTitle.addEventListener('mouseenter', (e) => {
        if (window.matchMedia("(min-width:1024px) and (max-width: 1200px)").matches) {
            navSolutionTitleDetails.style.display = "block";
            imgRobot.style.top = "82%";
        } else {
            navSolutionTitleDetails.style.display = "block";
            imgRobot.style.top = "82%";
        }
        e.stopPropagation();
    });

    navSolutionTitle.addEventListener('mouseleave', (e) => {
        setTimeout(() => {
            if (window.matchMedia("(min-width:1024px) and (max-width: 1200px)").matches) {
                navSolutionTitleDetails.style.display = "none";
                imgRobot.style.position = "absolute";
                imgRobot.style.top = "58%";
                imgRobot.style.left = "34%";    
            } else {
                navSolutionTitleDetails.style.display = "none";
                imgRobot.style.position = "absolute";
                imgRobot.style.top = "60%";
                imgRobot.style.left = "44%";
            }
        }, 5000);
        e.stopPropagation();
    });
}

const elBurger = document.querySelector('.block-page__item_header__burger');
const elIntro = document.querySelector('.block-page__item_header__intro');
const burgerMenu = document.querySelector('.block-page__item_header__burger-menu');
const burgerMenuNav = document.querySelector('.block-page__item_header__burger-menu__section');
const burgerMenuAccess = document.querySelector('.block-page__item_header__burger-menu__access');
const elHeaderDescription = document.querySelector('.block-page__item_header__description');
const section = document.querySelector('.block-page__item_section');
const footer = document.querySelector('.block-page__item_footer');

const ShowBurgerMenu = () => {
    elBurger.addEventListener('click', () => {
        burgerMenu.style.display = 'block';
        burgerMenuNav.style.display = 'block';
        burgerMenuAccess.style.display = 'block';
        burgerMenu.style.marginLeft = "0";
        elHeaderDescription.style.marginLeft = "-1500px";
        section.style.display = 'none';
        footer.style.display = 'none';
        elIntro.style.display = 'none';
    })
}

const media1 = window.matchMedia("(min-width:1024px) and (max-width: 1200px)");
const media2 = window.matchMedia("(min-width:768px) and (max-width: 1000px)");
const media3 = window.matchMedia("(min-width:375px) and (max-width: 700px)");

if (media1.matches) {
    GetTitleDetails();
    console.log("min-width:1024px")    
} else {
    if (media2.matches) {
        ShowBurgerMenu();
        console.log("min-width:768px")
    } else {
        if (media3.matches) {
            ShowBurgerMenu();
            console.log("min-width:375px")
        } else {
            GetTitleDetails();
        }
    }
}
