let inputTxt = document.getElementById("input-txt");
let saveInput = document.getElementById("save-input");
let El = document.getElementById("el");
let stores = [];


saveInput.addEventListener("click", function () {
    stores.push(inputTxt.value);

    let items = "";
    for (let i = 0; i < stores.length; i++) {
        items += "<li>" + stores[i] + "</li>";

    }
    El.innerHTML = items;

    let clear = "";
    inputTxt.value = clear;
})
