import React from 'react'
import {BsFacebook} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {BsTwitter}  from 'react-icons/bs'
import {AiFillGoogleCircle} from 'react-icons/ai'
import './Footer.css'
const Footer = () => {
  return (
    <>
    <div className="footer">
        <div className="container">
          <div className="col solutions">
            <h6>Solutions</h6>
            <ul>
              <li>
                <a className="link" href="/">
                  Marketing
                </a>
              </li>
              <li>
                <a className="link" href="/">
                  Analytics
                </a>
              </li>
              <li>
                <a className="link" href="/">
                  Commerce
                </a>
              </li>
              <li>
                <a className="link" href="/">
                  Insights
                </a>
              </li>
            </ul>
          </div>
          <div className="col support">
            <h6>Support</h6>
            <ul>
              <li>
                <a className="link" href="/">
                  Pricing
                </a>
              </li>
              <li>
                <a className="link" href="/">
                  Documentation
                </a>
              </li>
              <li>
                <a className="link" href="/">
                  Guides
                </a>
              </li>
              <li>
                <a className="link" href="/">
                  API Status
                </a>
              </li>
            </ul>
          </div>
          <div className="col company">
            <h6>Company</h6>
            <ul>
              <li>
                <a className="link" href="/">
                  About
                </a>
              </li>
              <li>
                <a className="link" href="/">
                  Blog
                </a>
              </li>
              <li>
                <a className="link" href="/">
                  Jops
                </a>
              </li>
              <li>
                <a className="link" href="/">
                  Press
                </a>
              </li>
            </ul>
          </div>
          <div className="col legal">
            <h6>Legal</h6>
            <ul>
              <li>
                <a className="link" href="/">
                  Claim
                </a>
              </li>
              <li>
                <a className="link" href="/">
                  Privacy
                </a>
              </li>
              <li>
                <a className="link" href="/">
                  Cookies
                </a>
              </li>
              <li>
                <a className="link" href="/">
                  Terms
                </a>
              </li>
            </ul>
          </div>
          <div className="col-subscribe">
            <h6>Subscribe to our newsletter</h6>
            <p>
              The latest news, articles, and resources sent to your inbox
              weekly.
            </p>
            <div className="subscribe">
              <input type="email" placeholder="Enter your email" />
              <button>Subscribe</button>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="content">
            <div className="rights">
              <p>© Workflow, Inc. All rights reserved.</p>
            </div>
            <div >
            <BsFacebook className='icons' />
            <BsInstagram className='icons' />
            <BsTwitter className='icons' />
             <AiFillGoogleCircle className='icons' />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer