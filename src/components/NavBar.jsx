import React from "react";
import { Navbar, Form, FormControl } from "react-bootstrap";

export const NavBar = ({ onSearchChange, plantContainerDisplay }) => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="https://www.agrilution.com/" target="_blank" rel="noreferrer">
          Agrilution
        </Navbar.Brand>
        <div className="m-auto">
          {/* Check if its in the plant list page */}
          {plantContainerDisplay ? (
            <Form inline>
              <FormControl
                type="text"
                placeholder="Search by tags..."
                className="mr-sm-2"
                onChange={(event) => onSearchChange(event)}
              />
            </Form>
          ) : (
            <></>
          )}
        </div>
      </Navbar>
    </>
  );
};
