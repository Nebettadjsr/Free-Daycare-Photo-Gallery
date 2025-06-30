import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Gallery.css";

function Gallery() {
  const [images, setImages] = useState([]);
  const [childName, setChildName] = useState("");
  const [note, setNote] = useState("");


  // Get child name from localStorage
  useEffect(() => {
    const savedName = localStorage.getItem("child_name");
    if (!savedName) {
      window.location.href = "/";
      return;
    }
    setChildName(savedName);
  }, []);

 // Load photos.json for this child
useEffect(() => {
  if (!childName) return;

  const BUCKET = "kita-fotos-langenbieber.firebasestorage.app";
  // photos.json URL:
  const jsonUrl =
    `https://firebasestorage.googleapis.com/v0/b/${BUCKET}/o/` +
    encodeURIComponent(`images/${childName}/photos.json`) +
    `?alt=media`;

  fetch(jsonUrl)
    .then((res) => {
      if (!res.ok) throw new Error("Datei nicht gefunden");
      return res.json();
    })
    .then((data) => {
      setNote(data.note || "");
      const base =
        `https://firebasestorage.googleapis.com/v0/b/${BUCKET}/o/`;
      const imageEntries = data.photos.map((entry) => {
        const filePath = `images/${childName}/${entry.file}`;
        return {
          // downloadable URL for each JPG
          url: `${base}${encodeURIComponent(filePath)}?alt=media`,
          showWatermark: entry.wm === "Y",
          filename: entry.file
        };
      });
      setImages(imageEntries);
    })
    .catch((err) => {
      console.error("Fehler beim Laden der Bildliste", err);
    });
}, [childName]);
  
  

  if (!childName) return null;

  return (
    <div className="gallery-container">
    

        <h1>Fotogalerie für {childName}</h1>

      {note && <p className="gallery-note"><strong>Hinweis:</strong> {note}</p>}

      <h3>Wie es funktioniert:</h3>
      <ol>    
        <li>Fotos in Ruhe ansehen, aussuchen, Nummern der gewünschten Fotos notieren<br />
            Einzelbild: 5 € (auch Geschwister-/Familienfoto), Gruppenbild: 3 €</li>
        <li>Bezahlung via <a href="https://paypal.me/BiancaKrause03" target="_blank" rel="noopener noreferrer">PayPal.me/BiancaKrause03</a> oder an bianca-krause@aikq.de <br />
            Alternativ: Barzahlung in der Kita - Leserliche Liste mit Nummer des Kindes + Nummern der Fotos samt passendem Betrag in einem verschlossenen Briefumschlag in der Kita abgeben.
            <p className="gallery-note"><strong>Achtung:</strong> unbedingt Nutzername (4 oder 5 stellige Zahlenkombination)  + Fotonummern angeben!</p>
            </li>
        <li>Nach Zahlungseingang entferne ich das Wasserzeichen von den Bildern<br />
            (PayPal: max. 24 h, Barzahlung dauert länger)</li>
        <li>Wenn das Wasserzeichen entfernt ist → Bild anklicken um das Bild lokal zu speichern/ downloaden</li>
        <li>
          Alle Bilder werden nach Ablauf der Frist gelöscht. (Stichtag ist der 30.06.2025) Es verbleiben keine Kopien bei Fotografin Bianca Krause und es werden keine Daten auf dem Server gespeichert. Spätere Anfragen für Bilder können NICHT erfüllt werden.
        </li>
      </ol>

      <p>Bei Fragen oder Problemen: WhatsApp an <strong>(0176 6238 5445)</strong> oder E-Mail an <strong>bianca-krause@aikq.de</strong></p>

      <p>Diese Galerie enthält <strong>{images.length}</strong> Bilder</p>




      <div className="gallery">
        {images.map((img, index) => (
          <div key={index} className="image-wrapper">
            {img.showWatermark ? (
  <>
    <img src={img.url} alt={`Foto ${index + 1}`} />
    <img
      src="/images/watermark.png"
      alt="Wasserzeichen"
      className="watermark"
    />
  </>
) : (
  <a href={img.url} download>
    <img src={img.url} alt={`Foto ${index + 1}`} />
  </a>
)}

            <p className="filename">{img.filename}</p>
          </div>
        ))}
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
    Bianca Krause<br />
    Hauptstr. 6<br />
    36145 Hofbieber<br />
    E-Mail: bianca-krause@aikq.de<br />
    Tel: 0176 6238 5445
  </p>
  {/* Optional: USt-ID angeben, falls vorhanden */}
  {/* <p style={{ margin: 0 }}>USt-ID: DE123456789</p> */}
  <Link to="/datenschutz" style={{ fontSize: "0.9rem", color: "#666", margin: "0 10px" }}>
  Datenschutz
</Link>
</footer>

    </div>
  );
}

export default Gallery;
