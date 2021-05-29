import React from "react";
import useState from "react-usestateref";
import {
  Form,
  Col,
  Row,
  Popover,
  OverlayTrigger,
  Alert,
} from "react-bootstrap";
import styles from "../../assets/styles/plant.module.scss";
//   Range slider
import RangeSlider from "react-bootstrap-range-slider";
export const PlantSlidersList = ({ slidersList }) => {
  // State variables to store the range values of all the colors
  let [valueRed, setValueRed, redRef] = useState(0);
  let [valueBlue, setvalueBlue, blueRef] = useState(0);
  let [valueWhite, setvalueWhite, whiteRef] = useState(0);
  let [valueFarred, setvalueFarred, farRedRef] = useState(0);

  // State variable to keep track of total value(all colors included)
  let [valueTotal, setvalueTotal, totalValRef] = useState(0);
  let totalValue = 0; // Local variable to store the total vlaue

  //   Information pop-over for range slider
  let informationPopover = (
    <Popover id="popover-basic" className={styles.popOverContainer}>
      <Popover.Title as="h3">LED intensity specifications</Popover.Title>
      <Popover.Content>
        Each plant requires a different mix of color spectrum, and expects a
        certain minimum and maximum range on the spectrum intensity. You can
        select a light intensity for each color that lies within the intensity
        range specified for this plant (e.g. blue has range 23-83 means that the
        minimum intensity is 23% and the maximum intensity is 83% for this
        plant). The colors are:
        <ul>
          <li>
            <strong>Blue</strong>: Ensures healthy roots, strong stems, and
            healthy - bigger- leafs.
          </li>
          <li>
            <strong>White</strong>: Minor impact on plant growth or health.
            Effects production of essential oil and thus taste of green.
          </li>
          <li>
            <strong>Red</strong>: Essential for flowering or very weak stage in
            plants.
          </li>
          <li>
            <strong>Far-red</strong>: Impacts the height grow of the plant.
            Plant is potentially getting bigger with weaker stems when far-red
            value is higher.
          </li>
        </ul>
      </Popover.Content>
    </Popover>
  );

  /* on-change of each of the color sliders based on the particular 
    color slider the value is stored in the corresponding state variable */
  function onChangeHandler(e, color) {
    if (color === "red") {
      setValueRed(e.target.value);
    } else if (color === "blue") {
      setvalueBlue(e.target.value);
    } else if (color === "white") {
      setvalueWhite(e.target.value);
    } else if (color === "farred") {
      setvalueFarred(e.target.value);
    }

    // Calculation of the overall led intensity
    totalValue =
      parseInt(redRef.current) +
      parseInt(blueRef.current) +
      parseInt(whiteRef.current) +
      parseInt(farRedRef.current);
    setvalueTotal(totalValue);
  }

  //   Range slider rendering part based on the light_settings mapping
  const rangerList = Object.keys(slidersList).map((i) => {
    console.log("redddd",i);
    let minVal = 0; //Intitialization of min value
    let maxVal = 100; //Intitialization of max value

    Object.keys(slidersList[i]).map((key_val) => {
      minVal = slidersList[i][0];
      maxVal = slidersList[i][1];
    });
    // rendering each of the led range sliders based on the key value
    if (i === "red") {
      return (
        <Form key={i}>
          <Form.Group as={Row}>
            <Col xs="2">
              <label className={styles.rangeLabel}>{i}</label>
            </Col>
            <Col xs="8">
              <RangeSlider
                value={valueRed}
                tooltipLabel={(currentValue) => `${currentValue}%`}
                min={minVal}
                max={maxVal}
                variant="danger"
                onChange={(e) => onChangeHandler(e, "red")}
              />
            </Col>
            <Col xs="2">
              <Form.Control value={valueRed} className="m-0 miniText" readOnly="readOnly"/>
            </Col>
          </Form.Group>
        </Form>
      );
    } else if (i === "blue") {
      return (
        <Form key={i}>
          <Form.Group as={Row}>
            <Col xs="2">
              <label className={styles.rangeLabel}>{i}</label>
            </Col>
            <Col xs="8">
              <RangeSlider
                value={valueBlue}
                tooltipLabel={(currentValue) => `${currentValue}%`}
                min={minVal}
                max={maxVal}
                variant="primary"
                onChange={(e) => onChangeHandler(e, "blue")}
              />
            </Col>
            <Col xs="2">
              <Form.Control value={valueBlue} className="miniText" readOnly="readOnly"/>
            </Col>
          </Form.Group>
        </Form>
      );
    } else if (i === "white") {
      return (
        <Form key={i}>
          <Form.Group as={Row}>
            <Col xs="2">
              <label className={styles.rangeLabel}>{i}</label>
            </Col>
            <Col xs="8">
              <RangeSlider
                value={valueWhite}
                tooltipLabel={(currentValue) => `${currentValue}%`}
                min={minVal}
                max={maxVal}
                variant="secondary"
                onChange={(e) => onChangeHandler(e, "white")}
              />
            </Col>
            <Col xs="2">
              <Form.Control value={valueWhite} className="miniText"  readOnly="readOnly"/>
            </Col>
          </Form.Group>
        </Form>
      );
    } else if (i === "farred") {
      return (
        <Form key={i}>
          <Form.Group as={Row}>
            <Col xs="2">
              <label className={styles.rangeLabel}>{i}</label>
            </Col>
            <Col xs="8">
              <RangeSlider
                value={valueFarred}
                tooltipLabel={(currentValue) => `${currentValue}%`}
                min={minVal}
                max={maxVal}
                variant="dark"
                onChange={(e) => onChangeHandler(e, "farred")}
              />
            </Col>
            <Col xs="2">
              <Form.Control value={valueFarred} className="miniText" readOnly="readOnly"/>
            </Col>
          </Form.Group>
        </Form>
      );
    }
  });
  return (
    <>
      <Col md={3} xs={12}>
        <label className={styles.labelStyle}>
          Light Intensity &nbsp;
          <OverlayTrigger
            trigger="click"
            rootClose="true"
            placement="right"
            overlay={informationPopover}
          >
            <a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-info-circle"
                viewBox="0 0 16 16"
              >
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
              </svg>
            </a>
          </OverlayTrigger>
        </label>
        {/* Conditional operator to display the alert message based on the total value */}
        {parseInt(totalValRef.current) > 300 ? (
          <Alert variant="danger" className="p-2">
            <p className="mb-0 miniText">
              Make sure that the overall light(all colors together) value does
              not exceed 300%!
            </p>
          </Alert>
        ) : (
          <></>
        )}
      </Col>
      <Col md={9} xs={12}>
        {rangerList}
      </Col>
    </>
  );
};
