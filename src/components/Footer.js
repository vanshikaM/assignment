import fb from '../assets/fb.png';
import twit from '../assets/twit.png';
import insta from '../assets/insta.png';

const Footer = () => {
  return (
    <div className="container-fluid bg-body-tertiary">
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 w-12 ">
        <div className="col-md-4 d-flex align-items-center">
          <a
            href="/"
            className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1"
          >
          </a>
          <span className="mb-3 mb-md-0 text-body-secondary">
            © 2023 Company, Inc
          </span>
        </div>

        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
          <li className="ms-3">
            <a className="text-body-secondary" href="#">
                <img  className="bi" width="24" height="24" src={insta}/>
              
            </a>
          </li>
          <li className="ms-3">
          <a className="text-body-secondary" href="#">
                <img  className="bi" width="24" height="24" src={twit}/>
              
            </a>
          </li>
          <li className="ms-3">
          <a className="text-body-secondary" href="#">
                <img  className="bi" width="24" height="24" src={fb}/>
              
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default Footer;
