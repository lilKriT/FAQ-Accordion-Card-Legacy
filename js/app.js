function popup() {
    alert('You clicked on a question');
}
// window.addEventListener('load', function (event) { popup(); }, false);

function addingOnClick() {
    let questions = document.getElementsByClassName("accordion-question");
    // let questions = 
    
    for (let i = 0; i < questions.length; i++) {
        questions[i].addEventListener("click", function() {
            accordionClick(this);
        });
    }
}
window.addEventListener('load', function (event) { addingOnClick(); }, false);

function accordionClick(element){
    element.parentElement.classList.toggle("active");
}