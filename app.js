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
    setEmpty("incomeError");
    setEmpty("categoryError");

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
        for (let i = 0; i < table.rows.length; i++) {
            table.rows[i].style.display = "none";
        }
        for (let i = 0; i < categoryFields.length; i++) {
            categoryFields[i].style.display = "none";
        }
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
    let sum = 0;
    for (let i = 0; i < percentages.length; i++) {
        sum += percentages[i];
    }
    return sum;
}




document.getElementById("categoriesButton").addEventListener("click", (event) => {
    console.log(categories);
    console.log(percentages);
    console.log(table.rows);
})