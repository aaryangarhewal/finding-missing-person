import React from 'react';
//import Chip from "@material-ui/core/Chip";
//import FaceIcon from "@material-ui/icons/Face";
import { withStyles } from '@material-ui/core';
import styles from './styles';
import './styles.css';
//import {
  //  Link
  //} from "react-router-dom";

class HeaderComponent extends React.Component{
    render(){
        return (<>
            <header class="header">
    <nav class="navbar navbar-expand-lg fixed-top py-3">
        <div class="container"><a href="#" class="navbar-brand text-uppercase font-weight-bold">Finding Missing Person</a>
            <button type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" class="navbar-toggler navbar-toggler-right"><i class="fa fa-bars"></i></button>
            
            <div id="navbarSupportedContent" class="collapse navbar-collapse">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item active"><a href="http://localhost:3000/" class="nav-link text-uppercase font-weight-bold">Home <span class="sr-only">(current)</span></a></li>
                    <li class="nav-item"><a href="#" class="nav-link text-uppercase font-weight-bold">About Us</a></li>
                    <li class="nav-item"><a href="#" class="nav-link text-uppercase font-weight-bold">Gallery</a></li>
                    <li class="nav-item"><a href="#" class="nav-link text-uppercase font-weight-bold">Volunteer</a></li>
                    <li class="nav-item"><a href="#" class="nav-link text-uppercase font-weight-bold">Contact Us</a></li>
                </ul>
            </div>
        </div>
    </nav>
</header>
    
    
    </>
        )
}

}
export default withStyles(styles)(HeaderComponent);