const pass_field = document.querySelector(".pass-key");
const showBtn = document.querySelector(".show");

showBtn.addEventListener("click", function () {
    const type = pass_field.getAttribute('type') === 'password' ? 'text' : 'password';
    pass_field.setAttribute('type', type);
    this.classList.toggle('fa-eye-slash');
});