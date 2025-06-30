
import React from "react";
import { Link } from "react-router-dom";
import "./App.css"; // uses shared container and typography styles

function Datenschutz() {
  return (
    <div className="container">
      <h1>Datenschutzerklärung</h1>

      <p>Place your Dataprivacy Text here!!!!
      </p>


      {/* Link zum Zurückkehren oder in die Navigation einfügen */}
      <p style={{ textAlign: "center", marginTop: "20px" }}>
        <Link to="/">Zurück zur Anmeldung</Link>
      </p>
    </div>
  );
}

export default Datenschutz;
