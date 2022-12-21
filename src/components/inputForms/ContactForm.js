import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const ContactForm = () => {
  const schema  = yup.object().shape({
      firstName: yup.string().min([3], "first name must be at least 3 characters."),
      lastName: yup.string().min([4], "last name must be at least 5 characters."),
      email: yup.string().email().required("Not a valid email. "),
      issue: yup.string().oneOf(["My order is late", "I want a refund"]),
      message: yup.string().min([10], "Please fill in your issue to us. Min 10 characters").required()
  })

  const { register, handleSubmit, formState: {errors} } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = (data) => {
      console.log(data)
  };

  return (
      <form onSubmit={handleSubmit(onSubmit)}>
          <input type="text" placeholder="First Name..." {...register("firstName")} />
          <small className="error">{errors.firstName?.message}</small>
          <input type="text" placeholder="Last Name..." {...register("lastName")} />
          <small className="error">{errors.lastName?.message}</small>
          <input type="email" placeholder="Your Email..." {...register("email")} />
          <small className="error">{errors.email?.message}</small>
          <div class="radio">
            <label>
              <input type="radio" value="My order is late" checked="true"{...register("issue")} />
              My order is late
            </label>
            <label>
              <input type="radio" value="I want a refund"{...register("issue")} />
              I want a refund
            </label> 
          <small className="error">{errors.radioGroup?.message}</small>
          </div>
          <input type="text" placeholder="Message..." {...register("message")} />
          <small className="error">{errors.message?.message}</small>
          <input type="submit" />
      </form>
  );
};


export default ContactForm;