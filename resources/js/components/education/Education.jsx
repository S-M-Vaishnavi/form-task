import React from 'react';
import '../../src/App.css';
import './Education.css';

const Education = () => {
  return (
    <div className="form-style-10">
      <form>
        <div className="section"><span>2</span>Education / Training</div>
        <div className="inner-wrap">
          <label>Please list all colleges/universities attended</label>
          <table>
            <thead>
              <tr>
                <th>College/University</th>
                <th>1.</th>
                <th>2.</th>
                <th>3.</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>City, State</strong></td>
                <td><input type="text" /></td>
                <td><input type="text" /></td>
                <td><input type="text" /></td>
              </tr>
              <tr>
                <td><strong>Dates Attended*</strong></td>
                <td><input type="text" /></td>
                <td><input type="text" /></td>
                <td><input type="text" /></td>

              </tr>
              <tr>
                <td><strong>Degree and Graduation Date*</strong></td>
                <td><input type="text" /></td>
                <td><input type="text" /></td>
                <td><input type="text" /></td>
              </tr>
              <tr>
                <td><strong>Major</strong></td>
                <td><input type="text" /></td>
                <td><input type="text" /></td>
                <td><input type="text" /></td>
              </tr>
              <tr>
                <td><strong>Minor</strong></td>
                <td><input type="text" /></td>
                <td><input type="text" /></td>
                <td><input type="text" /></td>
              </tr>
              <tr>
                <td><strong>Overall GPA</strong></td>
                <td><input type="text" /></td>
                <td><input type="text" /></td>
                <td><input type="text" /></td>
              </tr>
              <tr>
                <td><strong>GPA in Major</strong></td>
                <td><input type="text" /></td>
                <td><input type="text" /></td>
                <td><input type="text" /></td>
              </tr>
              <tr>
                <td><strong>Number of Hours Worked Per Week While Attending College (If Applicable)</strong></td>
                <td><input type="text" /></td>
                <td><input type="text" /></td>
                <td><input type="text" /></td>
              </tr>
            </tbody>
          </table>
          <label>*  For purposes of verifying education
            List courses in major (and all courses related to position applied for), credit hours and final grades received</label>
          <table>
            <thead>
              <tr>
                <th>Course</th>
                <th>School</th>
                <th>Credit Hours</th>
                <th>Grade</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><input type="text" /></td>
                <td><input type="text" /></td>
                <td><input type="text" /></td>
                <td><input type="text" /></td>

              </tr>
              <tr>
                <td><input type="text" /></td>
                <td><input type="text" /></td>
                <td><input type="text" /></td>
                <td><input type="text" /></td>

              </tr>
              <tr>
                <td><input type="text" /></td>
                <td><input type="text" /></td>
                <td><input type="text" /></td>
                <td><input type="text" /></td>
              </tr>
              <tr>
                <td><input type="text" /></td>
                <td><input type="text" /></td>
                <td><input type="text" /></td>
                <td><input type="text" /></td>
              </tr>
              <tr>
                <td><input type="text" /></td>
                <td><input type="text" /></td>
                <td><input type="text" /></td>
                <td><input type="text" /></td>
              </tr>
              <tr>
                <td><input type="text" /></td>
                <td><input type="text" /></td>
                <td><input type="text" /></td>
                <td><input type="text" /></td>
              </tr>
              <tr>
                <td><input type="text" /></td>
                <td><input type="text" /></td>
                <td><input type="text" /></td>
                <td><input type="text" /></td>
              </tr>
            </tbody>
          </table>
          <div className="flex-container">
            <label>List applicable test results:</label>
            <div className="list-applicable-sub-container">
              <div className="list-applicable-items">
                  <label>SAT Verbal</label>
                  <input type="text" />
                  <label>GRE  Verbal</label>
                  <input type="text" />
                  <label>ACT</label>
                  <input type="text" />
              </div>

              <div className="list-applicable-items">
                  <label>SAT Math</label>
                  <input type="text" />
                  <label>GRE Math</label>
                  <input type="text" />
                  <label>LSAT</label>
                  <input type="text" />
              </div>

              <div className="list-applicable-items">
                  <label>SAT Total</label>
                  <input type="text" />
                  <label>GRE Totall</label>
                  <input type="text" />
                  <label>GMAT</label>
                  <input type="text" />
              </div>

            </div>
          </div>
          <label style={{marginTop:"10px"}}>Scholastic honors and scholarships</label>
          <input type="text" />
          <label style={{marginTop:"10px",fontWeight:"bolder"}}>Professional Certification, Professional Organization Affiliations and Special Skills</label>

          <div className="flex-container">
            <label>CPA Status:</label>
            <div className="below-text-container">
              <input type="text" />
              <label>Parts Taken, Passed</label>
            </div>
            <div className="below-text-container">
              <input type="text" />
              <label>State </label>
            </div>
            <div className="below-text-container">
              <input type="text" />
              <label>License number</label>
            </div>

            <label>Active</label>
            <div className="active-container">
            <input type="checkbox" /><label>Yes</label>
            <input type="checkbox" /><label>No</label>
            </div>
            
          </div>
        </div>
      </form>
    </div>
  )
}

export default Education;
