// Form
const form = document.getElementById("makeBudget");

// Income field
const income = document.getElementById("income");


// Create a new category fields
const category = document.getElementById("addExpense");
const proportion = document.getElementById("proportion");
const add = document.getElementById("add");

var categoryFields = [category, proportion, add];

// Table of categories
const table = document.getElementById("categories");
var tableBody;

// All Close buttons
var closeButtons = document.getElementsByClassName("close");

// Sum of categories
var categories = [];
var percentages = [];
var moneyAllocated = [];

// Income label
var incomeLabel = document.getElementById("incomeLabel");

// Submit button
const submitButton = document.getElementById("submit");

// Back button
const backButton = document.getElementById("backButton");




// Fire when add button is clicked
add.addEventListener('click', (event) => {
    setEmpty("expenseError");
    setEmpty("percentError");


    let valid = true;

    if (category.value == "") {
        errorMessage("expenseError", "Please enter a category name.");
        valid = false;
    }

    if (parseFloat(proportion.value) <= 0 || parseFloat(proportion.value) > 100 || proportion.value == "") {
        errorMessage("percentError", "Please enter a value between 0 and 100.");
        valid = false;
    }

    if (sumPercentages() + (parseFloat(proportion.value) / 100) > 1) {
        errorMessage("percentError", "The total of percentages is greater than 100%.");
        valid = false;
    }
    

    if (valid) {
        

        if (table.tBodies.length == 0) {
            tableBody = document.createElement("tbody");

            let row = document.createElement("tr");
            let cat = document.createElement("th");
            cat.appendChild(document.createTextNode("Category"));
            row.appendChild(cat);
            let percent = document.createElement("th");
            percent.appendChild(document.createTextNode("Percent of Income"));
            row.appendChild(percent);
            tableBody.appendChild(row);

            table.appendChild(tableBody);
        }

        let row = document.createElement("tr");

        let cat = document.createElement("td");
        cat.appendChild(document.createTextNode(category.value));
        row.appendChild(cat);
        categories.push(category.value);

        let val = document.createElement("td");
        val.appendChild(document.createTextNode(proportion.value + "%"));
        row.appendChild(val);
        percentages.push(parseFloat(proportion.value) / 100);

        let close = document.createElement("td");
        close.appendChild(document.createTextNode("\u00D7"));
        close.className = "close";
        row.appendChild(close);
        

        tableBody.appendChild(row);


        close.addEventListener("click", (event) => {
            let index = row.rowIndex;
            table.deleteRow(index);

            categories.splice(index - 1, 1);
            percentages.splice(index - 1, 1);
        })

        category.value = "";
        proportion.value = "";

        category.focus();
    }
});

// Add when enter is clicked
for (let i = 0; i < categoryFields.length; i++) {
    categoryFields[i].addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            event.preventDefault();
            add.click();
        }
    })
}


// Form Submission
form.addEventListener("submit", (event) => {
    let incomeValue = income.value;

    setEmpty("incomeError");
    setEmpty("categoryError");

    setEmpty("expenseError");
    setEmpty("percentError");

    event.preventDefault();
    let valid = true;

    if (income.value == "") {
        valid = false;
        errorMessage("incomeError", "Please enter your income.");
    }
    
    if (categories.length == 0 || percentages.length ==0) {
        valid = false;
        errorMessage("categoryError", "Please add expense categories.")
    }

    if (valid) {
        
        for (let i = 0; i < categoryFields.length; i++) {
            categoryFields[i].classList.add("hidden");
        }

        incomeLabel.innerText = "Income: $" + incomeValue;

        let headerRow = table.rows[0];
        let amount = document.createElement("th");
        amount.appendChild(document.createTextNode("Amount Contriubted ($)"));
        headerRow.appendChild(amount);

        for (let i = 1; i < table.rows.length; i++) {
            let proportion = percentages[i - 1];
            let amountContributed = proportion * incomeValue;
            let amountColumn = document.createElement("td");
            amountColumn.appendChild(document.createTextNode("$" + round(amountContributed)));
            moneyAllocated.push(amountContributed);


            table.rows[i].insertBefore(amountColumn, table.rows[i].childNodes[2]);
        }

        let totalRow = document.createElement("tr");
        let totalText = document.createElement("th");
        totalText.appendChild(document.createTextNode("Total"));

        let totalPercent = document.createElement("td");
        totalPercent.appendChild(document.createTextNode((round(sumPercentages() * 100)) + "%"));

        let totalIncomeUsed = document.createElement("td");
        totalIncomeUsed.appendChild(document.createTextNode("$" + round(sumArray(moneyAllocated))));

        totalRow.appendChild(totalText);
        totalRow.appendChild(totalPercent);
        totalRow.appendChild(totalIncomeUsed);

        tableBody.appendChild(totalRow);

        submitButton.classList.add("hidden");
        backButton.classList.remove("hidden");

    }

})

// Back button event handler
backButton.addEventListener("click", (event) => {
    incomeLabel.innerText = "";

    for (let i = 0; i < table.rows.length; i++) {
        table.rows[i].deleteCell(2);
    }
    table.deleteRow(table.rows.length - 1);

    moneyAllocated = [];

    backButton.classList.add("hidden");
    submitButton.classList.remove("hidden");

    for (let i = 0; i < categoryFields.length; i++) {
        categoryFields[i].classList.remove("hidden");
    }

})

// Error Message
function errorMessage(id, message) {
    let errorField = document.getElementById(id);
    errorField.innerText = message;
}

function setEmpty(id) {
    let field = document.getElementById(id);
    field.innerText = "";
}

function sumPercentages() {
    return sumArray(percentages);
}

function sumArray(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}

function round(num) {
    return Math.round(num * 100) / 100;
}




document.getElementById("categoriesButton").addEventListener("click", (event) => {
    console.log(tableBody);
    console.log(table.rows[1].childNodes)
})