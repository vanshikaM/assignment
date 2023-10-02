import logo from "../../src/assets/logo2.png";

const NavBar = (props) => {
  const formShowHandler = () => {
    props.demoFormShowHandler(true);
  };

  return (
    <nav
      className="navbar navbar-expand-lg shadow-lg "
      style={{
        background: `linear-gradient(190deg, #fa7c30 60%, rgba(0,128,128, 0.1)30%)`,
      }}
    >
      <div className="container-fluid px-4 ">
        <a className="navbar-brand " href="#">
          <img src={logo} alt="Medico" width="75" height="50" />
          <br />
          <span className="text-primary ">Medico Solutions</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarSupportedContent"
        >
          <div className="navbar-nav px-4 ">
            <a
              className="nav-link active text-white"
              aria-current="page"
              href="#"
            >
              Home
            </a>
            <a className="nav-link text-white" href="#featured-3">
              Features
            </a>
            <a className="nav-link text-white" href="#featured-4">
              Pricing
            </a>
            <a className="nav-link text-white" href="#faq">
              FAQ
            </a>
          </div>
          <div>
            <button
              type="button"
              className="btn btn-success me-4 "
              onClick={formShowHandler}
              data-bs-toggle="modal"
              data-bs-target="#formBackdrop"
              fdprocessedid="iqk8i3"
            >
              Book Your Demo
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
