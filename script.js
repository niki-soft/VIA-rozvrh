window.addEventListener('load', function(event) {

    time = new Date();

    updateTimeString();
    updateTimeLine();

    buttonShowAll();

    setInterval(
        function(){
            time = new Date();

            updateTimeLine();
            updateTimeString();
        }, 1000);

    this.document.getElementById("btn-all").addEventListener("click", function() {buttonShowAll()});
    this.document.getElementById("btn-lectures").addEventListener("click", function() {buttonLectures()});
    this.document.getElementById("btn-practices").addEventListener("click", buttonPractices);

})

window.addEventListener("resize", updateTimeLine());

function buttonShowAll() {
    var el = document.getElementsByClassName("lecture");
    for (let i = 0; i < el.length; i++) {
        el[i].classList.add("highlight");
    }

    var el = document.getElementsByClassName("practice");
    for (let i = 0; i < el.length; i++) {
        el[i].classList.add("highlight");
    }
}

function buttonLectures() {
    var el = document.getElementsByClassName("lecture");
    for (let i = 0; i < el.length; i++) {
        el[i].classList.add("highlight");
    }

    var el = document.getElementsByClassName("practice");
    for (let i = 0; i < el.length; i++) {
        el[i].classList.remove("highlight");
    }
}

function buttonPractices() {
    var el = document.getElementsByClassName("lecture");
    for (let i = 0; i < el.length; i++) {
        el[i].classList.remove("highlight");
    }

    var el = document.getElementsByClassName("practice");
    for (let i = 0; i < el.length; i++) {
        el[i].classList.add("highlight");
    }
}