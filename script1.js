let icon = document.querySelector("#icon");
let pass = document.getElementById("pass");
let pass1 = document.getElementById("pass");
let msg = document.querySelector(".msg");
icon.addEventListener("click", () => {
  if (pass.type == "password") {
    pass.type = "text";
    pass1.type = "text";
  } else {
    pass.type = "password";
    pass1.type = "password";
  }
});
