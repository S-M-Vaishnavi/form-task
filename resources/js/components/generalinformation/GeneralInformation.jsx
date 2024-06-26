import React, { useState } from 'react';
import './GeneralInformation.css';
import '../../src/App.css';

const GeneralInformation = () => {
  const [form, setForm] = useState({
    fullName: '',
    currentPhoneNumber: '',
    currentFaxNumber: '',
    email: '',
    address: '',
    mobilePhoneNumber: '',
    positionDesired: '',
    presentSalary: '',
    salaryDesired: '',
    startDate: '',
    partTime: '',
    fullTime: '',
    everApplied: '',
    when: '',
    findWhere: '',
    legallyPermitted: '',
    status: '',
    crime: ''
  });
  const [errors, setErrors] = useState(
    {
      fullName: '',
      currentPhoneNumber: '',
      currentFaxNumber: '',
      email: '',
      address: '',
      mobilePhoneNumber: '',
      positionDesired: '',
      presentSalary: '',
      salaryDesired: '',
      startDate: '',
      partTime: '',
      fullTime: '',
      everApplied: '',
      when: '',
      findWhere: '',
      legallyPermitted: '',
      status: '',
      crime: ''
    }
  );
  console.log(form.curre)

  const validateInput = (name, value) => {
    let error = '';

    if (name === 'fullName' && value.length < 5) {
      error = 'Full name must be at least 5 characters long';
    }else if(name === ' currentPhoneNumber' && value.length<10){
      error = "Enter Valid Phone Number";
    }

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: error
    }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setForm((prevForm) => ({
      ...prevForm,
      [name]: value
    }));

    validateInput(name, value);
  };


  return (
    <div className="form-style-10">
      <h1>Form-task</h1>
      <form>
        <div className="section"><span>1</span>General Information</div>
        <div className="inner-wrap">
          <label>Full Name <input type="text" name="fullName" value={form.fullName} onChange={handleInputChange} /></label>
          {errors.fullName && <p style={{ color: 'red' }}>{errors.fullName}</p>}

          <label>Current Phone Number <input type="text" name="currentPhoneNumber"  value={form.currentPhoneNumber} onChange={handleInputChange}/></label>
          {errors.currentPhoneNumber && <p style={{ color: 'red' }}>{errors.currentPhoneNumber}</p>}


          <label>Current Fax Number  <input type="text" name="currentFaxNumber" value={form.currentFaxNumber} onChange={handleInputChange}/></label>
          {errors.currentFaxNumber && <p style={{ color: 'red' }}>{errors.fullName}</p>}


          <label>Current Email <input type="email" name="email" /></label>


          <label>Current Address <textarea name="address"></textarea></label>


          <label>Mobile Phone Number <input type="text" name="mobilePhoneNumber" /></label>


          <label>Position Desired <input type="text" name="positionDesired" /></label>


          <label>Present Salary--$<input type="text" name="presentSalary" /></label>


          <label>Salary Desired--$<input type="text" name="salaryDesired" /></label>


          <label>Earliest Start Date<input type="date" name="startDate" /></label>

          <div className="checkbox">
            <label>Part Time<input type="checkbox" name="partTime" /></label>
            <label>Full Time<input type="checkbox" name="fullTime" /></label>
          </div>

          <div className="ever-applied-container">
            <label>Have you ever applied to SB & Company,LLC before?<input type="text" name="everApplied" /></label>
            <label>If yes,when?<input type="text" name="when" /></label>
          </div>

          <label>How did you find about SB & Company,LLC <input type="text" name="findWhere" /></label>

          <label>Are you legally permitted to work in this country</label>
          <div className="checkbox">
            <label>Yes<input type="checkbox" name="legallyPermitted" /></label>
            <label>No<input type="checkbox" name="legallyPermitted" /></label>
          </div>

          <label>Will you now or in the future require sponsorship for employment visa status(e.g.,H-1B visa status)</label>
          <div className="checkbox">
            <label>Yes<input type="checkbox" name="status" /></label>
            <label>No<input type="checkbox" name="status" /></label>
          </div>

          <label>Have you ever been convicted of a crime other than a minor traffic violation?</label>
          <div className="checkbox">
            <label>Yes<input type="checkbox" name="crime" /></label>
            <label>No<input type="checkbox" name="crime" /></label>
          </div>
          <label>If yes, give details on a separate page and attach to the application.</label>

          <label style={{ fontStyle: "italic" }}>Note: a criminal conviction is not an absolute bar to employment, but will be considered in relation to specific job requirements</label>
        </div>

        <div className="button-section">
          <input type="submit" name="Sign Up" />
        </div>
      </form>
    </div>
  )
}

export default GeneralInformation
