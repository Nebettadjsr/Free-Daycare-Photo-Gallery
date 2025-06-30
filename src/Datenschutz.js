
import React from "react";
import { Link } from "react-router-dom";
import "./App.css"; // uses shared container and typography styles

function Datenschutz() {
  return (
    <div className="container">
      <h1>Datenschutzerklärung</h1>

      <p>
        <strong>Betreiber der Website</strong><br />
        Fotografin Bianca Krause<br />
        Hauptstr. 6<br />
        36145 Hofbieber<br />
        E-Mail: bianca-krause@aikq.de<br />
      </p>

      <h3>1. Allgemeines</h3>
      <p>
        Diese Website dient ausschließlich dem Abruf von Fotos, die im Rahmen der
        Kita-Fototage erstellt wurden. Es werden keine weiteren personenbezogenen
        Daten erhoben oder verarbeitet.
      </p>

      <h3>2. Rechtsgrundlage</h3>
      <p>
        Die Verarbeitung Ihrer Daten erfolgt auf Grundlage Ihrer Einwilligung im
        Rahmen der Fotoserlaubnis („Einwilligungserklärung für den Zweck des
        Fototages“). Ein Widerruf ist jederzeit per E-Mail möglich.
      </p>

      <h3>3. Zweck und Umfang der Datenverarbeitung</h3>
      <ul>
        <li>
          <strong>Bilddaten</strong>: Wir speichern und zeigen nur die Bilder Ihres
          Kindes, zu denen Sie uns die Einwilligung erteilt haben.
        </li>
        <li>
          <strong>Zugangsdaten</strong>: Jede Familie erhält eine individuelle
          Zahlenkombination (Nutzername) + Passwort, um nur die eigenen Bilder
          einsehen zu können.
        </li>
        <li>
          <strong>Speicherdauer</strong>: Alle Bilder werden 30 Tage nach
          Veröffentlichung automatisch und unwiderruflich gelöscht.
        </li>
      </ul>

      <h3>4. Keine Weitergabe an Dritte</h3>
      <p>Es findet keine Weitergabe Ihrer Bilddaten oder Zugangsdaten an Dritte statt.</p>

      <h3>5. Hosting & Sicherheit</h3>
      <p>
        Zur Bereitstellung dieser Website nutzen wir den Google-Service Firebase
        Hosting. Datenschutzinformationen finden Sie unter:
        <a href="https://firebase.google.com/support/privacy" target="_blank" rel="noopener noreferrer">
          https://firebase.google.com/support/privacy
        </a>
      </p>

      <h3>6. Keine Cookies, keine Analyse</h3>
      <p>Wir verwenden keine Tracking-Cookies und kein Web-Analytics.</p>

      <h3>7. Ausschluss von Suchmaschinen</h3>
      <p>
        Diese Website ist durch eine robots.txt komplett von allen Suchmaschinen
        ausgesperrt und wird nicht indexiert oder archiviert.
      </p>

      <h3>8. Ihre Rechte</h3>
      <p>
        Sie haben das Recht auf Auskunft, Berichtigung, Löschung und Einschränkung
        der Verarbeitung Ihrer personenbezogenen Daten. Bei Fragen wenden Sie sich
        bitte an bianca-krause@aikq.de
      </p>

      <p style={{ marginTop: "30px", fontStyle: "italic", fontSize: "0.9rem" }}>
        Stand: April 2025
      </p>

      {/* Link zum Zurückkehren oder in die Navigation einfügen */}
      <p style={{ textAlign: "center", marginTop: "20px" }}>
        <Link to="/">Zurück zur Anmeldung</Link>
      </p>
    </div>
  );
}

export default Datenschutz;
