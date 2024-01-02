const eyeOpen = () => {
  document.getElementById("eye-open").classList.add("hidden");
  document.getElementById("eye-close").classList.remove("hidden");
  document.getElementById("password-input").type = "text";
};

const eyeClose = () => {
  document.getElementById("eye-open").classList.remove("hidden");
  document.getElementById("eye-close").classList.add("hidden");
  document.getElementById("password-input").type = "password";
};

document.getElementById("submit").addEventListener("click", (e) => {
  e.preventDefault;
  const inputedPassword = document.getElementById("password-input").value;
  alert(inputedPassword);
});
