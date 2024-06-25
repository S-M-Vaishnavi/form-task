import React from 'react';
import './PreviousExperience.css';
import '../../src/App.css';

const PreviousExperience = () => {
    return (
        <div class="form-style-10">
            <form>
                <div class="section"><span>3</span>Previous Experience (Start with current or most recent employer)</div>
                <div class="inner-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Details</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>From (Month/Year)</strong></td>
                                <td><input type="text" /></td>
                            </tr>
                            <tr>
                                <td><strong>Firm Name</strong></td>
                                <td><input type="text" /></td>
                            </tr>
                            <tr>
                                <td><strong>Phone #</strong></td>
                                <td><input type="text" /></td>
                            </tr>
                            <tr>
                                <td><strong>Starting Salary</strong></td>
                                <td><input type="text" /></td>
                            </tr>
                            <tr>
                                <td><strong>
                                    To (Month/Year)</strong></td>
                                <td><input type="text" /></td>
                            </tr>
                            <tr>
                                <td><strong>Street,City,State,Zip</strong></td>
                                <td><input type="text" /></td>
                            </tr>
                            <tr>
                                <td><strong>Job Title</strong></td>
                                <td><input type="text" /></td>
                            </tr>
                            <tr>
                                <td><strong>Supervisor's Name</strong></td>
                                <td><input type="text" /></td>
                            </tr>
                            <tr>
                                <td><strong>Supervisor's Title</strong></td>
                                <td><input type="text" /></td>
                            </tr>
                        </tbody>
                    </table>
                    <label>Responsibilities:</label><input type="text" />
                    <input type="text" />
                    <input type="text" />
                    <label>Reason For Leaving: </label><input type="text" />
                    <label>May we contact the above employer?</label>
                    <div className="flex-container">
                        <input type="checkbox" /><label>Yes</label>
                        <input type="checkbox" /><label>No</label>
                        <label>if no, why? </label>
                    </div>
                    <input type="text" />
                </div>
            </form>
        </div>
    )
}

export default PreviousExperience
