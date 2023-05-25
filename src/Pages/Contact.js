import React from "react";
// import React, { useState } from 'react';
import { contactDetails } from "../Details";

function Contact() {
  const { email, phone } = contactDetails;
  return (
    <main className="container mx-auto max-width section">
      <h1 className="text-center text-2xl md:text-3xl lg:text-6xl text-dark-heading dark:text-light-heading font-semibold md:font-bold">
        For any questions please drop a mail
      </h1>
      <h3 className="text-center text-3xl md:text-4xl lg:text-6xl text-gradient font-semibold md:font-bold pt-5 md:pt-10 md:pb-6">
        <a href={`mailto:${email}`}>{email}</a>
      </h3>
      <span className="text-center text-content text-xl font-light block"> </span>
      <h3 className="text-center text-3xl md:text-4xl lg:text-6xl text-gradient font-semibold md:font-bold pt-2 md:py-6">
        <a href={`tel:${phone}`}>{phone}</a>
      </h3>
    </main>
  );
}


// function Contact() {
//   const { email, phone } = contactDetails;

//   const generateCaptcha = () => {
//     const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//     let captcha = '';
//     const captchaLength = 6; // Set the desired length of the captcha string
  
//     for (let i = 0; i < captchaLength; i++) {
//       const randomIndex = Math.floor(Math.random() * characters.length);
//       captcha += characters[randomIndex];
//     }
  
//     return captcha;
//   };

//   const [captcha, setCaptcha] = useState(generateCaptcha());
//   const [userInput, setUserInput] = useState('');
//   const [showPhoneNumber, setShowPhoneNumber] = useState(false);

//   const refreshCaptcha = () => {
//     setCaptcha(generateCaptcha());
//     setUserInput('');
//   };

//   const validateCaptcha = () => {
//     if (userInput === captcha) {
//       setShowPhoneNumber(true);
//     } else {
//       alert('Incorrect captcha. Please try again.');
//       refreshCaptcha();
//     }
//   };

//   return (
//     <main className="container mx-auto max-width section">
//       <h1 className="text-center text-2xl md:text-3xl lg:text-6xl text-dark-heading dark:text-light-heading font-semibold md:font-bold">
//         For any questions, please drop a mail
//       </h1>
//       <h3 className="text-center text-3xl md:text-4xl lg:text-6xl text-gradient font-semibold md:font-bold pt-5 md:pt-10 md:pb-6">
//         <a href={`mailto:${email}`}>{email}</a>
//       </h3>
//       <span className="text-center text-content text-xl font-light block">or</span>

//       {showPhoneNumber ? (
//         <div className="text-center text-3xl md:text-4xl lg:text-6xl text-gradient font-semibold md:font-bold pt-2 md:py-6">
//           <a href={`tel:${phone}`}>{phone}</a>
//         </div>
//       ) : (
//         <div className="captcha-container">
//           <p className="captcha-text">To view the phone number, please solve the captcha:</p>
//           <input
//             type="text"
//             value={userInput}
//             onChange={(e) => setUserInput(e.target.value)}
//             placeholder="Enter the characters"
//           />
//           <img src="captcha_image.jpg" alt="Captcha Image" className="captcha-image" />
//           <button onClick={validateCaptcha}>Submit</button>
//         </div>
//       )}
//     </main>
//   );
// }

export default Contact;
