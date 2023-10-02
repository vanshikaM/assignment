const Card = (props) =>{
    return(
        <div className="feature col py-4 shadow-lg">
        <div className="feature-icon d-inline-flex align-items-center justify-content-center bg-gradient fs-2 mb-3">
          <img className="bi " width="1em" height="1em" src= {props.source}/>
        </div>
        <h3 className="fs-4 text-body-emphasis">{props.heading}</h3>
        <p>
        {props.desc}.
        </p>
        
      </div>
    );
}

export default Card;