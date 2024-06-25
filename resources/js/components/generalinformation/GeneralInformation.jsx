import React from 'react';
import './GeneralInformation.css';
import '../../src/App.css';

const GeneralInformation = () => {
  return (
    <div class="form-style-10">
<h1>Form-task</h1>
<form>
    <div class="section"><span>1</span>General Information</div>
    <div class="inner-wrap">
        <label>Full Name <input type="text" name="field1" /></label>
        <label>Current Phone Number <input type="text" name="field1" /></label>
        <label>Current Fax Number  <input type="text" name="field1" /></label>
        <label>Current Email <input type="email" name="field1" /></label>
        <label>Current Address <textarea name="field2"></textarea></label>
        <label>Mobile Phone Number <input type="text" name="field1" /></label>
        <label>Position Desired <input type="text" name="field1" /></label>
        <label>Present Salary--$<input type="text" name="field1" /></label>
        <label>Salary Desired--$<input type="text" name="field1" /></label>
        <label>Earliest Start Date<input type="date" name="field1" /></label>

        <div className="checkbox">
        <label>Part Time<input type="checkbox" name="field1" /></label>
        <label>Full Time<input type="checkbox" name="field1" /></label>
        </div>
       
        <div className="ever-applied-container">
        <label>Have you ever applied to SB & Company,LLC before?<input type="text" name="field1" /></label>
        <label>If yes,when?<input type="text" name="field1" /></label>
        </div>
        
        <label>How did you find about SB & Company,LLC <input type="text" name="field1" /></label>

        <label>Are you legally permitted to work in this country</label>
        <div className="checkbox">
        <label>Yes<input type="checkbox" name="field1" /></label>
        <label>No<input type="checkbox" name="field1" /></label>
        </div>

        <label>Will you now or in the future require sponsorship for employment visa satus(e.g.,H-1B visa status)</label>
        <div className="checkbox">
        <label>Yes<input type="checkbox" name="field1" /></label>
        <label>No<input type="checkbox" name="field1" /></label>
        </div>

        <label>Have you ever been convicted of a crime other than a minor traffic violation?</label>
        <div className="checkbox">
        <label>Yes<input type="checkbox" name="field1" /></label>
        <label>No<input type="checkbox" name="field1" /></label>
        </div>
        <label>If yes, give details on a separate page and attach to the application.</label>

        <label style={{fontStyle:"italic"}}>Note: a criminal conviction is not an absolute bar to employment, but will be considered in relation to specific job requirements</label>
    </div>

    <div class="button-section">
     <input type="submit" name="Sign Up" />
    </div>
</form>
</div>
  )
}

export default GeneralInformation
