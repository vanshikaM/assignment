import Card from "../UI/Card";

const Feature = () => {

    // array for features
    const featuresData = [{        
    
        id:1,
        src : "https://dataman.in/v2/wp-content/uploads/2023/05/calendar.png.webp",
        heading : "Patient Appointment",
        description : "Patient can book their appointments at Hospital Desk or Online through Hospital Portal or App for a consultant as per available slot, Make payments and get notification for booked appointment on their mobile."
    },
    {        
        id:2,
        src : "https://dataman.in/v2/wp-content/uploads/2023/02/prescription.png",
        heading : "OPD Module",
        description : "OPD Management module streamlines the entire OPD cycle from Patient OP registration, Queue management, Billing, Consultant Computerised Prescription, Daycare scheduling, making it more efficient for both patients and healthcare providers."
    },
    {        
        id:3,
        src : "https://dataman.in/v2/wp-content/uploads/2023/02/intensive-care-unit.png",
        heading : "IPD Module",
        description : "Indoor Patient Management module helps to manage efficiently the Admission, Discharge, Transfer (A/D/T) process, Nursing Care, Patient provisional and final bills and Discharge Summary and many more."
    },
    {        
        id:4,
        src : "https://dataman.in/v2/wp-content/uploads/2023/02/radiology.png",
        heading : "Radiology",
        description : "This module covers sub-specialties such as X-Ray, Ultrasound, CT Scan, MRI etc. Managing entire Radiology process from Registration, Scheduling tests to generating Test reports."
    },
    {        
        id:5,
        src : "https://dataman.in/v2/wp-content/uploads/2023/02/ot-module.png.webp",
        heading : "OT Module",
        description : "O.T. Management helps to Book O.T., Schedule Surgeries, Record surgical notes, Pre and post Anaesthesia follow-ups, O.T. Consents etc."
    },
    {        
        id:6,
        src : "https://dataman.in/v2/wp-content/uploads/2023/02/microscope.png",
        heading : "Pathology",
        description : "The Laboratory module handles OP/IP Patient Test Bookings, Sample Collection, Test report preparation, Lab inventory, linked with Consultant module and robust Interfacing with Lab Machines for Auto test result data capture."
    }
]
  return (
    <div className="container px-4 py-5" id="featured-3">
      <h2 className="pb-2 border-bottom shadow-sm">Why Choose Us ?</h2>
      <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
        {featuresData.map((feature)=>(
            <Card key={feature.id} source={feature.src} heading={feature.heading} desc={feature.description}/>
        ))}
      </div>
         </div>
  );
};

export default Feature;
