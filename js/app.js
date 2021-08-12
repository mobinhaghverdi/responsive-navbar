// variables

let btn = document.querySelector(".bars");
let list = document.querySelector(".un-list");



// eventListeners
eventListeners()
function eventListeners() {

    btn.addEventListener("click", changesInTheList)

}

function changesInTheList() {
    list.classList.toggle("un-after");
}