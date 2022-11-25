const LoginForm = () => {
    return (
        <form className="loginForm" action="#">
            <label for="username">Username</label> 
            <br />
            <input type="username" name="username" id="username"/>
            < br/>
            <label for="password">Password</label> 
            <br />
            <input type="password" name="password" id="password"/> 
            <br />
            <input type="button" value="Login" />
        </form>
     
    )
  };
  
  export default LoginForm;