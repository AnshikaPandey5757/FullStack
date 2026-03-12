let nameInput = document.querySelector("#expenseName")
let amountInput = document.querySelector("#amount")
let categoryInput = document.querySelector("#category")

let addBtn = document.querySelector("#addBtn")
let container = document.querySelector("#cardsContainer")
let totalDisplay = document.querySelector("#total")

let expenses = []

addBtn.addEventListener("click", addExpense)

function addExpense(){

let name = nameInput.value
let amount = amountInput.value
let category = categoryInput.value

if(name === "" || amount === "" || category === ""){
alert("Please fill all fields")
return
}

expenses.push({
id: Date.now(),
name: name,
amount: Number(amount),
category: category
})

showExpenses()

nameInput.value = ""
amountInput.value = ""
categoryInput.value = ""
}

function showExpenses(){

container.innerHTML = ""

let total = 0

for(let i = 0; i < expenses.length; i++){

let card = document.createElement("div")

card.innerHTML = `
<h3>${expenses[i].name}</h3>
<p>Amount: ₹${expenses[i].amount}</p>
<p>Category: ${expenses[i].category}</p>

<button onclick="updateExpense(${expenses[i].id})">Update</button>
<button onclick="deleteExpense(${expenses[i].id})">Delete</button>
`

container.appendChild(card)

total += expenses[i].amount
}

totalDisplay.textContent = total
}

function updateExpense(id){

for(let i = 0; i < expenses.length; i++){

if(expenses[i].id == id){

let newName = prompt("Enter new expense name", expenses[i].name)
let newAmount = prompt("Enter new amount", expenses[i].amount)
let newCategory = prompt("Enter category (Food/Travel/Shopping)", expenses[i].category)

if(newName){
expenses[i].name = newName
}

if(newAmount){

newAmount = Number(newAmount)

if(isNaN(newAmount)){
alert("Amount must be a number")
return
}

expenses[i].amount = newAmount
}

if(newCategory){

let allowed = ["Food","Travel","Shopping"]

if(!allowed.includes(newCategory)){
alert("Invalid category")
return
}

expenses[i].category = newCategory
}

break
}
}

showExpenses()
}

function deleteExpense(id){

for(let i = 0; i < expenses.length; i++){

if(expenses[i].id == id){

expenses.splice(i,1)
break
}

}

showExpenses()
}