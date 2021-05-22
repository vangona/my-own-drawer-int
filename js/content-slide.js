const body = document.body,
    content = document.querySelector(".main__content"),
    contentBoxes = document.querySelectorAll(".content__container"),
    nav = document.querySelector(".nav__container"),
    contentLine = document.querySelector(".content__line"),
    boxshadow = "5px 8px 15px 0px rgba(0,0,0,0.79)",
    // answer = document.getElementById("answer").parentNode,
    SHOWING_CON = "showing__content",
    HIDING_CON = "hiding__content",
    SHOWING_NAV = "showing__nav",
    HIDING_NAV = "hiding__nav",
    ZOOMIN_LINE = "zoom-in",
    ZOOMOUT_LINE = "zoom-out",
    NONE = "none"

function handleClick(){
    if (content.classList.contains(SHOWING_CON)) {
        nav.classList.remove(SHOWING_NAV);
        nav.classList.add(HIDING_NAV);
        contentLine.classList.remove(ZOOMIN_LINE);
        contentLine.classList.add(ZOOMOUT_LINE);
        content.classList.remove(SHOWING_CON);
        content.classList.add(HIDING_CON);
        guide.classList.remove(NONE);
        contentBoxes.forEach(function(contentBox){
            contentBox.classList.remove(SHOWING_CN)
            contentBox.style.boxShadow = "none";
        })
        contentBoxes[0].classList.add(HIDING_CN)
        setTimeout(function(){
            body.style.overflow = "hidden";
        }, 1500)
    } else {
        guide.classList.add(NONE);
        nav.classList.remove(HIDING_NAV);
        nav.classList.add(SHOWING_NAV);
        contentLine.classList.add(ZOOMIN_LINE);
        contentLine.classList.remove(ZOOMOUT_LINE);
        content.classList.remove(HIDING_CON)
        content.classList.add(SHOWING_CON)
        contentBoxes[0].classList.remove(HIDING_CN)
        contentBoxes[0].classList.add(SHOWING_CN)
        setTimeout(function(){
            body.style.overflow = "auto";
            contentBoxes.forEach(box => box.style.boxShadow = boxshadow)
        }, 2000)
    }
}

function init() {
    title.addEventListener("click", handleClick);
    guide.addEventListener("click", handleClick);
}

init();