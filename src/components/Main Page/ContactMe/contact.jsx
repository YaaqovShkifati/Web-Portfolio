import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Button, makeStyles, Radio, RadioGroup, FormControlLabel, FormLabel, Grid, TextField, Typography } from "@material-ui/core";
import { Send } from "@material-ui/icons";
import axios from "axios";
import Configs from "../../../editable-stuff/configurations.json";
//import Background from "../../../contact.jpg";
import "./Contact.css";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

export default function ContactForm() {
  const icons = Configs.icons;
  const classes = useStyles();
  const history = useHistory();

  const [value, setValue] = React.useState('emailme');

  const initializeForm = () =>{
    document.getElementById("email").setAttribute("required", "");
    document.getElementById("number").removeAttribute("required");
  }

  window.onload = initializeForm; 

  const handleChange = (event) => {
    setValue(event.target.value);
    if (event.target.value === "emailme"){
      document.getElementById("email").setAttribute("required", "");
      document.getElementById("number").removeAttribute("required");
    }
    else {
      document.getElementById("email").removeAttribute("required");
      document.getElementById("number").setAttribute("required", "");
    }
  };

  const [hoverstatus, setHoverstatus] = useState([
    "socialicon",
    "socialicon",
    "socialicon",
    "socialicon",
    "socialicon" 
  ]);

  const toggleHover = data => {
    const newhoverStatus = [...hoverstatus];
    if (data.event === "enter") {
      newhoverStatus[data.icon.id] = "socialiconhover";
      return setHoverstatus(newhoverStatus);
    } else if (data.event === "leave") {
      newhoverStatus[data.icon.id] = "socialicon";
      return setHoverstatus(newhoverStatus);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const firstName = document.getElementById("firstname").value;
    const lastName = document.getElementById("lastname").value;
    const email = document.getElementById("email").value;
    const number = document.getElementById("number").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;
    const method = document.querySelector('input[name="method"]:checked').value;

    axios({
      method: "POST",
      url: "https://formspree.io/f/xnqobyon",
      data: {
        firstName: firstName,
        lastName: lastName,
        number: number,
        email: email,
        subject: subject,
        message: message,
        method: method
      }
    });
    document.getElementById("contact-form").reset();
    history.replace('/submit');
  };

  return (
    <div
      id="contact"
      className="jumbotron jumbotron-fluid min-vh-100 m-0" data-spy="scroll" data-target="#mainNavbar" data-offset="0"
      width="100%"
      // style={{backgroundImage: `url(${Background})`}}
    >
      <div className="container container-fluid text-center">
        <Typography variant="h2" display="block" align="center" id="contact-us"
          style={{
            paddingTop: "4rem",
            margin: "0rem",
            fontSize: "2.5rem",
          }}
        >
        Contact Me
        </Typography>
        <form
          autoCorrect="off"
          onSubmit={e => handleSubmit(e)}
          id="contact-form"
          style={{
            backgroundColor: "transparent",
            flexDirection: "column",
            padding: "15px",
            borderRadius: "10px",
            maxWidth:"650px",
            display:"inline-block",
            width:"100%",
          }}
        >
          <div className="form-row">
            <div className="col">
              <TextField required label="First Name" type="text" margin="normal" variant="outlined" id="firstname" placeholder="First Name" style={{width:"100%"}}/>
            </div>
            <div className="col">
              <TextField required label="Last Name" type="text" id="lastname" margin="normal" variant="outlined" placeholder="Last Name" style={{width:"100%"}}/>
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection:"row", flexWrap: "wrap", paddingTop: "5px"}}>
            <FormLabel component="legend">How should I reach out?</FormLabel>
            <RadioGroup name="method" value={value} >
              <Grid container>
                <Grid item>
                  <FormControlLabel value="emailme" control={<Radio />} label="Email Me!" onClick={handleChange}/>
                </Grid>
                <Grid item>
                  <FormControlLabel value="callme" control={<Radio />} label="Call Me!" onClick={handleChange}/>
                </Grid>
                <Grid item>
                  <FormControlLabel value="textme" control={<Radio />} label="Text Me!" onClick={handleChange}/>
                </Grid>
              </Grid>
            </RadioGroup>
          </div>
          <div className="form-row" style={{textAlign: "center"}}>
            <div className="form-group col-md">
              <TextField label="Email Address" type="email" id="email" variant="outlined" placeholder="Email Address" style={{width:"100%"}}/>
            </div>
            <div className="form-group col-md">
              <TextField label="Phone Number" type="tel" id="number" variant="outlined" placeholder="Phone Number" style={{width:"100%"}}/>
            </div>
          </div>
          <div className="form-row" style={{textAlign: "center"}}>
            <div className="form-group col-md">
              <TextField label="Subject" type="text" id="subject" variant="outlined" placeholder="Subject" style={{width:"100%"}}/>
            </div>
          </div>
          <div className="form-group">
            <TextField required label="Message" type="text-area" id="message" multiline rows={4} variant="outlined" placeholder="Message" style={{width:"100%"}}/>
          </div>
          <div className="form-group">
            <Button variant="outlined" color="primary" size="large" type="submit" className={classes.button} endIcon={<Send />}>Send Message</Button>                        
          </div>
        </form>
        <div className="p-6" style={{paddingTop:"40px", paddingBottom:"40px"}}>
          {icons.map(icon => (
            <a
              key={icon.id}
              target="_blank"
              rel="noopener noreferrer"
              href={icon.url}
              aria-label={`My ${icon.image.split("-")[1]}`}
            >
              <i
                className={`fab ${icon.image}  fa-3x ${hoverstatus[icon.id]}`}
                onMouseOver={() => toggleHover({ icon, event: "enter" })}
                onMouseOut={() => toggleHover({ icon, event: "leave" })}
              />
            </a>
          ))}
        </div>            
      </div>
    </div>
  );
}