const contentTitles = document.querySelectorAll(".content__title"),
    navs = document.querySelectorAll(".nav-box"),
    homeButtons = document.querySelectorAll(".button__home"),
    summary = document.getElementById("summary").parentNode,
    concept = document.getElementById("concept").parentNode,
    explain = document.getElementById("explain").parentNode,
    career = document.getElementById("career").parentNode;

let vh = 0.01 * window.innerHeight;

function handleTitleClick(event){
    if (content.classList.contains(SHOWING_CON)) {
        window.scrollTo({top:event.target.parentNode.offsetTop -vh, behavior:'smooth'});
    } 
}

function handleNavClick(navEvent) {
    if (content.classList.contains(SHOWING_CON)) {
        if (navEvent.target.classList.contains("nav__summary")){
            window.scrollTo({top:summary.offsetTop -vh, behavior:'smooth'});
        } else if (navEvent.target.classList.contains("nav__concept")){
            console.log(navEvent.target)
            window.scrollTo({top:concept.offsetTop -vh, behavior:'smooth'});
        } else if (navEvent.target.classList.contains("nav__explain")){
            console.log(navEvent.target)
            window.scrollTo({top:explain.offsetTop -vh, behavior:'smooth'});
        } else if (navEvent.target.classList.contains("nav__career")){
            console.log(navEvent.target)
            window.scrollTo({top:career.offsetTop -vh, behavior:'smooth'});
        }
    } 
}

function handleHomeClick() {
    window.scrollTo({top:0, behavior:'smooth'});
}

function resizeHandle() {
    vh = 0.01 * window.innerHeight;
}

// 스크롤 이벤트 추가하기

// function handleScroll(){
//     let currentScrollValue = document.documentElement.scrollTop;
//     if (explain.offsetTop - 2*vh > currentScrollValue && currentScrollValue > concept.offsetTop - 2*vh) {
//         window.scrollTo({top:summary.offsetTop -vh, behavior:'smooth'});
//     }

// }

function init() {
    contentTitles.forEach(function(contentTitle){
        contentTitle.addEventListener("click", handleTitleClick);
    });
    navs.forEach(function(nav){
        nav.addEventListener("click", handleNavClick);
    });
    
    homeButtons.forEach(function(button){
        button.addEventListener("click", handleHomeClick);
    });

    // document.addEventListener("scroll", handleScroll);

    window.addEventListener("resize", resizeHandle);
}

init();