import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// Range Slider
import "react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css";
import { NavBar } from "./components/NavBar";
import FooterComponent from "./components/Footer";

import { PlantDetails } from "./components/Plant/PlantDetails";
import { PlantsContainer } from "./components/Plant/PlantsContainer";

class App extends Component {
  state = {
    plantContainerDisplay: true, // Boolean value to toggle display between plant catalogue and plant details
    plantDetails: [], // To store the selected plant details in an object 
    searchFilter: "", // search text
  };
  // View details button click to display the plant details component
  handleViewDetailsClick = (selectedData) => {
    this.setState({ plantContainerDisplay: false });
    this.setState({ plantDetails: selectedData });
    console.log("plantDetails",this.state.plantDetails,selectedData);
  };

  // Search filter handling function
  handleSearchChange = (e) => {
    this.setState({ searchFilter: e.target.value });
  };

  render() {
    return (
      <>
        <NavBar onSearchChange={this.handleSearchChange} plantContainerDisplay={this.state.plantContainerDisplay}/>
        <div className="App">
          {/* Conditional operator to toggle between planr cataogue and plant details components */}
          {this.state.plantContainerDisplay ? (
            <PlantsContainer onViewDetailsClick={this.handleViewDetailsClick} searchText={this.state.searchFilter}/>
          ) : (
            <PlantDetails plantDetailsObject={this.state.plantDetails} />
          )}
        </div>
        <FooterComponent />
      </>
    );
  }
}

export default App;
