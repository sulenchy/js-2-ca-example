const ContactForm = () => {
    return (
  <form className="contactForm">
    <div>
        <label for="firstName">First Name</label>
	    <input type="text" id="firstName" name="firstName"/>
	    <small></small>
    </div>

    <div>
        <label for="lastName">Last Name</label>
	    <input type="text" id="lastName" name="Lastname"/>
	    <small></small>
    </div>

    <div>
        <label for="email">Email:</label>
	    <input type="email" id="email" name="email" required/>
	    <small></small>
    </div>

    <div>
        <button type="submit" className="formSend">Submit </button>
    </div>
  </form>
    );

  };

export default ContactForm;