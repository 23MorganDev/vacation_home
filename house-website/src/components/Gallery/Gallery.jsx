import React from "react";
import Homeheader from "../Homeheader/Homeheader";
import Footer from "../Footer/Footer";
import "./Gallery.css";
import TvRoom from "../../assets/images/Tv_room1.jpg"
import Kitchen from "../../assets/images/Kitchen1.jpg"
import LivingRoom from "../../assets/images/living_room.jpg"
import Bedroom from "../../assets/images/Bedroom2.jpg"
import Gazebo from "../../assets/images/Resting_area1.jpg"
import Backyard from "../../assets/images/Backyard1.jpg"
import Bathroom from "../../assets/images/cloakroom.jpg"

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
      src: TvRoom,
      description:
        "TV room has spacious space and comfortable chairs for a fun movie and sports watching session.",
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
      src: Gazebo,
      description:
        "Enjoy the spacious Gazebo for late night coffee",
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
