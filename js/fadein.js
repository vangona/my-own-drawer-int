const navs = document.querySelectorAll(".nav-box"),
homeButtons = document.querySelectorAll(".button__home"),
leftButtons = document.querySelectorAll(".button__left"),
rightButtons = document.querySelectorAll(".button__right"),
summary = document.getElementById("summary").parentNode,
concept = document.getElementById("concept").parentNode,
explain = document.getElementById("explain").parentNode,
career = document.getElementById("career").parentNode;

let vh = 0.01 * window.innerHeight;    

function isMobile(){
	if (userAgent.match(/iPhone|iPod|Android|Windows CE|BlackBerry|Symbian|Windows Phone|webOS|Opera Mini|Opera Mobi|POLARIS|IEMobile|lgtelecom|nokia|SonyEricsson/i) != null || userAgent.match(/LG|SAMSUNG|Samsung/) != null){
		return true;
    } else{
		return false;
	}
}

function handleNavClick(navEvent) {
    if (content.classList.contains(SHOWING_CON)) {
        if (navEvent.target.classList.contains(SHOWING_CN)){
        } else {
            // if (navEvent.target.classList.contains("nav__answer")){
            //     concept.classList.remove(SHOWING_CN)
            //     explain.classList.remove(SHOWING_CN)
            //     career.classList.remove(SHOWING_CN)
            //     summary.classList.remove(SHOWING_CN)
            //     answer.classList.add(SHOWING_CN)
            //     window.scrollTo({top:answer.offsetTop -vh, behavior:'smooth'});
            // } 
            if (navEvent.target.classList.contains("nav__summary")){
                concept.classList.remove(SHOWING_CN)
                explain.classList.remove(SHOWING_CN)
                career.classList.remove(SHOWING_CN)
                // answer.classList.remove(SHOWING_CN)
                summary.classList.add(SHOWING_CN)
                if (isMobile()){
                    window.scrollTo({top:summary.offsetTop -vh -30, behavior:'smooth'});
                } else {
                    window.scrollTo({top:summary.offsetTop -vh -120, behavior:'smooth'});
                }
            } else if (navEvent.target.classList.contains("nav__concept")){
                explain.classList.remove(SHOWING_CN)
                career.classList.remove(SHOWING_CN)
                summary.classList.remove(SHOWING_CN)
                // answer.classList.remove(SHOWING_CN)
                concept.classList.add(SHOWING_CN)
                if (isMobile()){
                    window.scrollTo({top:concept.offsetTop -vh -30, behavior:'smooth'});
                } else {
                    window.scrollTo({top:concept.offsetTop -vh -120, behavior:'smooth'});
                }
            } else if (navEvent.target.classList.contains("nav__explain")){
                career.classList.remove(SHOWING_CN)
                summary.classList.remove(SHOWING_CN)
                concept.classList.remove(SHOWING_CN)
                // answer.classList.remove(SHOWING_CN)
                explain.classList.add(SHOWING_CN)
                if (isMobile()){
                    window.scrollTo({top:explain.offsetTop -vh -30, behavior:'smooth'});
                } else {
                    window.scrollTo({top:explain.offsetTop -vh -120, behavior:'smooth'});
                }
            } else if (navEvent.target.classList.contains("nav__career")){
                summary.classList.remove(SHOWING_CN)
                concept.classList.remove(SHOWING_CN)
                explain.classList.remove(SHOWING_CN)
                // answer.classList.remove(SHOWING_CN)
                career.classList.add(SHOWING_CN)
                if (isMobile()){
                    window.scrollTo({top:career.offsetTop -vh -30, behavior:'smooth'});
                } else {
                    window.scrollTo({top:career.offsetTop -vh -120, behavior:'smooth'});
                }
            }
        }
    } 
}

function handleHomeClick() {
    window.scrollTo({top:0, behavior:'smooth'});
}

function handleLeftArrow(event) {
    const clickedLeftArrow = event.target.parentNode.parentNode;
    const previousElement = clickedLeftArrow.previousElementSibling
    if (clickedLeftArrow != contentBoxes[0]) {
        clickedLeftArrow.classList.remove(SHOWING_CN)
        previousElement.classList.add(SHOWING_CN)
        if (isMobile()){
            window.scrollTo({top:previousElement.offsetTop -vh -30, behavior:'smooth'});
        } else {
            window.scrollTo({top:previousElement.offsetTop -vh -120, behavior:'smooth'});
        }
    }
}

function handleRightArrow(event) {
    const clickedRightArrow = event.target.parentNode.parentNode;
    const nextElement = clickedRightArrow.nextElementSibling
    if (clickedRightArrow != contentBoxes[contentBoxes.length - 1]) {
        clickedRightArrow.classList.remove(SHOWING_CN)
        nextElement.classList.add(SHOWING_CN)
        if (isMobile()){
            window.scrollTo({top:nextElement.offsetTop -vh -30, behavior:'smooth'});
        } else {
            window.scrollTo({top:nextElement.offsetTop -vh -120, behavior:'smooth'});
        }
    }
}

function init() {
    navs.forEach(function(nav){
        nav.addEventListener("click", handleNavClick);
    });
    
    homeButtons.forEach(function(button){
        button.addEventListener("click", handleHomeClick);
    });

    leftButtons.forEach(function(leftbutton){
        leftbutton.addEventListener("click", handleLeftArrow);
    })

    rightButtons.forEach(function(leftbutton){
        leftbutton.addEventListener("click", handleRightArrow);
    })
}

init();