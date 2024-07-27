import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles
import './Recommendations.css';

const recommendations = [
  {
    name: "James Gouse",
    role: "Graphic Designer",
    text: "Great Quality! Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit.",
    img: "/project1.png",
  },
  {
    name: "Tiana Philips",
    role: "Photographer",
    text: "Amazing Work! Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit.",
    img: "/project1.png",
  },
  {
    name: "Talan Westervelt",
    role: "Business Man",
    text: "Excellent Service! Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit.",
    img: "/project1.png",
  },
  {
    name: "Jane Doe",
    role: "Developer",
    text: "Fantastic Experience! Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit.",
    img: "/project1.png",
  },
  {
    name: "Jane Doe",
    role: "Developer",
    text: "Fantastic Experience! Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit.",
    img: "/project1.png",
  },
  {
    name: "Jane Doe",
    role: "Developer",
    text: "Fantastic Experience! Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit.",
    img: "/project1.png",
  },
  {
    name: "Jane Doe",
    role: "Developer",
    text: "Fantastic Experience! Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit.",
    img: "/project1.png",
  },
  {
    name: "Jane Doe",
    role: "Developer",
    text: "Fantastic Experience! Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit.",
    img: "/project1.png",
  },
  {
    name: "Jane Doe",
    role: "Developer",
    text: "Fantastic Experience! Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit.",
    img: "/project1.png",
  },

  // Add more recommendations if needed
];

const Recommendations = () => {
  const settings = {
    showThumbs: false,
    infiniteLoop: true,
    showStatus: false,
    showIndicators: true,
    swipeable: true,
    dynamicHeight: false,
    emulateTouch: true,
    autoPlay: true,
    interval: 3000,
    transitionTime: 500,
    centerMode: true,
    centerSlidePercentage: 33.33, // Show 3 cards at a time
    showArrows: true,
    useKeyboardArrows: true,
  };

  return (
    <div className="recommendations-container">
      <h2>Recommendations</h2>
      <p>Amet Minim Mollit Non Deserunt Ullamco Est Sit Aliqua Dolor Do Amet Sint.</p>
      <Carousel {...settings}>
        {recommendations.map((rec, index) => (
          <div key={index} className="recommendation-card">
            <div className="stars">
              {[...Array(5)].map((star, i) => (
                <span key={i}>&#9733;</span>
              ))}
            </div>
            <h3>{rec.name}</h3>
            <p className="role">{rec.role}</p>
            <p className="description">{rec.text}</p>
            <div className="author">
              <img src={rec.img} alt={rec.name} className="author-img" />
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Recommendations;
