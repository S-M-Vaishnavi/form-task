import { Component } from "react";
import { createRoot } from "react-dom/client";
import React from "react";
import GeneralInformation from "../components/generalinformation/GeneralInformation";
import Education from "../components/education/Education";
import PreviousExperience from "../components/previousexperience/PreviousExperience";
import PreviousExperienceContd from "../components/previousexperiencecontd/PreviousExperienceContd";
import AdditionalQualification from "../components/additionalqulaification/AdditionalQualification";
import References from "../components/referneces/References";
import BackgroundData from "../components/backgrounddata/BackgroundData";
import ApplicantsCertification from "../components/applicantscertification/ApplicantsCertification";

class App extends Component{
    render(){
        return(
            <div>
                <GeneralInformation/>
                <Education/>
                <PreviousExperience/>
                <PreviousExperienceContd/>
                <AdditionalQualification/>
                <References/>
                <BackgroundData/>
                <ApplicantsCertification/>
            </div>
        )
    }
}

const root = createRoot(document.getElementById('app'));
root.render(<App/>)
