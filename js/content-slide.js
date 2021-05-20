const body = document.body,
    content = document.querySelector(".main__content"),
    nav = document.querySelector(".nav__container"),
    contentLine = document.querySelector(".content__line"),
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
        setTimeout(function(){
            guide.classList.remove(NONE);
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
        setTimeout(function(){
            body.style.overflow = "auto";
        }, 2000)
    }
}

function init() {
    title.addEventListener("click", handleClick);
    guide.addEventListener("click", handleClick);
}

init();