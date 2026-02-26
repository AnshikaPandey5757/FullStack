let form = document.querySelector("#jobform");
form.addEventListener("submit", function (e) {
    e.preventDefault();
    let JobTitle = document.querySelector("[name='job_title']").value;
    let Companyname = document.querySelector("[name='company_name']").value;
    let JobLocation = document.querySelector("[name='job_location']").value;
    let JobType = document.querySelector("[name='job_type']").value;
    let Salary = document.querySelector("[name='salary']").value;
    let JobDescription = document.querySelector("[name='job_description']").value;
    let Skills = document.querySelector("[name='skills']").value;
    let card = document.createElement("div");
    card.className = "job-card";
    card.innerHTML = `
        <h3>${JobTitle}</h3>
        <p><strong>${Companyname}</strong> | ${JobLocation}</p>
        <p>${JobType} | ${Salary}</p>
        <p>${JobDescription}</p>
        <p><strong>Skills:</strong> ${Skills}</p>
        <button class="delete-btn">Delete</button>
    `;
    document.querySelector("#jobCards").appendChild(card);
    card.querySelector(".delete-btn").addEventListener("click", function () {
        card.remove();
    });
    
    form.reset();
});