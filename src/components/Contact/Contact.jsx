import React from 'react'
import "./Contact.css";
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'

const Contact = () => {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "d3c63ec9-8545-4e6b-a331-aa405fdd0c98");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };

  return (
    <div className='contact'>
        <div className="contact-col">
            <h3>Send Us a Message <img src={msg_icon} alt="" /></h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut maxime nihil ducimus impedit facilis quasi, perferendis rerum quis magni numquam excepturi magnam iure quisquam. Odit. </p>
            <ul>
                <li><img src={mail_icon} alt="" /> AmrrMersall@gamil.com</li>
                <li><img src={phone_icon} alt="" /> 01143114054</li>
                <li><img src={location_icon} alt="" /> Egypt,giza</li>
            </ul>

        </div>
        <div className="contact-col">
            <form onSubmit={onSubmit}>
                <label>Your name</label>
                <input type="text" name='name' placeholder='Enter Your name' required />
                <label>Phone Number</label>
                <input type="tel" name='phone' placeholder='Enter Your Number' required />
                <label>Write Your Message Here</label>
                <textarea name="message"  rows="6" placeholder='Enter Your Message' required></textarea>
                <button type='submit' className='btn dark-btn'>Submit Now <img src={white_arrow} alt="" /></button>

            </form>
            <span>{result}</span>

        </div>
      
    </div>
  )
}

export default Contact