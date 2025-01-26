import React from "react";
import Homeheader from "../Homeheader/Homeheader";
import Footer from "../Footer/Footer";
import "./Gallery.css";
import QueenSize from "../../assets/images/QueenSize.jpg"
import Kitchen from "../../assets/images/Kitchen.jpg"
import LivingRoom from "../../assets/images/BD Image 1.jpg"
import Bedroom from "../../assets/images/bed.jpg"
import Backyard from "../../assets/images/backyard.jpg"
import Bathroom from "../../assets/images/ModernBathroom.jpg"

const Gallery = () => {
  const images = [
    {
      src: LivingRoom,
      description:
        "The cozy living room is perfect for relaxation with family and friends.",
    },
    {
      src: Bedroom,
      description:
        "Bedroom 1 features a king-sized bed and calming decor for a restful night.",
    },
    {
      src: QueenSize,
      description:
        "Bedroom 2 offers a queen-sized bed with elegant furnishings and a view.",
    },
    {
      src: Kitchen,
      description:
        "The fully equipped kitchen is ideal for preparing delicious meals during your stay.",
    },
    {
      src: Bathroom,
      description:
        "Modern bathroom with all the necessary amenities for your comfort.",
    },
    {
      src: Backyard,
      description:
        "Enjoy the spacious backyard, perfect for outdoor activities and gatherings.",
    },
  ];

  return (
    <>
      <header>
        <Homeheader />
      </header>
      <section className="gallery">
        <h2>Gallery</h2>
        <div className="gallery-grid">
          {images.map((image, index) => (
            <div className="gallery-item" key={index}>
              <img src={image.src} alt={`Gallery Item ${index + 1}`} />
              <p className="gallery-description">{image.description}</p>{" "}
            </div>
          ))}
        </div>

        <Footer />
      </section>
    </>
  );
};

export default Gallery;
