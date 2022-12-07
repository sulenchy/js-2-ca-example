import {checkLength, validatePassword} from "../validation/CheckInput";

// what about using react hooks for validating the form instead?
const LoginForm = () => {
    return (
        <form className="loginForm" id="loginF" action="#">
            <div className="formInput">
                <label for="username">Username</label> 
                <input type="username" name="username" id="username"/>
                <div className="form-error" id="usernameError">Please enter your username</div>
            </div>
            <div className="formInput">
                <label for="password">Password</label> 
                <input type="password" name="password" id="password"/> 
                <div className="form-error" id="passwordError">Incorrect password.</div>
            </div>
            <div className="formInput">
                <button type="submit">Log In</button>
            </div>
        </form> 
    )     
};
LoginForm();

const loginForm = document.querySelector("#loginF");
const username = document.querySelector("#username");
const usernameError = document.querySelector("#usernameError");
const password = document.querySelector("#password");
const passwordError = document.querySelector("#passwordError");

function validateUser(e){
    e.preventDefault()
    
    if(checkLength(username.value, 3)) {
        usernameError.getElementsByClassName.display = "none";
    } else {
        usernameError.style.display = "block";
        }
    if(validatePassword(password.value)) {
        passwordError.style.display = 'none';
    } else {
        passwordError.style.display = 'block';
    }
}

loginForm.addEventListener("submit", validateUser)

export default LoginForm;