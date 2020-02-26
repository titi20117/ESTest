let  navSolutionTitle = document.querySelector(".block-page__item_header__intro__nav__solution_title");
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

const media1 = window.matchMedia("(min-width:1024px) and (max-width: 1200px)");
const media2 = window.matchMedia("(min-width:768px) and (max-width: 1000px)");
const media3 = window.matchMedia("(min-width:375px) and (max-width: 700px)");

if (media1.matches) {
    GetTitleDetails();
    console.log("min-width:1024px")    
} else {
    if (media2.matches) {
        GetTitleDetails("min-width:768px");
        console.log("min-width:768px")
    } else {
        if (media3.matches) {
            GetTitleDetails("min-width:375px");
            console.log("min-width:375px")
        } else {
            GetTitleDetails("decktop");
        }
    }
}
