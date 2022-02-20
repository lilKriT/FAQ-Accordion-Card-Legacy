function popup() {
    alert('You clicked on a question');
}
// window.addEventListener('load', function (event) { popup(); }, false);

function addingOnClick() {
    let questions = document.getElementsByClassName("accordion-question");
    
    for (let i = 0; i < questions.length; i++) {
        questions[i].onclick = popup;
    }
}
window.addEventListener('load', function (event) { addingOnClick(); }, false);