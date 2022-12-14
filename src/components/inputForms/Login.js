import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { authApi } from "../constants/api";
import { NavLink } from "react-router-dom";

const LoginForm = () => {
    const schema  = yup.object().shape({
        username: yup.string().required("You have to fill in your username"),
        password: yup.string().required("Wrong password")
    })

    const { register, handleSubmit, formState: {errors} } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = (data) => {
        // what's being passed in login form
        const username = data.username;
        const pwd = data.password;
    
        // api request 
        const userAuth = async () => {
            const settings = {
                method: 'POST',
                body: JSON.stringify({username: username, password: pwd}),
                headers: {
                    'Authorization': 'Basic', 
                    'Content-Type': 'application/json', 
            }};
            try {
              const response = await fetch(authApi, settings);
              const data = await response.json();
        
              if(response) {
                //redirect to admin page.
                <NavLink to={"admin"} />
              } 
            } 
            catch (error) {
              console.log(error, 'error');
            }
        };
        userAuth();
       
    };
    
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder="username..." {...register("username")} />
            <small className="error">{errors.username?.message}</small>
            <input type="password" placeholder="password..." {...register("password")} />
            <small className="error">{errors.password?.message}</small>
            <input type="submit" />
        </form>
    );
};

export default LoginForm;
