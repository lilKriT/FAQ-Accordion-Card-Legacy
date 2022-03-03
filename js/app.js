function popup() {
    alert('You clicked on a question');
}
// window.addEventListener('load', function (event) { popup(); }, false);

function addingOnClick() {
    let questions = document.getElementsByClassName("accordion-question");
    // let questions = 

    for (let i = 0; i < questions.length; i++) {
        questions[i].addEventListener("click", function () {
            accordionClick(this, questions);
        });
    }
}
window.addEventListener('load', function (event) { addingOnClick(); }, false);

function accordionClick(element, questions) {
    if (element.parentElement.classList.contains("active")) {
        element.parentElement.classList.toggle("active");
    } else {
        for (let i = 0; i < questions.length; i++) {
            const q = questions[i];
            q.parentElement.classList.remove("active");
        }
        element.parentElement.classList.toggle("active");
    }
}