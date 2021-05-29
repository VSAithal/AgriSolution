import React from "react";
import { Accordion, Card, Row, Col, Carousel, Button } from "react-bootstrap";
import styles from "../../assets/styles/plant.module.scss";
import { PlantTagsList } from "./PlantTagsList.jsx";
export const PlantListItem = ({ plantItems, keyVal, onViewDetailsClick }) => {
  return (
    <>
      <Accordion key={keyVal} defaultActiveKey={keyVal}>
        <Card className={styles.cardContainer}>
          <Accordion.Toggle
            as={Card.Header}
            eventKey={keyVal}
            className={styles.accordionHeader}
          >
            {plantItems.title}
          </Accordion.Toggle>
          <Accordion.Collapse eventKey={keyVal}>
            <Card.Body>
              <Row>
                {/* Carousel to display multiple images*/}
                <Col md={4} xs={12} className={styles.carouselContainer}>
                  <Carousel>
                    {plantItems.images.map((item, i) => (
                      <Carousel.Item interval={10000} key={i}>
                        <img
                          className="d-block w-100"
                          src={item}
                          alt="No images"
                        />
                      </Carousel.Item>
                    ))}
                  </Carousel>
                </Col>
                {/* Description */}
                <Col md={8} xs={12}>
                  <Row>
                    <Col md={3} xs={12}>
                      <label className={styles.labelStyle}>Description</label>
                    </Col>
                    <Col md={9} xs={12}>
                      <p>{plantItems.description}</p>
                    </Col>
                    {/* Tag List */}
                    <Col md={3} xs={12}>
                      <label className={styles.labelStyle}>
                        Characteristics
                      </label>
                    </Col>
                    <Col md={9} xs={12}>
                      <div className={styles.tagsList}>
                        <PlantTagsList plantTags={plantItems.tags} />
                      </div>
                    </Col>
                    <Col md={3} xs={12}>
                      <label className={styles.labelStyle}>Price</label>
                    </Col>
                    <Col md={9} xs={12}>
                      <p>€ {plantItems.price}</p>
                    </Col>
                    <Col md={12} xs={12}>
                      <Button
                        variant="outline-secondary"
                        className={styles.buttonStyle}
                        onClick={() => onViewDetailsClick(plantItems)}
                      >
                        View Details
                      </Button>{" "}
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </>
  );
};
