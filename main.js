const questionElem = document.querySelector(".question");
const answerElem = document.querySelector(".answer");
const showAnswerButtonElem = document.querySelector(".showAnswerButton");

messageElem.innerText = "this is from Javascript";
changeTextButtonElem.addEventListener("click", () => {
    messageElem.innerText = "TEXT WAS CHANGED";
});
