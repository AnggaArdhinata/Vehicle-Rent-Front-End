import React from 'react'
import {Container, Card, Row, Col, Image} from 'react-bootstrap'
import merapiimg from '../assets/popular/merapi.png'
import bromoimg from '../assets/popular/bromo.png'
import malioboro from '../assets/popular/malioboro.png'
import telukimg from '../assets/popular/teluk-bogam.png'

function Popular() {
  return (
    <div>
    <Container className='text-black d-flex justify-content-left'>
    <div className='populartxtstyle'>Popular in Town</div>
    </Container>
    <Container>
    <Row>
      <Col md={3} >
      <Card className="bg-white text-dark text-left popularimage">
      <Image 
      src={merapiimg} 
      alt="Merapi" />
        <Card.Title>Merapi</Card.Title>
        <Card.Text>
         Yogyakarta
        </Card.Text>
    </Card>
      </Col>
      <Col md={3} className='popularwrapper'>
      <Card className="bg-white text-dark text-left popularimage">
      <Image 
      src={telukimg} 
      alt="Teluk Bogam" />
        <Card.Title>Teluk Bogam</Card.Title>
        <Card.Text>
         Kalimantan
        </Card.Text>
    </Card>
      </Col>
      <Col md={3} className='popularwrapper'>
      <Card className="bg-white text-dark text-left popularimage">
      <Image 
      src={bromoimg} 
      alt="Bromo" />
        <Card.Title>Bromo</Card.Title>
        <Card.Text>
         Malang
        </Card.Text>
    </Card>
      </Col>
      <Col md={3} className='popularwrapper'>
      <Card className="bg-white text-dark text-left popularimage">
      <Image 
      src={malioboro} 
      alt="Malioboro" />
        <Card.Title>Malioboro</Card.Title>
        <Card.Text>
         Yogyakarta
        </Card.Text>
    </Card>
      </Col>
    </Row>
    </Container>
    </div>
  )
}

export default Popular