const FAQ = () =>{

    return(<div className="container" id="faq">
    <div className="row" id="faq">
      <div className="col-12">
        <div className="section-title-center">
          <h2 className="pb-2 font-bold mt-n3 mt-md-n4 border-bottom shadow-sm">Frequently Asked Questions</h2><br/>
        </div>
      </div>
      <div className="col-12">
        <div className="accordion" id="projectAccordion">
          <div className="accordion-item">
            <h2 className="accordion-header" id="project-headingOne">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#project-collapseOne" aria-expanded="false" aria-controls="project-collapseOne">
                <span>Q1.</span> What is Medico Solutions and what does it do?
              </button>
            </h2>
            <div id="project-collapseOne" className="accordion-collapse collapse" aria-labelledby="project-headingOne" data-bs-parent="#projectAccordion">
              <div className="accordion-body">
                <p>
                Medico Solutions is a comprehensive medical software solution designed to streamline medical practice management and improve patient care. It offers features such as appointment scheduling, electronic health record (EHR) management, billing, and more
                </p>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="project-headingTwo">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#project-collapseTwo" aria-expanded="false" aria-controls="project-collapseTwo">
                <span>Q2.</span> How can Medico Solutions benefit healthcare providers and practices?
              </button>
            </h2>
            <div id="project-collapseTwo" className="accordion-collapse collapse" aria-labelledby="project-headingTwo" data-bs-parent="#projectAccordion">
              <div className="accordion-body">
                <p>
                Medico Solutions can benefit healthcare providers by reducing administrative tasks, improving patient data management, enhancing communication, and ultimately improving the efficiency and quality of care.
                </p>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="project-headingThree">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#project-collapseThree" aria-expanded="false" aria-controls="project-collapseThree">
                <span>Q3.</span> Can I use Medico Solutions on different devices and platforms?
              </button>
            </h2>
            <div id="project-collapseThree" className="accordion-collapse collapse" aria-labelledby="project-headingThree" data-bs-parent="#projectAccordion">
              <div className="accordion-body">
                <p>
                Yes, Medico Solutions is compatible with various devices and platforms, including Windows, macOS, and mobile devices such as iOS and Android.
                </p>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="project-headingFour">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#project-collapseFour" aria-expanded="false" aria-controls="project-collapseFour">
                <span>Q3.</span>What are the system requirements for using Medico Solutions ?
              </button>
            </h2>
            <div id="project-collapseFour" className="accordion-collapse collapse" aria-labelledby="project-collapseFour" data-bs-parent="#projectAccordion">
              <div className="accordion-body">
                <p>
                Medico Solutions has minimal system requirements, including a modern web browser and a stable internet connection. Detailed system requirements can be found in our documentation.
                </p>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="project-headingFive">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#project-collapseFive" aria-expanded="false" aria-controls="project-collapseFive">
                <span>Q3.</span> Is training or onboarding assistance provided for Medico Solutions ?
              </button>
            </h2>
            <div id="project-collapseFive" className="accordion-collapse collapse" aria-labelledby="project-collapseFive" data-bs-parent="#projectAccordion">
              <div className="accordion-body">
                <p>
                Yes, we offer training and onboarding assistance to help you get started with [Medical Software Name]. Our support team is here to guide you through the process.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>)
}

export default FAQ;