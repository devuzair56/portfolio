import React from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Card from "react-bootstrap/Card";
import L_ACCENTURE from "../../assets/img/experience/ml.png";
import Tilt from "react-tilt";
import "./experience.styles.css";

const Experience = () => {
  return (
    <div id="experience">
      <h1 className="pt-3 text-center font-details-b pb-3">FINAL YEAR PROJECT</h1>
      <Jumbotron className="jumbo-style">
        <Container>
          <Tilt options={{ max: 25 }}>
            <Card>
              <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
                <Card.Img variant="top" className="img-resize" src={L_ACCENTURE} alt="Accenture logo" />
              </Card.Header>
              <Card.Body className="d-flex justify-content-center flex-column">
                <div>
                  <Card.Title className="text-center">Livear disease prediction</Card.Title>
                </div>
                <div>
                  <Card.Text className="text-center style">
                    <strong className="body-title-style ">Using Machine Learning</strong>
                    <br />
                    <strong>Role:</strong> Creating Machine learning model an backend
                    <br />
                    <strong>Description:</strong> <strong>Developed for Users to predici</strong> wether they have liver disease or not by input of the symptoms in prediction form and then model will predict the result and accuracy rate <strong>Application Features</strong>Prediction system,User information Database,Book appointmnet to doctor,Complete information of livear diease,Cancelation of appointmnet through email
                    <br />
                    <strong>Technology:</strong> FLASK,PYTHON,SQLITE,JAVASCRIPT,
                    <br />
                    <strong>Duration:</strong> 6 Months
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Tilt>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Experience;
