let icon = document.querySelector("#icon");
let pass = document.querySelector("#pass");
let pass1 = document.querySelector(".pass");
icon.addEventListener("click", () => {
  if (pass.type == "password") {
    pass.type = "text";
    pass1.type = "text";
    // icon.classList.remove("fa-solid fa-eye");
    icon.classList.replace("fa-solid fa-eye-slash");
  } else {
    pass.type = "password";
    pass1.type = "password";
  }
});
