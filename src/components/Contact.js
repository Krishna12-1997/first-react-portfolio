import React, {useState} from "react";
import Lottie from 'react-lottie';
import animationData from './lotties/contact-me.json';



export default function Contact() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [loader, setLoader] = useState(false)

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };
    
      const handleSubmit = (e) => {
          e.preventDefault();
          setLoader(true);
          setName('')
          setEmail('')
          setMessage('')
      }

    return (
        <div className='container'>
            <div className='wrapper'>
                <p>Feel free to reach me anytime.</p>
                      
                <div className="flex-container">
                    <form 
                        onSubmit={()=>handleSubmit}
                        className="contact-form" 
                        method="post" 
                        action="">

                        <input name="name" 
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            type="text" 
                            className="form-control" 
                            placeholder="Your Name" 
                            required />

                        <input name="email" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}   
                            type="email" 
                            className="form-control" 
                            placeholder="Your Email" 
                            required />

                        <textarea name="message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            className="form-control" 
                            placeholder="Your message goes here!" 
                            rows="4" 
                            required>
                        </textarea>

                        <input 
                            type="submit" 
                            className="form-control submit" 
                            value="SEND MESSAGE"
                            style={{backgroundColor: loader ? '#e20001' : '#191919'}} />
                    </form>

                    <Lottie 
                        options={defaultOptions}
                        height={400}
                        width={560}
                    />
                </div>
                <div className="social-media-icons">

                    <a href="https://github.com/Krishna12-1997" target="_blank" rel="noreferrer"><i class="fab fa-github"></i></a>
                    <a href="https://twitter.com/KrishnaNagpure2?s=09" target="_blank" rel="noreferrer"><i class="fab fa-twitter"></i></a>
                    <a href="https://api.whatsapp.com/send?phone=9588416680" target="_blank" rel="noreferrer"><i className="fab fa-whatsapp"></i></a>
                </div>

            </div>
        </div>
    )
    
    
  }