
import './App.css';
import NavBar from './components/NavBar';
import Alert from './UI/Alert';
import Slider from './components/Slider';
import Feature from './components/Feature';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import FormDemo from './components/FormDemo';
import { useState } from "react";

function App() {
  const [showForm,setShowForm] = useState(false);
  const [message,setMessage] = useState("");


  const demoFormShowHandler = (show) =>{
      setShowForm(show);
  }
  const onHandleAlert = (message) =>{
    setMessage(message);
  }
  return (
    <div className="App">
      <NavBar demoFormShowHandler = {demoFormShowHandler}/>
      {message && <Alert message = {message} />}
      <Slider/>
      <Feature/>
      <FormDemo onAlertHandler={onHandleAlert}/>
      <Pricing/>
      <FAQ/>
      <Footer/>
    </div>
  );
}

export default App;
