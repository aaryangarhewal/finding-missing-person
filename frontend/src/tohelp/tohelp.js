import React from 'react';
import HeaderComponent from '../MyComponents/Header';
import {Footer} from '../MyComponents/Footer';
import { withStyles } from "@material-ui/core";
import styles from "./styles";
import '../App.css';



class Tohelp extends React.Component {

  render() {
    return(
      
        <div className="app-container">
          <HeaderComponent>
          </HeaderComponent>
          <section id='feature2'>
          <center><h3>Upload Found Person Details</h3></center> <div class="col-sm-4">
	<form/><br/><br/><br/>
		<label for="name">Name of Found Person: </label><br/>
		<input type="text" name="name"></input><br/><br/>

		<label for="phone">Phone no. of volunteer</label><br/>
		<input type="text" name="phone" required></input><br/><br/>

		<label for="location">Location of Found person</label><br/>
		<input type="text" name="location" required></input><br/><br/>
    </div><div class="col-sm-5"><br/><br/><br/>
		<label for="landmark">Landmark</label><br/>
		<input type="text" name="landmark" required></input><br/><br/>

		<label for="photo">Clear Photo of Found Person</label><br/>
		<input type="file" name="photo"></input><br/><br/>

		<input type="submit" name="submit"></input> </div>
	<form/></section>
            <Footer/>
            </div>
    );
  }

  
 
}

export default withStyles(styles)(Tohelp);