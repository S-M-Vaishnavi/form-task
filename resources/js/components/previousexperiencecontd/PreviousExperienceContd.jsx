import React from 'react';
import './PreviousExperienceContd.css'
import '../../src/App.css';

const PreviousExperienceContd = () => {
    return (
        <div className="form-style-10">
            <form>
                <div className="section"><span>4</span>Previous Experience, Contd.</div>
                <div className="inner-wrap">
                <table>
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
                                    Last Salary</strong></td>
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

export default PreviousExperienceContd
