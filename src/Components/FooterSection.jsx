import React from 'react'
import { Container, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './footer.css'

export default function FooterSection() {
    return (
        <>
           <footer className="site-footer">
  <div className="container">
    <div className="row">
      <div className="col-sm-12 col-md-6">
        <h6>Modest Store</h6>
        <p className="text-justify">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet, alias inventore accusamus qui rem eligendi ea, debitis, velit exercitationem ipsam enim magni. Provident tempora, natus cumque veritatis sit obcaecati unde?
          Obcaecati at nulla sequi nobis consequatur quae recusandae dicta assumenda, ipsam quibu
        </p>
      </div>
      <div className="col-xs-6 col-md-3">
        <h6>Quick Links</h6>
        <ul className="footer-links">
            <li>
          <a href="/">
              Home
            </a>
          </li>
          <li>
            <a href="/Products">Products</a>
          </li>
          <li>
            <a href="/Contact">
              Contact
            </a>
          </li>
          <li>
            <a href="/about">
              About
            </a>
          </li>
          
        </ul>
      </div>
      <div className="col-xs-6 col-md-3">
        <h6>Contact Us</h6>
        <ul className="footer-links">
          <li>
       Email: info@modeststore.com
          </li>
          <li>
          Phone: 03230000000 (11am to 9pm)
          </li>
          <li>
          Shop: Building 1D, Commercial Street, DHA Karachi
          </li>
        </ul>
      </div>
    </div>
    <hr />
  </div>
  <div className="container">
    <div className="row">
      <div className="col-md-8 col-sm-6 col-xs-12">
        <p className="copyright-text">
          Copyright © 2023 All Rights Reserved 
        </p>
      </div>
    </div>
  </div>
</footer>


        </>
    )

}
