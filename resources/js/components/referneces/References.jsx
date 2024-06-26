import React from 'react'

const References = () => {
  return (
    <div className="form-style-10">
    <form>
        <div className="section"><span>6</span>References:</div>
        <div className="inner-wrap">
            <label>Please provide the names of three professional references, not related to you, who can best provide pertinent information as to your 
                character and capabilities for the position you are applying or being considered for SBC.</label>
            <table>
                <tr>
                    <td><label>Name/Title:</label></td>
                    <td><input type="text" /></td>
                </tr>
                <tr>
                    <td><label>Organization:</label></td>
                    <td><input type="text" /></td>
                </tr>
                <tr>
                    <td><label>Relationship:</label></td>
                    <td><input type="text" /></td>
                </tr>
                <tr>
                    <td><label>Telephone number:</label></td>
                    <td><input type="text" /></td>
                </tr>
            </table>
        </div>
    </form>
    </div>
  )
}

export default References
