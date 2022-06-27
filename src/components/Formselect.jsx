import React from 'react'
import {Dropdown, DropdownButton, Row, Col, Button} from 'react-bootstrap'

function formselect() {
  return (
    <div>
    <div className="container">
    <Row>
    <Col md={2} className='coloumstyle'>
    <DropdownButton id="dropdown-item-button" title="Dropdown button" variant='secondary'>
      <Dropdown.ItemText>Dropdown item text</Dropdown.ItemText>
      <Dropdown.Item as="button">Action</Dropdown.Item>
      <Dropdown.Item as="button">Another action</Dropdown.Item>
      <Dropdown.Item as="button">Something else</Dropdown.Item>
    </DropdownButton>
    <br/>
    <DropdownButton id="dropdown-item-button" title="Dropdown button" variant='secondary'>
      <Dropdown.ItemText>Dropdown item text</Dropdown.ItemText>
      <Dropdown.Item as="button">Action</Dropdown.Item>
      <Dropdown.Item as="button">Another action</Dropdown.Item>
      <Dropdown.Item as="button">Something else</Dropdown.Item>
    </DropdownButton>
    <div className='buttonstyle'>
    <Button variant="warning">Explore</Button>{' '}
    </div>
    </Col>
    <Col  md={2} >
    <DropdownButton id="dropdown-item-button" title="Dropdown button" variant='secondary'>
      <Dropdown.ItemText>Dropdown item text</Dropdown.ItemText>
      <Dropdown.Item as="button">Action</Dropdown.Item>
      <Dropdown.Item as="button">Another action</Dropdown.Item>
      <Dropdown.Item as="button">Something else</Dropdown.Item>
    </DropdownButton>
    <br/>
    <DropdownButton id="dropdown-item-button" title="Dropdown button" variant='secondary'>
      <Dropdown.ItemText>Dropdown item text</Dropdown.ItemText>
      <Dropdown.Item as="button">Action</Dropdown.Item>
      <Dropdown.Item as="button">Another action</Dropdown.Item>
      <Dropdown.Item as="button">Something else</Dropdown.Item>
    </DropdownButton>
    </Col>
    </Row>
      
      </div>
    </div>
  )
}

export default formselect