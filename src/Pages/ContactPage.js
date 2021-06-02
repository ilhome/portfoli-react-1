import React from "react";
import ContactItem from "../Components/ContactItem";
import phone from "../img/phone.svg";
import email from "../img/emailme.svg";
import location from "../img/location.svg";
import Tittle from "../Components/Tittle";

function ContactPage() {
  return (
    <div>
      <div className="title">
        <Tittle title={"About Me"} span={"About Me"} />
      </div>
      <div className="ContactPage">
        <div className="map-sect">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d790.7923426604222!2d127.06917692920254!3d37.55107319873757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca4c5791d1973%3A0x8e86334092ea85a2!2s349-16%20Gunja-dong%2C%20Gwangjin-gu%2C%20Seoul!5e0!3m2!1sen!2skr!4v1622580069149!5m2!1sen!2skr"
            width="600"
            height="450"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
          ></iframe>
        </div>
        <div className="contact-sect">
          <ContactItem
            icon={phone}
            text1={"+821040415515"}
            text2={"+821082609709"}
            title={"Phone"}
          />
          <ContactItem
            icon={email}
            text1={"ilkhom9799@gmail.com"}
            text2={"ilhom97@uber.com"}
            title={"Email"}
          />
          <ContactItem
            icon={location}
            text1={"7-4 Dongil-ro 36-gil, Gunja-dong, Seoul"}
            text2={"South Korea"}
            title={"Address"}
          />
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
