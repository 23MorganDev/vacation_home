import React from "react";
import Homeheader from "../Homeheader/Homeheader";
import Footer from "../Footer/Footer";
import "./Gallery.css";
import ImageThree from "../../assets/images/BD image3.jpg"
import ImageTwo from "../../assets/images/BD image2.jpg"
import ImageOne from "../../assets/images/BD Image 1.jpg"

const Gallery = () => {
  const images = [
    {
      src: ImageOne,
      description:
        "The cozy living room is perfect for relaxation with family and friends.",
    },
    {
      src: ImageTwo ,
      description:
        "Bedroom 1 features a king-sized bed and calming decor for a restful night.",
    },
    {
      src: ImageThree,
      description:
        "Bedroom 2 offers a queen-sized bed with elegant furnishings and a view.",
    },
    {
      src:  ImageOne ,
      description:
        "The fully equipped kitchen is ideal for preparing delicious meals during your stay.",
    },
    {
      src:  ImageTwo ,
      description:
        "Modern bathroom with all the necessary amenities for your comfort.",
    },
    {
      src:  ImageThree ,
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
