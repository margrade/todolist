//select elements in DOM
const form = document.querySelector("#itemForm");
const itemInput = document.querySelector("#itemInput");
const itemList = document.querySelector("#itemList");
const filters = document.querySelectorAll(".nav-item")


// create an empty item list
let todoItems = [];

const getList = function(todoItems){
    itemsList.innerHTML = "";
    if(todoItems.lenght > 0){
        todoItems.forEach((item) => {
            let litag = `<li class="list-group-item d-flex justify-content-between align-center">
            <span>${item.name}</span>
            <span>
                <a><i class="bi bi-check-circle green"></i></a>
                <a><i class="bi bi-pencil-square blue"></i></a>
                <a><i class="bi bi-x-circle red"></i></a>
            </span>
        </li>`;
            itemsList.insertAdjacentHTML("beforeend")
        });
    }
    else{

    }
}

//get items from LocalStorage
const getLocalStorage = function (){
    const todoStorage = localStorage.getItem("todoItems");
    if(todoStorage === "undefined" || todoStorage === null ) {
        todoItems = [];
    }
    else{
        todoItems = JSON.parse(todoStorage);
    }
    console.log("items", todoItems);
    
}

// set in local storage
const setLocalStorage = function (todoItems){
    localStorage.setItem("todoItems", JSON.stringify(todoItems));
}

document.addEventListener("DOMContentLoaded", () => {
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const itemName= itemInput.value.trim();
        if (itemName.lenght === 0){
            alert("Please enter a task...");

        }
        else {
            const itemObj = {
                name: itemName,
                isDone: false,
                addedAt: new Date().getTime()
            };
            todoItems.push(itemObj);
            setLocalStorage(todoItems);
        }
        
    });
    getLocalStorage();
});