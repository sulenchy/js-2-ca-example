import { authApi } from "../constants/api";
import { NavLink } from "react-router-dom"; 
import { useFormik } from "formik";
import * as yup from "yup";

// ------ using formik and yup -------- //
const LoginForm = () => {
    const formik = useFormik({
        initialValues: {
            username: '',
            password: ''
        },
        validationSchema: yup.object({
            username: yup.string().required("You have to fill in your username."),
            password: yup.string().required("Wrong passwor. Please try again")
          }),
        onSubmit: values => {
            const userAuth = async () => {
              // how to write the token down so it is stored upon receiving it? 
              const token = data.accessToken;
                const settings = {
                    method: 'POST',
                    // getting values from the form input and storing them in body
                    body: JSON.stringify(values),
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json', 
                    }};
                try {
                    // api request
                  const response = await fetch(authApi, settings);
                  const data = await response.json();
                  console.log(data.accessToken)
                    if(response) {
                        //redirect to admin page.
                        <NavLink to={"admin"} />
                    } else {
                        //tell user what went wrong if not login succeeds.
                        document.body.innerHTML = "Oops. Incorrect password and or username."
                    }
                } catch (err) {
                  console.log('error', err);
                }
            }
            userAuth();
          },
    });
    return (
        <form onSubmit={formik.handleSubmit}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            name="username"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.username}
          />
          {formik.errors.username ? (
             <small className="error">{formik.errors.username}</small>
            ) : null}
 
          <label htmlFor="password">Password</label>
          <input 
            id="password"
            name="password"
            type="password"
            onChange={formik.handleChange}
            value={formik.values.password}
            />
            {formik.errors.password ? (
              <small className="error">{formik.errors.password}</small>
            ) : null}

          <button type="submit" className="login">Log in</button>
        </form>
      );

}
export default LoginForm;


// is both way of making forms good? Referring to the code above, and the code below this text. 


/*  ------- using yup and useState ----------
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
                    'Authorization': 'Basic', // maybe using bearer $token instead? 
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
 */