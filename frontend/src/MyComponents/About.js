import React from 'react'
import { withStyles } from '@material-ui/core';
import styles from './styles';
import HeaderComponent from '../MyComponents/Header';
import {Footer} from '../MyComponents/Footer';

class AboutComponent extends React.Component{
  render(){
    return (
      <div class="app-container">
      <HeaderComponent/>
      <div class="container" >
        
          <div class="row featurette d-flex justify-content-center align-item-center">
              <div class="content">

                  <div class="super-heading">ABOUT fINDING MISSING PERSON</div>
                  <h1>An extension of your brain</h1>
                  <h4 class="description">Lorem ipsum dolor sit, Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod ipsa id esse magnam dicta reprehenderit inventore expedita in obcaecati nam, ex, aliquam veritatis modi iusto recusandae mollitia porro unde amet? amet consectetur adipisicing elit. Adipisci, mollitia in alias eum officiis laboriosam, fugiat, dolores quaerat consequuntur reiciendis at esse dolorem non nobis numquam enim earum eos neque?Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, aperiam accusamus assumenda, asperiores iure nobis alias blanditiis quas nisi ipsa delectus, non provident? Sint inventore, nulla suscipit sequi beatae at. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas voluptatum aliquid rerum consectetur, aperiam vitae neque commodi recusandae natus? Illum odio voluptate illo laudantium cupiditate quod dolores. Debitis, iste consequuntur.</h4>
              </div>
          </div>
          <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
<div class="carousel-inner">
<div class="carousel-item active">
<img src="https://source.unsplash.com/user/erondu/1500x400/?Book,Technology" class="d-block w-80" alt="..."/>
</div>
</div>
</div>
      </div><Footer/></div>
  
)
  }
}

export default withStyles(styles)(AboutComponent);