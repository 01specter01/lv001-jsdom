const messageElem = document.querySelector(".message");
const changeTextButtonElem = document.querySelector(".changeTextButton");

messageElem.innerText = "this is from Javascript";
changeTextButtonElem.addEventListener("click", () => {
    console.log("button was clicked");
});
