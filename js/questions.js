const title = document.querySelector(".header__title"),
    guide = document.querySelector(".header__guide"),
    questionsContainer = document.querySelector(".header__question__container");
    questions = document.querySelector(".header__question");

const HIDING_CN = "hiding",
    SHOWING_CN = "showing";

const NOVEL_WORDS = [
    "구름의 모양이 기억나시나요?",
    "오늘 하늘은 어떤 색이었나요?",
    "쫓기고 있나요?",
    "눈이 녹으면 무엇이 되나요?",
    "어떨때 즐거운가요?",
    "어떨때 행복한가요?",
    "구름이 걷히면, 해가 뜨나요?",
    "봄은 어떤 느낌이었나요?",
    "달의 모양이 기억나시나요?",
    "햇살의 느낌을 적어보세요.",
    "어젯밤 꿈을 꿨나요?",
    "그리운가요?",
    "1 + 1 = ?",
    "솜사탕의 질감을 알고 있나요?",
    "좋아하는 공간이 있나요?",
];

const WORDS_NUMBERS = NOVEL_WORDS.length;

function handleClick() {
    if (questionsContainer.classList.contains(SHOWING_CN)) {
        questionsContainer.classList.add(HIDING_CN);
        questionsContainer.classList.remove(SHOWING_CN);
    } else {
    const randomNumber = Math.floor(Math.random() * WORDS_NUMBERS);
        questionsContainer.classList.remove(HIDING_CN);
        questionsContainer.classList.add(SHOWING_CN);
        questions.placeholder = NOVEL_WORDS[randomNumber];
    }
}

function init(){
    title.addEventListener("click", handleClick);
    guide.addEventListener("click", handleClick);
}

init();