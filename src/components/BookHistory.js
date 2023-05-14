import React from 'react'
import ThemeProvider from 'react-bootstrap/ThemeProvider'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link, Route, Routes } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image'
import {useState, useEffect} from 'react'
import {fetchFlightBookingHistoryData} from  './../actions/flightBookAction';
import {useSelector, useDispatch} from 'react-redux'
import Spinner from 'react-bootstrap/Spinner';



const flightBookHistory = [{"bookingDate":"10/1/2023","amount":5000, "seats":5},{"bookingDate":"9/1/2023","amount":3000, "seats":2},{"bookingDate":"6/1/2023","amount":1000, "seats":6}]


function BookHistory() {

const dispatch = useDispatch()

const bookingHistoryData = useSelector((state) => state.flightBookingReducer.bookingHistoryData);
console.log("bookingHistoryData",bookingHistoryData);

useEffect(() => {
    dispatch(fetchFlightBookingHistoryData());
    }, []);

if(!bookingHistoryData){
  return (
    <div><Spinner animation="border" role="status">
    <span className="visually-hidden">Loading...</span>
  </Spinner></div>
  )
}else{
  return (
    <Container>
    <div style = {{fontSize:"2rem",fontWeight:"bold"}} >Ticket Booking History</div>
    <div>

    {
    flightBookHistory.map(function (subItem) {
    return <Card style = {{padding:"2rem"}}>
        <Row>
        <Col>{subItem.bookingDate}</Col>
        <Col><Image src thumbnail responsive/></Col>
        <Col>{subItem.amount}</Col>
        <Col><div>{subItem.seats} Seats</div><div><Link to="/viewDetails">View Details</Link></div></Col>
      </Row>
    </Card>
    
    })
    }
    </div>
 
    </Container>
  )
}
}

export default BookHistory