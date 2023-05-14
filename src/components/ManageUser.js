import React from 'react'
import ThemeProvider from 'react-bootstrap/ThemeProvider'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link, Route, Routes } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import BookHistory from './BookHistory';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import BookFlight from './BookFlight';
import ManageBoking from './ManageBooking';

function ManageUser() {
  return (
    <Container>
    <div  style = {{fontSize:"2rem",fontWeight:"bold"}} >Manage User</div>

     <Tabs
      defaultActiveKey="bookingHistory"
      id="fill-tab-example"
      className="mb-3"
      fill
    >
      <Tab eventKey="bookFlight" title="Book Flight">
      <BookFlight /> 
      </Tab>
      <Tab eventKey="manageBooking" title="Manage Bookings">
      <ManageBoking /> 
      </Tab>
      <Tab eventKey="bookingHistory" title="Booking History">
        <BookHistory />
      </Tab>
    </Tabs>
    </Container>
  )
}

export default ManageUser;