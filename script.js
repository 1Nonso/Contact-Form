const emailInput = document.querySelector(".emailAddress");
const firstName = document.querySelector(".firstName");
const lastName = document.querySelector(".lastName");
const directive = document.querySelector(".fNameError");
const nameInput = document.querySelector("#fName");

console.log(nameInput.value);

firstName.addEventListener("click", () => {
  if (nameInput.value === "") {
    directive.classList.toggle("fNameError");
  }
  //   if (nameInput.value !== "") {
  //     directive.remove('fNameError')
  //   }
  //   setTimeout(() => {
  //     directive.remove('fNameError')
  //   }, 5000);
  console.log("hello world");
});

if (nameInput.value !== "") {
  directive.remove("fNameError");
}

// if (nameInput.value === '') {
//     console.log('input is empty')
//     directive.remove('fNameError')
// } else{
//     console.log('input is not empty')
// }

firstName.addEventListener("click", () => {
  // if (nameInput.value == '') {
  //     directive.classList.toggle('fNameError')
  // } else {
  //     directive.remove()
  // }
  // directive.classList.toggle('fNameError')
});
