import banner from "../assets/banner.jpg";
import banner2 from "../assets/banner2.jpg";
import banner3 from "../assets/banner3.jpg";
import Backdrop from "../UI/Backdrop";
import { useState, useEffect } from "react";
import Cube from "./Cube";

const Slider = () => {
  const [url, setUrl] = useState("");

  const onOpenHandler = (pUrl) => {
    setUrl(pUrl);
  };

  return (
    <div className="container col-xxl-8 px-4 mt-0">
      <div className="row flex-lg-row-reverse align-items-center g-5 py-1">
        <div className="col-12 col-sm-8 col-lg-6">
          <Cube />
        </div>
        <div className="col-lg-6">
          <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3 ">
            We Provide Total health Care Solution
          </h1>
          <p className="lead">
            Our Medico Solutions software is suitable for small nursing homes
            (10 bedded) to Large Hospitals (2000+beds) with modular approach
            serving over 100,000 patients everyday. The Healthcare software suit
            comes in Client Server version as well as Cloud
          </p>
          <div className="d-grid gap-2 d-md-flex justify-content-md-start">
            <button
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop"
              type="button"
              className="btn btn-primary btn-lg px-4 me-md-2"
              fdprocessedid="iqk8i3"
              onClick={() => onOpenHandler("ZSiXZxVpVhs")}
            >
              View Demo
            </button>
            <button
              type="button"
              className="btn btn-outline-secondary btn-lg px-4"
              fdprocessedid="ilbqw"
            >
              Default
            </button>
          </div>
          <Backdrop openHandler={onOpenHandler} url={url} />
        </div>
      </div>
    </div>
  );
};

export default Slider;
