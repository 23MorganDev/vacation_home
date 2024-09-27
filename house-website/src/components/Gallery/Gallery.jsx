import React from "react";
import Homeheader from "../Homeheader/Homeheader";
import Footer from "../Footer/Footer";
import "./Gallery.css";

const Gallery = () => {
  const images = [
    {
      src: "https://via.placeholder.com/300?text=Living+Room",
      description:
        "The cozy living room is perfect for relaxation with family and friends.",
    },
    {
      src: "https://via.placeholder.com/300?text=Bedroom+1",
      description:
        "Bedroom 1 features a king-sized bed and calming decor for a restful night.",
    },
    {
      src: "https://via.placeholder.com/300?text=Bedroom+2",
      description:
        "Bedroom 2 offers a queen-sized bed with elegant furnishings and a view.",
    },
    {
      src: "https://via.placeholder.com/300?text=Kitchen",
      description:
        "The fully equipped kitchen is ideal for preparing delicious meals during your stay.",
    },
    {
      src: "https://via.placeholder.com/300?text=Bathroom",
      description:
        "Modern bathroom with all the necessary amenities for your comfort.",
    },
    {
      src: "https://via.placeholder.com/300?text=Backyard",
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
              {/* Description for each image */}
            </div>
          ))}
        </div>

        <Footer />
      </section>
    </>
  );
};

export default Gallery;
