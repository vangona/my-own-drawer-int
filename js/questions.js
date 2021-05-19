const title = document.querySelector(".header__title"),
    guide = document.querySelector(".header__guide"),
    questions = document.querySelector(".header__question");

const HIDING_CN = "hiding",
    SHOWING_CN = "showing";

const NOVEL_WORDS = [
    "‘ 구름의 모양이 기억나시나요? ’",
    "‘ 오늘 하늘은 어떤 색이었나요? ’",
    "‘ 쫓기고 있나요? ’",
];

const WORDS_NUMBERS = NOVEL_WORDS.length;

function handleClick() {
    if (questions.classList.contains(SHOWING_CN)) {
        questions.classList.add(HIDING_CN);
        questions.classList.remove(SHOWING_CN);
    } else {
    const randomNumber = Math.floor(Math.random() * WORDS_NUMBERS);
        questions.classList.remove(HIDING_CN);
        questions.classList.add(SHOWING_CN);
        questions.innerText = NOVEL_WORDS[randomNumber];
    }
}

function init(){
    title.addEventListener("click", handleClick);
    guide.addEventListener("click", handleClick);
}

init();