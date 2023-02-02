import '../Styles/contact.css';

function Contact() {
  return (
    <div className="form-container">
      <form className='contact-form' action="contactpage">
        <label for="fname">First Name</label>
        <input type="text" id="fname" name="firstname" placeholder="Your name.." />

        <label for="lname">Last Name</label>
        <input type="text" id="lname" name="lastname" placeholder="Your last name.." />

        <label for="subject">Subject</label>
        <textarea id="subject" name="subject" placeholder="Write something.."></textarea>

        <button type="submit" value="Submit">Submit</button>
      </form>
    </div>
  );
};

export default Contact;