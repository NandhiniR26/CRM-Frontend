// Dashboard.jsx
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CustomerList from './CustomerList';
import SalesChart from './SalesChart';
import CommunicationHistory from './CommunicationHistory';
import OffersAndCoupons from './OffersAndCoupons';

const Dashboard = () => {
  return (
    <Container fluid>
      <Row className="my-4">
        <Col>
          <h1>CRM Dashboard</h1>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <CustomerList />
        </Col>
        <Col md={6}>
          <SalesChart />
        </Col>
      </Row>
      <Row className="my-4">
        <Col md={6}>
          <CommunicationHistory />
        </Col>
        <Col md={6}>
          <OffersAndCoupons />
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
