const content = document.querySelector(".main__content"),
    contentLine = document.querySelector(".content__line"),
    SHOWING_CON = "showing__content",
    HIDING_CON = "hiding__content",
    ZOOMIN_LINE = "zoom-in",
    ZOOMOUT_LINE = "zoom-out",
    NONE = "none"

function handleClick(){
    if (content.classList.contains(SHOWING_CON)) {
        contentLine.classList.remove(ZOOMIN_LINE);
        contentLine.classList.add(ZOOMOUT_LINE);
        content.classList.remove(SHOWING_CON);
        content.classList.add(HIDING_CON);
        setTimeout(function(){
            guide.classList.remove(NONE);
        }, 1500)
    } else {
        guide.classList.add(NONE);
        contentLine.classList.add(ZOOMIN_LINE);
        contentLine.classList.remove(ZOOMOUT_LINE);
        content.classList.remove(HIDING_CON)
        content.classList.add(SHOWING_CON)
    }
}

function init() {
    title.addEventListener("click", handleClick);
    guide.addEventListener("click", handleClick);
}

init();