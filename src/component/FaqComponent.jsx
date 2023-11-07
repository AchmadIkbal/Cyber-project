import React from 'react'
import {Container, Row, Col, Accordion} from "react-bootstrap";
import {faq} from "../data/index";
const FaqComponent = () => {
  return (
    <div className='faq'>
      <Container>
        <Row>
          <Col>
          <h2 className='fw-bold text-center' data-aos="fade-up" data-aos-duration="2000">Pertanyaan yang sering ditanyakan</h2>
          </Col>
        </Row>
        <Row className='row-cols-lg-2 row-cols-1 g-4 pt-5'>
          {faq.map((data) => {
            return (
              <Col key={data.id} data-aos="fade-up" data-aos-duration="2000">
          <Accordion className='shadow'>
      <Accordion.Item eventKey={data.eventKey}>
        <Accordion.Header>{data.title}1</Accordion.Header>
        <Accordion.Body>
          {data.desc}
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
          </Col>
            );
          })}
          
        </Row>
      </Container>
      
    </div>
  )
}

export default FaqComponent