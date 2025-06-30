# Free-Daycare-Photo-Gallery

**Free Daycare Picture App** is a simple static React-based gallery for sharing and selling children’s photos without a backend. It was originally built to serve a small daycare photographer project, enabling parents to browse, select, and purchase images with minimal setup and cost.

## Project Overview

* **What & Why**: A fully static single-page app that lists photos per child, displays watermarks as overlays, and enables downloads upon purchase.
* **No Backend**: All data (image lists and notes) lives in `photos.json` files within each child folder under `public/images`. The app fetches these JSONs directly from Firebase Storage.
* **Hosting**: Deployed via Firebase Hosting and Firebase Storage. Images and JSON metadata are served from a public bucket.

## Features & Architecture

### 1. Watermark Implementation

* We overlay a single watermark image at render time instead of embedding it into each photo file. 
* File is stored in `public/images/watermark.png`. Replace File as needed. Make sure its a PNG with transparent Background.
* **Pros**: No duplicate files, minimal storage overhead, lower storage costs.
* **Cons**: Not foolproof security—anyone determined can remove an overlay or inspect the DOM.
* **Behavior Flags (`wm`)**:

  * `wm: "Y"` → watermark on: photos render with an overlay; clicks do nothing.
  * `wm: "N"` → watermark off: clicking the photo initiates a direct download.

### 2. Folder Structure & JSON Metadata

```
public/
  images/
    {childId}/
      photos.json   ← metadata (photo filenames + `wm` flags + optional `note`)
      IMG_0001.jpg
      IMG_0002.jpg
      ...
```

* Each `photos.json` preserves a `note` field to communicate payment issues or other instructions to clients.
* The `generate-photo-lists.js` script can scan a specific child folder, preserve its `note`, and regenerate the photos array automatically.

### 3. Credentials & Privacy

* A simple credentials file (`credentials.json`) maps four- or five-digit codes to child IDs.
* **No complicated auth**: No email or phone number required—only a code per family ensures ease of use and data privacy.

### 4. Robots.txt

* Includes rules to prevent any search engine from indexing gallery content (`noindex, nofollow`).
* Ensures parental and child privacy by keeping images off public search results.

### 5. Payment Workflow

* **PayPal.me** or **cash** only—no payment provider fees or sign‑up overhead.
* Small one‑time project does not require complex e‑commerce integration.
* After payment:

  1. Update the local `photos.json` for that child, setting `wm: "N"` on purchased images und upload via Firebase Web-interface.
  2. (Optional) If retouching or editing is requested, manually upload edited JPGs to the Firebase console under the correct folder and update `photos.json` accordingly.

### 6. Usage Instructions

1. **Deploy**: Build the React app and deploy to Firebase Hosting.
2. **Upload**: Mirror `public/images` to Firebase Storage with `gsutil rsync`, excluding raw `.cr3`/`.xmp` files to save space.
3. **Grant Access**: Ensure Firebase Storage rules allow public read of images and JSON.
4. **Share**: Distribute the gallery URL and the family-specific code.

## Operational Costs

* **Firebase Storage**: \~16 GB of data for \~60 days → approximately €0.18 total.

## License

This project is released under the **MIT License**. See [LICENSE](LICENSE) for details.

---

*Feel free to fork, adapt, or improve this gallery for your own needs!*
