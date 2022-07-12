import { useEffect } from "react";
import Profile from "./Profile";
import Skills from "./Skills";

const About = () => {

    useEffect (()=>{
        window.scrollTo(0,0)
    });
    
    return (
        <>
            <Profile/>
            <Skills/>
        </>
    )

}

export default About;