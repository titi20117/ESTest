let  navSolutionTitle = document.querySelector(".block-page__item_header__intro__nav__solution_title");
let navSolutionTitleDetails = document.querySelector(".block-page__item_header__intro__nav__solution_title__details");

let menuLeft = document.querySelector(".block-page__item_header__description__menu-left");
let menuRight = document.querySelector(".block-page__item_header__description__menu-right");
let imgRobot = document.querySelector(".block-page__item_header__description__menu-left img");

console.log(navSolutionTitle);


let GetTitleDetails = () => {
    navSolutionTitle.addEventListener('mouseenter', (e) => {
        navSolutionTitleDetails.style.display = "block";
        imgRobot.style.top = "82%";
        e.stopPropagation();
    });

    navSolutionTitle.addEventListener('mouseleave', (e) => {
        setTimeout(() => {
            navSolutionTitleDetails.style.display = "none";
            imgRobot.style.position = "absolute";
            imgRobot.style.top = "58%";
            imgRobot.style.left = "44%";
        }, 5000);
        e.stopPropagation();
    });
}

GetTitleDetails();