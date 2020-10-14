import React from "react";
import { Timeline, Events, UrlButton, ImageEvent } from "@merc/react-timeline";

// projects
import L_GetGitHubInfo from "../../assets/img/projects/amazaon.png";
import L_SmartBrain from "../../assets/img/projects/cvd.png";
import L_RoboFriends from "../../assets/img/projects/news.png";
import L_ProductHuntClone from "../../assets/img/projects/product_hunt_clone.webp";
import L_PortfolioUsingDjango from "../../assets/img/projects/portfolioUsingDjango.webp";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";

// skills
import L_REACT from "../../assets/img/skills/react.svg";
import L_NODE_JS from "../../assets/img/skills/nodejs.svg";
import L_EXPRESS from "../../assets/img/skills/express.svg";
import L_POSTGRESQL from "../../assets/img/skills/postgresql.svg";
import Image from "react-bootstrap/Image";
import L_REDUX from "../../assets/img/skills/redux.svg";
import L_HTML5 from "../../assets/img/skills/html-5.svg";
import L_CSS3 from "../../assets/img/skills/css3.svg";
import L_BOOTSTRAP4 from "../../assets/img/skills/bootstrap-4.svg";
import L_DJANGO from "../../assets/img/skills/django.svg";
import L_DIGITAL_OCEAN from "../../assets/img/skills/digital-ocean.svg";
import L_GIT from "../../assets/img/skills/github-api.svg";
import L_JAVASCRIPT from "../../assets/img/skills/javascript.svg";
import L_FIREBASE from "../../assets/img/skills/icons8-firebase.svg";

import "./projects-timeline.styles.css";

const TimeLine = () => {
  return (
    <div id="projects">
      <h1 className="pt-3 text-center font-details-b pb-3">PROJECTS</h1>
      <Timeline>
        <Events>
          {/* Project: Get GitHub Info */}
          <ImageEvent date="19/07/2020" className="text-center" text="Amazon clone App" src={L_GetGitHubInfo} alt="Get GitHub Info">
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="0" className="p-2 text-center accordian-main">
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> An app that helps ser to shop online 
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                        <li>Register new user</li>
                          <li>Add to Cart</li>
                          <li>Payment with Paypal</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image src={L_HTML5} alt="HTML 5" rounded className="image-style m-1"></Image> HTML5
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image src={L_CSS3} alt="CSS 3" rounded className="image-style m-1"></Image> CSS3
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image src={L_REACT} alt="React" rounded className="image-style1 m-1"></Image> React
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image src={L_FIREBASE} alt="Firebase" rounded className="image-style1 m-1"></Image> Firebase
                            </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton href="https://clone-ce639.firebaseapp.com/?fbclid=IwAR22E2f6Ec58IdlLo4q-4Xsg5_5dVbw1JZjxagUr_X77oyKuF5cHWBIg514" target="_blank">
                  SEE LIVE
                </UrlButton>
                <UrlButton href="https://github.com/devuzair56/amazon" target="_blank">
                  SOURCE CODE
                </UrlButton>
                <UrlButton href="https://www.youtube.com/watch?v=MBTjYUDZk70" target="_blank">
                  WATCH VIDEO
                </UrlButton>
              </div>
            </div>
          </ImageEvent>

          {/* Project: Smart Brain */}
          <ImageEvent date="21/01/2020" className="text-center" text="Covid 19 tracker App" src={L_SmartBrain} alt="Smart Brain Face Detect">
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="0" className="p-2 text-center accordian-main">
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> An app Tells you brief discription of covid 19 current deaths and recovery cases cases around globe 
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Update automatically cases around globe</li>
                          <li>give precautions of covid 19</li>
                          <li>graph of global covid 19 status</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image src={L_REACT} alt="React" rounded className="image-style1 m-1"></Image> React
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image src={L_HTML5} alt="HTML5" rounded className="image-style1 m-1"></Image> HTML5
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image src={L_CSS3} alt="CSS" rounded className="image-style1 m-1"></Image> CSS
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image src={L_JAVASCRIPT} alt="Javascript" rounded className="image-style1 m-1"></Image> JAVASCRIPT
                            </span>
                          </li>
                        </ul>
                        <hr />
                    
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton href="https://1234react.000webhostapp.com/" target="_blank">
                  SEE LIVE
                </UrlButton>
                <UrlButton href="https://github.com/devuzair56/covid-19" target="_blank">
                  SOURCE CODE
                </UrlButton>
                <UrlButton href="https://www.youtube.com/watch?v=NOn8fR65mv4" target="_blank">
                  WATCH VIDEO
                </UrlButton>
              </div>
            </div>
          </ImageEvent>

          {/* Project: RoboFriends */}

          <ImageEvent date="14/01/2020" className="text-center" text="React news App" src={L_RoboFriends} alt="Robo Friends">
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="0" className="p-2 text-center accordian-main">
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> An app that will show the latest news from differnt news channel sources aound globe
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Search through differnt sources</li>
                          <li>Latest or Top category</li>
                          <li>Tech information</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image src={L_REACT} alt="React" rounded className="image-style1 m-1"></Image> React
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image src={L_REDUX} alt="Redux" rounded className="image-style m-1"></Image> Redux
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image src={L_HTML5} alt="Node.js" rounded className="image-style1 m-1"></Image> HTML 5
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image src={L_CSS3} alt="Express" rounded className="image-style1 m-1"></Image> css
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image src={L_JAVASCRIPT} alt="PostgreSQL" rounded className="image-style1 m-1"></Image> javascript
                            </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton href="https://www.youtube.com/watch?v=c9CSRwGNoOI" target="_blank">
                  SEE VIDEO
                </UrlButton>
                <UrlButton href="https://github.com/devuzair56/React-news" target="_blank">
                  SOURCE CODE
                </UrlButton>
              </div>
            </div>
          </ImageEvent>

          {/* Project: Product_Hunt_Clone */}

        

          {/* Project: Portfolio using Django */}
          
        </Events>
      </Timeline>
    </div>
  );
};

export default TimeLine;
