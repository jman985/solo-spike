import React, { Component } from 'react';
import './App.css';
import { HashRouter as Router, Route, Link } from "react-router-dom";
import { connect } from 'react-redux';
import { MDBCard, MDBCardTitle, MDBBtn, MDBRow, MDBCol, MDBIcon, MDBCardBody, MDBCardImage, MDBCardText} from 'mdbreact';
import { borders } from '@material-ui/system';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import CardHeader from '@material-ui/core/CardHeader';
import Collapse from '@material-ui/core/Collapse';
import { Box, Grid, Slide, Paper, Typography} from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import ReactCardFlip from 'react-card-flip';


class App extends Component {


  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  constructor() {
    super();
      this.state = {
      isFlipped: false
    };
    this.handleClick = this.handleClick.bind(this);
  }
 
  handleClick(e) {
    e.preventDefault();
    this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
  }

  render(){
  return (
    <>
    <Router>
    <MDBRow container spacing = {50}>
      <MDBCol md='3'>
        
        <MDBCard testimonial
        className='card-image'

          style={{
            backgroundImage:
              "url('https://www.welovesolo.com/wp-content/uploads/vecteezy/50/hw5knhhmd0e.jpg')"
          }}
        >
          <div className='text-black text-center d-flex align-items-center rgba-grey-strong py-5 px-3'>
            <div>
              <MDBCardTitle tag='h3' className='pt-4'>
                <strong>macOS</strong>
              </MDBCardTitle>
              <p><strong>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Repellat fugiat, laboriosam, voluptatem, optio vero odio nam sit
                officia accusamus minus error nisi architecto nulla ipsum
                dignissimos. Odit sed qui, dolorum!</strong>
              </p>
              <MDBBtn color='pink'>
                <MDBIcon fab icon="apple" />    Add Software
              </MDBBtn>
            </div>
          </div>
        </MDBCard>
      </MDBCol>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

      <MDBCol md='3'>
      <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="horizontal">
      <MDBCard
          className='card-image'
          style={{
            backgroundImage:
              "url('https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Intel-logo.svg/515px-Intel-logo.svg.png')"
          }}
        >
          <div className='text-black text-center d-flex align-items-center py-3 px-2'>
            <div>
              <MDBCardTitle tag='h1' className='pt-4'>
              </MDBCardTitle>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;
              <MDBBtn className= 'text-center' color='grey' onClick= {this.handleClick} >
                Details
              </MDBBtn>
              <MDBBtn className= 'text-center' color='deep-orange'>
                <MDBIcon icon='plus' /> Add
              </MDBBtn>
            </div>
          </div>
        </MDBCard>

        <MDBCard
          className='card-image'
          style={{
            backgroundImage:
              "url('https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Intel-logo.svg/500px-Intel-logo.svg.png')"
          }}
        >
          <div className='text-white text-center d-flex align-items-center rgba-blue-strong py-4 px-2'>
            <div>
              <MDBCardTitle tag='h3' className='pt-4'>
                <strong>Intel</strong>
              </MDBCardTitle>
              <ul className='text-left'>
                <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
                <li>Repellat fugiat, laboriosam, voluptatem, optio vero odio nam sit</li>
                <li>officia accusamus minus error nisi architecto nulla ipsum</li>
                <li>dignissimos. Odit sed qui, dolorum!</li>
              </ul>
              <MDBBtn className= 'text-center' color='deep-orange'>
                <MDBIcon icon='plus' /> Add
              </MDBBtn>
              <MDBBtn className= 'text-center' color='grey' onClick= {this.handleClick}>
                Cancel
              </MDBBtn>
            </div>
          </div>
        </MDBCard>
        </ReactCardFlip>

      </MDBCol>
      <MDBCol md="3">

        <MDBCard >
          <MDBCardImage
            className='img-fluid'
            overlay="white-light"
            src='https://images.anandtech.com/doci/14735/AMD_Radeon_Car_678x452.png'
          />
          <MDBBtn
            className='ml-auto mr-4 lighten-3 mdb-coalor'         
          >Details&nbsp;&nbsp;
            <MDBIcon icon='plus'/>
          </MDBBtn>
          <MDBCardBody >
          
          </MDBCardBody>
        </MDBCard>
        
      </MDBCol>
    </MDBRow>
    </Router>
{/* <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical">
        <Card>
          This is the front of the card.
          <button onClick={this.handleClick}>Click to flip</button>
        </Card>
 
        <Button>
          This is the back of the card.
          <button onClick={this.handleClick}>Click to flip</button>
        </Button>
      </ReactCardFlip> */}
</>
  )
}
}

export default App;