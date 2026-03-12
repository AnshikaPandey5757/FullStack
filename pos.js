// Select elements
let form = document.querySelector("#jobform");
let jobCardsContainer = document.querySelector("#jobCards");
let searchInput = document.querySelector("#searchInput");


// Submit Form
form.addEventListener("submit", function (e) {

    e.preventDefault();

    // Get form values
    let JobTitle = document.querySelector("[name='job_title']").value;
    let Companyname = document.querySelector("[name='company_name']").value;
    let JobLocation = document.querySelector("[name='job_location']").value;
    let JobType = document.querySelector("[name='job_type']").value;
    let Salary = document.querySelector("[name='salary']").value;
    let JobDescription = document.querySelector("[name='job_description']").value;
    let Skills = document.querySelector("[name='skills']").value;

    // Create job card
    let card = document.createElement("div");
    card.className = "job-card";

    card.innerHTML = `
        <h3>${JobTitle}</h3>
        <p><strong>${Companyname}</strong> | ${JobLocation}</p>
        <p>${JobType} | Salary: ${Salary}</p>
        <p>${JobDescription}</p>
        <p><strong>Skills:</strong> ${Skills}</p>
        <button class="delete-btn">Delete</button>
    `;

    // Add card to page
    jobCardsContainer.appendChild(card);

    // Delete button
    card.querySelector(".delete-btn").addEventListener("click", function () {
        card.remove();
    });

    // Reset form
    form.reset();
});


// Search Jobs (Live Search)
searchInput.addEventListener("keyup", function () {

    let searchText = searchInput.value.toLowerCase();

    let jobCards = document.querySelectorAll(".job-card");

    jobCards.forEach(function (card) {

        let cardText = card.innerText.toLowerCase();

        if (cardText.includes(searchText)) {
            card.style.display = "";
        } else {
            card.style.display = "none";
        }

    });

});