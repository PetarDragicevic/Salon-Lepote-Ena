import React from "react";
import "./Wallpaper.css";

function Wallpaper() {
  return (
    <div className="cover">
      <img
        className="img-thumbnail img-fluid wallpaper"
        src="materijal/wallpaper.jpg"
      />
      <div className="text">
        <h1 className="display-7">DIAMOND</h1>
        <h2 className="display-8">by Jelena Dragicevic</h2>
        <p className="lead">
          "But I must explain to you how all this mistaken idea of denouncing
          pleasure and praising pain was born and I will give you a complete
          account of the system, and expound the actual teachings of the great
          explorer of the truth, the master-builder of human happiness. No one
        </p>
      </div>
    </div>
  );
}

export default Wallpaper;