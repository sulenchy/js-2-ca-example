import ContactForm from "../../components/inputForms/ContactForm";
import Introduction from "../../components/Introduction";

const Contact = () => {
    return (
      <div className="contactForm">
        <Introduction name="Fill in the form below and we will answer you within 4-6 business days." />
        <ContactForm />
      </div>
    );
  };
  
  export default Contact;
