import React from 'react'
import {Container, Row, Col} from "react-bootstrap";
import {testimonial} from "../data/index";
import FaqComponent from "../component/FaqComponent";

const TestimonialPage = () => {
  return (
    <div className='testimonial-page'>
      <div className="testimonial">
        <Container>
        <Row>
          <Col>
          <h1 className='text-center fw-bold animate__animated animate__fadeInDown animate__delay-1s'>Semua Testimonial</h1>
          <p className='text-center animate__animated animate__fadeInDown animate__delay-1s'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium corporis voluptas id esse quae? Ex?</p>
          </Col>
        </Row>
        <Row className='row-cols-lg-3 row-cols-1'>
         {testimonial.map((data) =>{
          return <Col key={data.id}className="shadow-sm mb-5" data-aos="fade-up" data-aos-duration="2000">
            <p className="desc">{data.desc}</p>
            <div className="people">
              <img src={data.image} alt="" />
              <div >
                <h5 className="mb-1">{data.name}</h5>
                <p className="m-0 fw-bold">{data.skill}</p>
              </div>
            </div>
          </Col>
        })}
        </Row>
      </Container>
      </div>
      <FaqComponent/>
    </div>
  )
}

export default TestimonialPage