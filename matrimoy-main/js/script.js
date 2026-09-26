let age = document.querySelector("#age");
let job = document.querySelector("#job");
let salary = document.querySelector("#salary");
let ageResult = document.querySelector("#ageResult");
let jobResult = document.querySelector("#jobResult");
let salaryResult = document.querySelector("#salaryResult");
let total = document.querySelector("#total");
let btn = document.querySelector("#btn");

btn.addEventListener("click", () => {
  let ageCondition = age.value >= 18;
  let jobCondition = job.value == "true";
  let salaryCondition = salary.value >= 10000;

  if (ageCondition) {
    ageResult.innerHTML = "Your are an adult";

    if (jobCondition) {
      jobResult.innerHTML = "You are not unemployed";

      if (salaryCondition) {
        salaryResult.innerHTML = "You have enough money";
      } else {
        salaryResult.innerHTML = "Your are poor";
      }
    } else {
      jobResult.innerHTML = "You are unemployed";
    }
  } else {
    ageResult.innerHTML = "Your are under age";
  }
  allow(ageCondition, ageCondition, jobCondition);
});

function allow(ageCondition, salaryCondition, jobCondition) {
  if (ageCondition && salaryCondition && jobCondition) {
    total.innerHTML = "You are eligible";
  } else if (!ageCondition || !salaryCondition || !jobCondition) {
    total.innerHTML =
      "You are not allowed for being under age and less amount of salary";
  }
}
