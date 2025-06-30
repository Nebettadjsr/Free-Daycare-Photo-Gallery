import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import "./App.css";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [credentials, setCredentials] = useState({});
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/credentials.json")
      .then((res) => res.json())
      .then((data) => {
        console.log("Geladene Zugangsdaten:", data);
        setCredentials(data);
      })
      .catch((err) => console.error("Fehler beim Laden der Zugangsdaten:", err));
  }, []);

  const handleLogin = () => {
    if (credentials[username] === password) {
      localStorage.setItem("child_name", username);
      navigate("/galerie");
    } else {
      setError("Falscher Nutzername oder Passwort.");
    }
  };

  return (
    <div className="container">
      
      <h1>Fotogallerie von Your-Name-Here - Kita in Town – Fotos 2025 </h1>
      <p>
        <strong>Nutzername:</strong> 4 oder 5 stellige Zahlenkombination<br />
        <strong>Passwort:</strong> wird/ wurde in der Kita ausgeteilt, alles kleinschreiben
      </p>
     

      <h3>Wie es funktioniert:</h3>
      <ol>    
        <li>Fotos in Ruhe ansehen, aussuchen, Nummern der gewünschten Fotos notieren<br />
            Einzelbild: 5 € (auch Geschwister-/Familienfoto), Gruppenbild: 3 €</li>
        <li>Bezahlung via <a href="https://paypal.me/Your-Name" target="_blank" rel="noopener noreferrer">PayPal.me/Your-Name</a> oder an Your-Mail <br />
            Alternativ: Barzahlung in der Kita - Leserliche Liste mit Nummer des Kindes + Nummern der Fotos samt passendem Betrag in einem verschlossenen Briefumschlag in der Kita abgeben.
            <p className="gallery-note"><strong>Achtung:</strong> unbedingt Nutzername (4 oder 5 stellige Zahlenkombination)  + Fotonummern angeben!</p>
            </li>
        <li>Nach Zahlungseingang entferne ich das Wasserzeichen von den Bildern<br />
            (PayPal: max. 24 h, Barzahlung dauert länger)</li>
        <li>Wenn das Wasserzeichen entfernt ist → Bild anklicken um das Bild lokal zu speichern/ downloaden</li>
        <li>
          Alle Bilder werden nach Ablauf der Frist gelöscht. (Stichtag ist der 30.06.2025) Es verbleiben keine Kopien bei Fotografin Your-Name und es werden keine Daten auf dem Server gespeichert. Spätere Anfragen für Bilder können NICHT erfüllt werden.
        </li>
      </ol>

      <p>Bei Fragen oder Problemen: WhatsApp an <strong>(0123 456 789)</strong> oder E-Mail an <strong>Your-Mail</strong></p>

      <div className="login-box">
        <h2>Anmeldung</h2>
        <input
          type="text"
          placeholder="Nutzername - 12345"
          value={username}
          onChange={(e) => setUsername(e.target.value.trim())}
        />
        <input
          type="password"
          placeholder="Passwort - teetasse"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Einloggen</button>
        {error && <p className="error">{error}</p>}
      </div>
      <footer
  style={{
    marginTop: "40px",
    fontSize: "0.8rem",
    color: "#666",
    textAlign: "center",
    lineHeight: 1.4
  }}
>
  <p style={{ margin: 0 }}><strong>Impressum</strong></p>
  <p style={{ margin: 0 }}>
    Your-Name<br />
    Street. 123<br />
    ZIP Town<br />
    E-Mail: Your-Mail<br />
    Tel: 0123 456 789
  </p>
  <Link to="/datenschutz" style={{ fontSize: "0.9rem", color: "#666", margin: "0 10px" }}>
  Datenschutz
</Link>
  {/* Optional: USt-ID angeben, falls vorhanden */}
  {/* <p style={{ margin: 0 }}>USt-ID: DE123456789</p> */}
</footer>

    </div>
  );
}

export default App;
