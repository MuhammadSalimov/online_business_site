import React from "react";
import { FaLayerGroup } from "react-icons/fa";
import {GiBarbedStar}  from 'react-icons/gi'
import {FaAccusoft } from 'react-icons/fa'
import {BsFacebook} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {BsTwitter}  from 'react-icons/bs'
import "./Hero.css";
const Hero = () => {
  return (
    <>
      <div className="hero">
        <div className="container">
          <div className="content">
            <div className="col-1">
              <h1>Data to enrich your</h1>
              <h1>
                <span className="primary-color">online business</span>
              </h1>
              <p>
                Lorem ipsum dolor sit amet, consec tetur adipisicing elit.
                Architecto iure fuga deleniti sit! Cum doloribus, nesciunt
                laboriosam eos praesentium veritatis!
              </p>
              <div className="used-by">
                <p>USED BY</p>
                <div className="icons">
                 <i> <FaLayerGroup  /> Staxx</i>
                <i><GiBarbedStar /> Star All</i>
                 <i><FaAccusoft /> Accusoft</i>
                </div>
              </div>
            </div>
            <div className="col-2">
              <div className="form-layout">
                <div className="form-container">
                  <p className="sign-in-txt">Sign in with</p>
                  <div className="social-login">
                 <i> <BsFacebook  /></i>
            <i><BsInstagram  /></i>
            <i><BsTwitter  /></i>
                  </div>
                  <div className="divider">
                    <p>
                      <span>Or</span>
                    </p>
                  </div>
                  <form>
                    <input placeholder="Name" type={"text"}></input>
                    <input placeholder="Email" type={"email"}></input>
                    <input placeholder="Password" type={"password"}></input>
                    <button>Create your account</button>
                  </form>
                </div>
                <div className="form-footer">
                  <p>
                    By signing up, you agree to our
                    <span className="primary-color"> Terms, Data Policy</span>
                    and
                    <span className="primary-color"> Cookies Policy</span>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
