import React from 'react'

const BackgroundData = () => {
  return (
    <div className="form-style-10">
    <form>
        <div className="section"><span>7</span>Background Data:</div>
        <div className="inner-wrap">
            <label>Please Print</label>
            <table>
                <tr>
                    <td><label>First Name:</label></td>
                    <td><input type="text" /></td>
                </tr>
                <tr>
                    <td><label>Last Name :</label></td>
                    <td><input type="text" /></td>
                </tr>
                <tr>
                    <td><label> M.I:</label></td>
                    <td><input type="text" /></td>
                </tr>
                <tr>
                    <td><label>Social Security Number:</label></td>
                    <td><input type="text" /></td>
                </tr>
                <tr>
                    <td><label>Other Names Used:</label></td>
                    <td><input type="text" /></td>
                </tr>
            </table>
            <label>Please list addresses of places you have lived over the previous five years: (attach a separate page, if needed)</label>
            <table>
                <thead>
                    <th>Street</th>
                    <th>City, State, Zip</th>
                    <th>Dates (From-To)</th>
                </thead>
                <tr>
                    <td><input type="text" /></td>
                    <td><input type="text" /></td>
                    <td><input type="text" /></td>
                </tr>
                <tr>
                    <td><input type="text" /></td>
                    <td><input type="text" /></td>
                    <td><input type="text" /></td>
                </tr>
                <tr>
                    <td><input type="text" /></td>
                    <td><input type="text" /></td>
                    <td><input type="text" /></td>
                </tr>
            </table>
        </div>
    </form>
    </div>
  )
}

export default BackgroundData
