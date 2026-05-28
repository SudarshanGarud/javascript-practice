let expenses = JSON.parse(localStorage.getItem("expenses")) || []

const expenseName = document.getElementById("expenseName")

const expenseAmount = document.getElementById("expenseAmount")

const addBtn = document.getElementById("addBtn")
addBtn.addEventListener("click", function () {
    const name = expenseName.value
    const amount = Number(expenseAmount.value)

    const expense = {
        name,
        amount
    }

    if (name === "" || amount === 0) {
        return
    }

    expenses.push(expense)
    renderExpenses()

    expenseName.value = ""
    expenseAmount.value = ""
})

const expenseList = document.getElementById("expenseList")

const totalAmount = document.getElementById("totalAmount")

function renderExpenses() {
    expenseList.innerHTML = ""

    expenses.forEach(function (expense, index) {
        const li = document.createElement("li")
        li.textContent = `${expense.name} - ₹${expense.amount}`

        const deleteBtn = document.createElement("button")
        deleteBtn.textContent = "Delete"
        deleteBtn.addEventListener("click", function () {
            expenses.splice(index, 1)
            renderExpenses()
        })
        
        li.appendChild(deleteBtn)
        expenseList.appendChild(li)
    })

    let total = 0
    expenses.forEach(function(expense) {
    total += expense.amount
    })
    totalAmount.textContent = total

    localStorage.setItem("expenses", JSON.stringify(expenses))
}

renderExpenses()