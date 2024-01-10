//using selectors inside the element
const questions = document.querySelectorAll(".question");
questions.forEach((question) => {
    let btn = question.querySelector(".question-btn");
    btn.addEventListener("click", () => {
        questions.forEach((item) => {
            if (item !== question) {
                item.classList.remove("show-text");
            }
        });
        question.classList.toggle("show-text");
    });
});
// traversing the dom
// const btns = document.querySelectorAll(".question-btn");
// btns.forEach((btn) => {
//     btn.addEventListener("click", () => {
//         let parent = btn.parentElement.parentElement;
//         parent.classList.toggle("show-text");

//         btns.forEach((otherBtn) => {
//             if (otherBtn !== btn) {
//                 otherBtn.parentElement.parentElement.classList.remove(
//                     "show-text"
//                 );
//             }
//         });
//     });
// });
