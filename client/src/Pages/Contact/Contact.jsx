/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
import axios from "axios";
import "./contact.css";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { toast } from 'react-toastify';

const Contact = ({color}) => {
  let textColor = color === "#212935" ? "#FFFFEC" : "#212935";
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [msg, setMsg] = useState('');

  // handle submit button
  const handleSubmit = async (e) =>{
    e.preventDefault();
    try {
      if (!name || !email || !msg) {
        toast.error("Please provide all the fields");
      }
      const res = await axios.post('http://localhost:8000/api/v1/portfolio/sendEmail', {name, email, msg})
      if(res.data.success){
        toast.success(res.data.message)
      }else{
        toast.error(res.data.message)
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <div style={{backgroundColor:color, width:"68%", textAlign:"center"}} className="container contact" id="contact">
        <div className="card card0 border-0">
          <div className="row">
            <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12">
              <div className="card1">
                <div className="row border-line">
                  <img
                    src="https://t4.ftcdn.net/jpg/00/84/36/57/360_F_84365785_HxkgzEJ3ArqlVF7kvgc5Zhg2FYrQgSan.jpg"
                    alt="contact"
                    className="image"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-xl-6 col-sm-12">
              <div className="card2 d-flex card border-0 px-4 py-3">
                <div className="row">
                  <div className="row">
                    <h6 style={{ fontSize: "20px", marginBottom: "30px" }}>
                      Contact With
                      <a
                        href="https://www.linkedin.com/in/shourav-rakshit-ivan-7308a6177/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        
                        <BsLinkedin
                          color="blue"
                          size={35}
                          className="ms-3 social"
                        />
                      </a>
                      <a
                        href="https://github.com/ShouravRakshit"
                        target="_blank"
                        rel="noreferrer"
                      >
                        
                        <BsGithub
                          color="black"
                          size={35}
                          className="ms-3 social"
                        />
                      </a>
                    </h6>
                  </div>

                  <div className="row px-3 mb-4">
                    <div className="line" />
                    <small className="or text-center">OR</small>
                    <div className="line" />
                  </div>
                  <div className="row px-3">
                    <input
                      type="text"
                      name="name"
                      id=""
                      placeholder="Enter your Name"
                      className="mb-3"
                      value={name}
                      onChange={(e) =>{
                        setName(e.target.value)
                      }}
                    />
                  </div>
                  <div className="row px-3">
                    <input
                      type="email"
                      name="email"
                      id=""
                      placeholder="Enter your Email"
                      className="mb-3"
                      value={email}
                      onChange={(e) =>{
                        setEmail(e.target.value)
                      }}
                    />
                  </div>
                  <div className="row px-3">
                    <textarea
                      type="text"
                      name="msg"
                      id=""
                      placeholder="Write your message"
                      className="mb-3"
                      value={msg}
                      onChange={(e) =>{
                        setMsg(e.target.value)
                      }}
                    />
                  </div>
                  <div className="row px-3">
                    <button className="contact-btn" onClick={handleSubmit}>
                      SEND MESSAGE
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
