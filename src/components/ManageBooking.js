import React from 'react'
import ThemeProvider from 'react-bootstrap/ThemeProvider'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link, Route, Routes } from "react-router-dom";


function BookFlight() {
  return (
    <Container>
    <div style = {{fontSize:"2rem",fontWeight:"bold"}}>Manage Bookings</div>
    </Container>
  )
}

export default BookFlight