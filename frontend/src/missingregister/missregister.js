import React from 'react';
import HeaderComponent from '../MyComponents/Header';
import {Footer} from '../MyComponents/Footer';
import { withStyles } from "@material-ui/core";
import styles from "./styles";
import '../App.css';



class Missregister extends React.Component {

  render() {
    return(
      
        <div className="app-container">
          <HeaderComponent>
          </HeaderComponent><div className='container-new'>
          <section id='feature1'>
          <center>   <h4>Missing Person Registration</h4></center>
          <div class="col-sm-4">
                
	<form/><br/><br/>
		<label for="name">Name of Missing Person</label><br/>
	
		<input type="text" name="Enter here" required></input><br/><br/>

		<label for="gender">Gender of Missing Person</label><br/>
		
		<input type="radio" value="Male" id="male" name="gender" required></input>
		<label for="male">Male</label><br/>
		<input type="radio" value="Female" id="female" name="gender"></input>
		<label for="female">Female</label><br/><br/>

		<label for="gname">Name of Guardian</label><br/>
		<input type="text" name="gname" required></input><br/><br/>

		<label for="gardian_no">Phone No. of Guardian</label><br/>
		<input type="text" name="gardian_no" required></input><br/><br/>
    <form/>
    
        </div><div class="col-sm-5">
                
	<form/><br/><br/>
		<label for="address">Address of Missing Person</label><br/>
		<input type="text" name="address" required></input><br/><br/>

		<label for="date_of_missing">Date of Missing</label><br/>
		<input type="date" name="date_of_missing"></input><br/><br/>

		<label for="photos">Upload 1st Photo of Missing Person</label><br/>
		<input type="file" name="photos" required></input><br/><br/>
		<label for="photos">Upload 2nd Photo of Missing Person</label><br/>
		<input type="file" name="photos" required></input><br/><br/>
    </div>
		 <input type="submit" name="Submit"></input>
    <form/>
    
        </section></div>
            <Footer/>
            </div>
    );
  }

  

}

export default withStyles(styles)(Missregister);