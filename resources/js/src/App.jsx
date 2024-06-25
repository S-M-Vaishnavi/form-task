import { Component } from "react";
import { createRoot } from "react-dom/client";
import React from "react";
import GeneralInformation from "../components/generalinformation/GeneralInformation";
import Education from "../components/education/Education";
import PreviousExperience from "../components/previousexperience/PreviousExperience";

class App extends Component{
    render(){
        return(
            <div>
                <GeneralInformation/>
                <Education/>
                <PreviousExperience/>
            </div>
        )
    }
}

const root = createRoot(document.getElementById('app'));
root.render(<App/>)
