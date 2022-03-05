import React from 'react';
import HeaderComponent from '../MyComponents/Header';
import {Footer} from '../MyComponents/Footer';
import { withStyles } from "@material-ui/core";
import styles from "./styles";
import '../App.css';



class DashboardComponent extends React.Component {
 
  render() {
    let myst={
    width:"70%",fontweight: "600"}
    let myst2={
      padding:"20px 20px"}
    return(
      
        <div className="app-container">
          <HeaderComponent>
          </HeaderComponent><div className='container-new'>
          <section id="feature">
        <div class="container" >
            <div class="col-sm-6">
                <center>
			<a href="/MissingRegister">
				<h1 class="btn btn-primary btn-h1">I need help in <br/>finding someone</h1>
			</a>
            <p style={myst}>Fill in the information of the missing person and we will start the search process. </p>
            
            </center>
        </div>
         <div class="col-sm-6">
            <center>
            <a href="/WantToHelp">             
                <h1 class="btn btn-primary btn-h1" style={myst2}>I want to help</h1>   
            </a>
            <p style={myst}>Upload photo or tell us about the person you feel could be 'missing' person.</p>
            </center>
        </div>
		</div>
	</section></div>
            <Footer/>
            </div>
    );
  }

  

}

export default withStyles(styles)(DashboardComponent);