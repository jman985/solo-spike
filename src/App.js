import React, { Component } from 'react';
import './App.css';

import { connect } from 'react-redux';
import { MDBCard, MDBCardTitle, MDBBtn, MDBRow, MDBCol, MDBIcon } from 'mdbreact';
import Box from '@material-ui/core/Box';
import { borders } from '@material-ui/system';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

const defaultProps = {
  bgcolor: 'background.paper',
  borderColor: 'text.primary',
  m: 1,
  border: 1,
  style: { width: '5rem', height: '5rem' },
};


const CardExample = () => {
  return (
    <MDBRow container spacing = {50}>
      <MDBCol md='3'>
        
        <MDBCard
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

      <MDBCol md='3'>
        <MDBCard
          className='card-image'
          style={{
            backgroundImage:
              "url('https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Intel-logo.svg/610px-Intel-logo.svg.png')"
          }}
        >
          <div className='text-white text-center d-flex align-items-center rgba-blue-strong py-3 px-2'>
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
              <MDBBtn className= 'text-center' color='grey'>
                <MDBIcon icon='minus' /> Remove
              </MDBBtn>
            </div>
          </div>
        </MDBCard>
      </MDBCol>
    </MDBRow>



  )
}

export default CardExample;