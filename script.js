let toControllerBtn;
let page1;
let page2;
let scrollval = 0;

window.addEventListener("load", () => {
    toControllerBtn = document.getElementById("next");
    toDrownBtn = document.getElementById("prev");
    page1 = document.getElementById("page1");
    page2 = document.getElementById("page2");

    toDrownBtn.addEventListener("click", moveToDrown);
    toControllerBtn.addEventListener("click", moveToController);

});

window.addEventListener("wheel", (event) => {
    console.log(event.deltaY)
    if (event.deltaY < 0) {
        moveToDrown();
    } else {
        moveToController();
    }
});


const moveToController = () => {

    page2.classList.remove("animsecond-playrev");
    page1.classList.remove("animfirst-playrev");

    page2.classList.add("animsecond-play");
    page1.classList.add("animfirst-play");

    page2.classList.add("page2-shown");
    page2.classList.remove("page2-hidden");

    page1.classList.add("page1-hidden");
    page1.classList.remove("page1-shown");


}

const moveToDrown = () => {

    page2.classList.remove("animsecond-play");
    page1.classList.remove("animfirst-play");


    page2.classList.add("animsecond-playrev");
    page1.classList.add("animfirst-playrev");



    page2.classList.remove("page2-shown");
    page2.classList.add("page2-hidden");

    page1.classList.remove("page1-hidden");
    page1.classList.add("page1-shown");



}