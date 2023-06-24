import React, { useState,useEffect } from 'react';
import './Test.css'

function MyForm() {
  // const [address, setAddress] = useState('');
  const [selectedOption, setSelectedOption] = useState('Home');
  const [mobile, setMobile] = useState('');
  const [alternative, setAlternative] = useState('');
  const [referenceName, setReferenceName] = useState('');
  const [referenceNumber, setReferenceNumber] = useState('');
  const [company, setCompany] = useState('');
  const [agreed, setAgreed] = useState(false);
  const [windowLoaded, setWindowLoaded] = useState(false);


  // const handleAddressChange = (event) => {
  //   setAddress(event.target.value);
  // };
  useEffect(() => {
    window.addEventListener('load', () => {
      setWindowLoaded(true);
    });
  }, []);
  

  const handleCompanyChange = (event) => {
    setCompany(event.target.value);
  };

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleMobileChange = (event) => {
    setMobile(event.target.value);
  };

  const handleAlternativeMobileChange = (event) => {
    setAlternative(event.target.value);
  };

  const handleReferenceNameChange = (event) => {
    setReferenceName(event.target.value);
  };

  const handleReferenceNumberChange = (event) => {
    setReferenceNumber(event.target.value);
  };

  const handleAgreedChange = (event) => {
    setAgreed(event.target.checked);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      company.trim() === '' ||
      alternative.trim() === '' ||
      // address.trim() === '' ||
      mobile.trim() === '' ||
      referenceName.trim() === '' ||
      referenceNumber.trim() === '' ||
      !agreed
    ) {
      alert('Please fill in all fields');
      return;
    }

    // console.log('Address:', address);
    console.log('Selected Option:', selectedOption);
    console.log('Mobile:', mobile);
    console.log('Reference Name:', referenceName);
    console.log('Reference Number:', referenceNumber);
    console.log('Agreed:', agreed);
  };
 

  return (
    <>
    <div className='navb'>   <navbar className='navclass'> 
<nav>rehousing</nav>

</navbar></div>
 
    <div className={`main ${windowLoaded ? 'animate' : ''}`}>


    <form className="my-form" onSubmit={handleSubmit }   >
    <label className="main-label" id='a'>User-info</label>
      <div id='a'>
        <label htmlFor="mobile"  className="label">Mobile Number:</label>
        <input
          type="text"
          id="mobile"
          value={mobile}
          onChange={handleMobileChange}
          className="form-input"
        />
      </div>
      <div id='a'>
        <label htmlFor="company" className="label">Company Name:</label>
        <input
          type="text"
          id="company"
          value={company}
          onChange={handleCompanyChange}
          className="form-input"
        />
      </div>
      <div id='a'>
        <label htmlFor="alternetive-mobile" className="label">Alternative Mobile Number:</label>
        <input
          type="text"
          id="alternetive-mobile"
          value={alternative}
          onChange={handleAlternativeMobileChange}
          className="form-input"
        />
      </div>
      {/* <div>
        <label htmlFor="address">Address:</label>
        <input
          type="text"
          id="address"
          value={address}
          onChange={handleAddressChange}
          className="form-input"
          
          

        />
      </div> */}
      <div id='a'>
        <label htmlFor="option" className="label">Address :</label>
        <select
          id="option"
          value={selectedOption}
          onChange={handleOptionChange}
          className="form-input"
        >
          <option value="Home">Home</option>
          <option value="Office">Office</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <div id='a'>
        <label htmlFor="referenceName" className="label">Reference Name:</label>
        <input
          type="text"
          id="referenceName"
          value={referenceName}
          onChange={handleReferenceNameChange}
          className="form-input"
        />
      </div>
      <div id='a'>
        <label htmlFor="referenceNumber" className="label">Reference Number:</label>
        <input
          type="text"
          id="referenceNumber"
          value={referenceNumber}
          onChange={handleReferenceNumberChange}
          className="form-input"
        />
      </div>
      <div id='a'>
      <input
            type="checkbox"
            checked={agreed}
            onChange={handleAgreedChange}
            className="form-checkbox"
          />
        <label className="label">
          
          I agree to the  <a href='' className='lin'>terms</a>  and <a href='' className='lin'>conditions</a>
        </label>
      </div>
      <button type="submit" className="form-button">Submit</button>
    </form></div></>
  );
}

export default MyForm;
