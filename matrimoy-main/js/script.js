let age = document.querySelector("#age");
let job = document.querySelector("#job");
let salary = document.querySelector("#salary");
let ageResult = document.querySelector("#ageResult");
let jobResult = document.querySelector("#jobResult");
let salaryResult = document.querySelector("#salaryResult");
let btn = document.querySelector("#btn");

btn.addEventListener("click", () => {
  if (age.value >= 18) {
    ageResult.innerHTML = "Your are an adult";


 if (job.value == "true") {
    jobResult.innerHTML = "You are not unemployed"

    

   if (salary.value >= 5000) {
    salaryResult.innerHTML = "You have enough money"
  } else {
    salaryResult.innerHTML = "Your are poor"
  }

  } else {
    jobResult.innerHTML = "You are unemployed"
  }


 } else {
    ageResult.innerHTML = "Your are under age";
  }
  allow()

}
);

function allow (){




    
}



