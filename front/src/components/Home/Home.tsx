import "./Home.css";
import { useEffect } from "react";
import Intro from "./Intro";
import Presentation from "./Presentation";

const Home = () => {
    
    useEffect (()=>{
        window.scrollTo(0,0)
    });

    return (
        <>
            <Intro />
            <Presentation />
        </>
    );
};

export default Home;
