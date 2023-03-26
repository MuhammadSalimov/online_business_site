import React from 'react'
import './Contact.css'
const Contact = () => {
  return (
    <>
  
     <div className="contact">
                <div className="container">
                    <div className="col-1">
                        <div className="content">
                            <div>
                                <h2>Get in touch</h2>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam, iusto natus fugit
                                    saepe minima rem nemo laborum ea dolorum est.</p>
                            </div>
                            <div className="address">
                                <p>742 Evergreen Terrace</p>
                                <p>Springfield, OR 12345</p>
                            </div>
                            <div className="icons">
                            <i className="fa-solid fa-phone"></i>
                                <p>+1 (555) 123-4567</p>
                            </div>
                            <div className="icons">
                            <i className="fa-solid fa-envelope"></i>
                                <p>support@example.com</p>
                            </div>
                            <div className="careers">
                                <p>Looking for careers? <span>View all jop openings.</span></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-2">
                    <form >
                            <input placeholder="Full name" type={"text"} ></input>
                            <input placeholder="Email" type={"email"} ></input>
                            <input placeholder="Phone" type={"phone"} ></input>
                            <textarea placeholder="Message" name="Message" ></textarea>
                            <div className="checkbox">
                                <input type={"checkbox"}></input>
                                <p>By checking this box, you agree to the
                                    <span>Privacy Policy</span>
                                    and
                                    <span>
                                        Cookie
                                        Policy
                                    </span>.
                                </p>
                            </div>
                            <button>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
    </>
  )
}

export default Contact