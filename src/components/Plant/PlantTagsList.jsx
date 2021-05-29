import React from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import styles from "../../assets/styles/plant.module.scss";
export const PlantTagsList = ({ plantTags }) => {
  // Adding different set of colors to different set of tags from the plantslist to differentiate each of the tags
  const tagsList = Object.keys(plantTags).map((i) => {
    //   Rendering each of the elements based on each of the different tag names
    if (plantTags[i].startsWith("harvestweeks")) {
      return (
        //   Overlay effect for the title tag | To display the title at the top of the tag
        <OverlayTrigger
          key={i}
          placement="top"
          overlay={<Tooltip id={`tooltip-$"top"`}>Harvest</Tooltip>}
        >
          <h2>
            <span className={styles.harvestTags}>
              {" "}
              {/* Removing the label and displaying only the value */}
              {plantTags[i].replace("harvestweeks:", "")}
            </span>
          </h2>
        </OverlayTrigger>
      );
    } else if (plantTags[i].startsWith("line")) {
      return (
        <OverlayTrigger
          key={i}
          placement="top"
          overlay={<Tooltip id={`tooltip-$"top"`}>Line</Tooltip>}
        >
          <h2>
            <span className={styles.lineTags}>
              {" "}
              {plantTags[i].replace("line:", "")}
            </span>
          </h2>
        </OverlayTrigger>
      );
    } else if (plantTags[i].startsWith("nutrition")) {
      return (
        <OverlayTrigger
           key={i}
          placement="top"
          overlay={<Tooltip id={`tooltip-$"top"`}>Nutrition</Tooltip>}
        >
          <h2>
            <span className={styles.nutritionTags}>
              {" "}
              {plantTags[i].replace("nutrition:", "")}
            </span>
          </h2>
        </OverlayTrigger>
      );
    } else if (plantTags[i].startsWith("planttype")) {
      return (
        <OverlayTrigger
        key={i}
          placement="top"
          overlay={<Tooltip id={`tooltip-$"top"`}>Plant Type</Tooltip>}
        >
          <h2>
            <span className={styles.planttypeTags}>
              {" "}
              {plantTags[i].replace("planttype:", "")}
            </span>
          </h2>
        </OverlayTrigger>
      );
    } else if (plantTags[i].startsWith("usage")) {
      return (
        <OverlayTrigger
        key={i}
          placement="top"
          overlay={<Tooltip id={`tooltip-$"top"`}>Usage</Tooltip>}
        >
          <h2>
            <span className={styles.usageTags}> {plantTags[i]}</span>
          </h2>
        </OverlayTrigger>
      );
    }
  });
  return <>{tagsList}</>;
};
