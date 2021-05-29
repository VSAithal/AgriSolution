import React, { useEffect, useState } from "react";
import styles from "../../assets/styles/plant.module.scss";
import { getPlantsDetails } from "../../services/getPlantDetails";

import { Alert } from "react-bootstrap";
import { PlantListItem } from "./PlantListItem";
// To check if the object is empty
Object.prototype.isObjectEmpty = function () {
    for (var key in this) {
      if (this.hasOwnProperty(key)) return false;
    }
    return true;
  };
export const PlantsContainer = ({ onViewDetailsClick, searchText }) => {
  
//to store the ids so that when there is any connectivity issues UI should still be working
  let [plantItems, setplantItems] = useState([]); // initialization plantItems with empty object
  useEffect(() => {
    // Fetching the data using service request and setting it using setplantItems
    getPlantsDetails().then(
      (ListItems) => ListItems && setplantItems(ListItems)
    );
  }, []);
  // Search filter function starts here
  // Filter the IDs matching with the search text
  const filteredIDs = Object.keys(plantItems).filter((key, j) =>
    Object.keys(plantItems[key].tags).some(
      (i) =>
        plantItems[key].tags[i]
          .toLowerCase()
          .indexOf(searchText.toLowerCase()) !== -1
    )
  );
  // Using filteredIDs now reduce the original data to filtered data
  const filteredItems = Object.keys(plantItems)
    .filter((key) => filteredIDs.includes(key))
    .reduce((obj, key) => {
      obj[key] = plantItems[key];
      return obj;
    }, {});

  return (
    <div className="container">
      <h4 className={styles.listHeader}>Plant catalogue</h4>
      <div className={styles.plantContainer}>
        {/* Looping through the object using map function to render it on the user interface */}
        {/* If the filteredData is empty(no search done) show the original data  */}
        {filteredItems.isObjectEmpty() ? (
          // If no results are found
          filteredItems.isObjectEmpty() && searchText !== "" ? (
            <Alert variant="warning">
              <Alert.Heading>
                Oh, snap! We could not find any results for "{searchText}"!
              </Alert.Heading>
              <p>
                <ul>
                  <li>Check your spelling.</li>
                  <li>
                    Try with some valid tags e.g. "Vitamin", "harvest", etc.
                  </li>
                </ul>
              </p>
            </Alert>
          ) : (
            Object.keys(plantItems).map((key, i) => (
                <PlantListItem
                plantItems={plantItems[key]}
                keyVal={key}
                key={key}
                onViewDetailsClick={onViewDetailsClick}
              />
            ))
          )
        ) : (
          Object.keys(filteredItems).map((key, i) => (
            <PlantListItem
              plantItems={filteredItems[key]}
              keyVal={key}
              key={key}
              onViewDetailsClick={onViewDetailsClick}
            />
          ))
        )}
      </div>
    </div>
  );
};
