/*document.getElementsById('text-pad')
.addEventListener("click", function() {
	if (this.classList.contains("active")) {
		this.classList.remove("active");
	} else this.classList.add("active")
})
*/

function setFormMessage(formElement, type, message) {
    const messageElement = formElement.querySelector(".form__message");

    messageElement.textContent = message;
    messageElement.classList.remove("form__message--success", "form__message--error");
    messageElement.classList.add(`form__message--${type}`);
}

function setInputError(inputElement, message) {
    inputElement.classList.add("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = message;
}

function clearInputError(inputElement) {
    inputElement.classList.remove("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = "";
}

loginForm.addEventListener("submit", e => {
    e.preventDefault();

    setFormMessage(loginForm, "error", "Invalid username/password combination");
});
	
document.querySelectorAll(".form__input").forEach(inputElement => {
    inputElement.addEventListener("blur", e => {
        if (e.target.id === "signupUsername" && e.target.value.length > 0 && e.target.value.length < 10) {
            setInputError(inputElement, "Username must be at least 10 characters in length");
        }
    });

inputElement.addEventListener("input", e => {
	clearInputError(inputElement);
});

