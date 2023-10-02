import { useState } from "react";
import YouTube from "react-youtube";

const Backdrop = (props) => {
  
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };
  const onCloseHandler = () =>{
    props.openHandler("");
}
  return (
    
    <div
      className="modal fade"
      id="staticBackdrop"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabIndex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content ">
          <div className="modal-header bg-primary bg-gradient">
            <h1 className="modal-title text-white fs-5" id="staticBackdropLabel">
              Medico Solutions
            </h1>
            <button
              type="button"
              className="btn-close btn-close-white"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={onCloseHandler}
            ></button>
          </div>
          <div className="modal-body"> 
              <YouTube videoId={props.url} opts={opts} />
        </div>
        </div>
      </div>
    </div>
  );
};

export default Backdrop;
