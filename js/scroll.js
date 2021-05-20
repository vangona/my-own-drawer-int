const contentTitles = document.querySelectorAll(".content__title");

function handleClick(event){
    if (content.classList.contains(SHOWING_CON)) {
        window.scrollTo({top:event.target.parentNode.offsetTop -10, behavior:'smooth'});
    } 
}

function init() {
    contentTitles.forEach(function(contentTitle){
        contentTitle.addEventListener("click", handleClick)
    });
}

init();