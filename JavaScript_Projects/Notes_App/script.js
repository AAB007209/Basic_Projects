const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");

//- If we have any notes already in the localstorage this displays them.
function showNotes() {
    notesContainer.innerHTML = localStorage.getItem("notes");
}
showNotes();

//, Updating the Local Storage whenever we add new notes.
function updateStorage() {
    localStorage.setItem("notes", notesContainer.innerHTML);
}

//` We are creating a Note here when Button is clicked.
createBtn.addEventListener("click", () => {
    let inputBox = document.createElement("p");
    let img = document.createElement("img");

    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");

    img.src = "Images/delete.png";
    notesContainer.appendChild(inputBox).appendChild(img);
})

//! After deleting as well we are updating local storage
notesContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "IMG") {
        e.target.parentElement.remove();
        updateStorage();
    }
    else if (e.target.tagName === "P") {
        notes = document.querySelectorAll(".input-box");
        notes.forEach(nt => {
            nt.onkeyup = function () {
                updateStorage();
            }
        })
    }
})

//- Preventing the default value of Enter for next line instead of creating new note.
document.addEventListener("keydown", event => {
    if (event.key == "Enter") {
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
})