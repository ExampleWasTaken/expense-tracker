const nameInput = document.getElementById("name");
const dateInput = document.getElementById("date");
const amountInput = document.getElementById("amount");
const subbtn = document.getElementById("add-expense");
const table = document.querySelector("table");

var formContent = {
    name: nameInput.value,
    date: dateInput.value,
    amount: amountInput.value
}

subbtn.addEventListener("click", (e) => {

    e.preventDefault();

    if (formContent.name !== "" && formContent.amount !== "") {
        document.getElementById("warning").innerHTML = "";
        const newRow = document.createElement("tr");
        const newName = document.createElement("td");
        const newDate = document.createElement("td");
        const newAmount = document.createElement("td");
        newName.innerHTML = formContent.name;
        newDate.innerHTML = formContent.date;
        newAmount.innerHTML = formContent.amount;
        newRow.appendChild(newName);
        newRow.appendChild(newDate);
        newRow.appendChild(newAmount);
        table.appendChild(newRow);
    } else {
        document.getElementById("warning").innerHTML = "You have to enter a name, amount and date!";
    }
});

nameInput.addEventListener("keydown", (e) => {
    formContent.name = e.target.value;
});

dateInput.addEventListener("change", (e) => {
    formContent.date = e.target.value;
});

amountInput.addEventListener("keydown", (e) => {
    formContent.amount = e.target.value;
});

