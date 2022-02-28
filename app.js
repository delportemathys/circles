
var input_answer = document.querySelector("#answer")
var first_circle = document.querySelector("#first-circle")

first_circle.style.width = first_circle.clientHeight + "px"

window.addEventListener('resize', function(event) {
    first_circle.style.width = first_circle.clientHeight + "px"
}, true);

// window.addEventListener('click', function(event) {
//     window.location.href = "/p1/index.html";
// }, true);

function submit() {
    var input_answer_content = input_answer.value;
    input_answer_content = Math.round(input_answer_content)
    if (input_answer_content == 201) {
        window.location.href = "/win/win.html";
    }
    else {
        window.location.href = "/lose/lose.html";
    }
}