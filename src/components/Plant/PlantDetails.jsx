import React from "react";
// Styles related to plant components
import styles from "../../assets/styles/plant.module.scss";
import {
  Card,
  Row,
  Col,
  Carousel,
} from "react-bootstrap";

import { PlantTagsList } from "./PlantTagsList.jsx";
import { PlantSlidersList } from "./PlantSlidersList";

export const PlantDetails = ({ plantDetailsObject }) => {
    console.log("plantDetailsObject",plantDetailsObject);
  return (
    <div className="container">
      <h4 className={styles.listDetailsHeader}>Plant Details</h4>
      <div className={styles.plantContainer}>
        <Card className={styles.cardContainer}>
          <Card.Body>
            <Card.Title className={styles.accordionHeader_details}>
              {plantDetailsObject.title}
            </Card.Title>
            <Row>
              {/* Carousel to display multiple images */}
              <Col md={4} xs={12} className={styles.carouselContainer}>
                <Carousel>
                  {plantDetailsObject.images.map((item, i) => (
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
              {/* Description part*/}
              <Col md={8} xs={12}  className={styles.rightContainer}>
                <Row>
                  <Col md={3} xs={12}>
                    <label className={styles.labelStyle}>Description</label>
                  </Col>
                  <Col md={9} xs={12}>
                    <p>{plantDetailsObject.description}</p>
                  </Col>
                  {/* Tag List */}
                  <Col md={3} xs={12}>
                    <label className={styles.labelStyle}>Characteristics</label>
                  </Col>
                  <Col md={9} xs={12}>
                    <div className={styles.tagsList}>
                      <PlantTagsList plantTags={plantDetailsObject.tags} />
                    </div>
                  </Col>
                  {/* LED intensity range slider */}
                  <PlantSlidersList slidersList={plantDetailsObject.light_settings} />
                  <Col md={3} xs={12}>
                    <label className={styles.labelStyle}>Price</label>
                  </Col>
                  <Col md={9} xs={12}>
                    <p>€ {plantDetailsObject.price}</p>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};
