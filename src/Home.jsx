import React from "react";
import { NavLink } from "react-router-dom";
import web from '../src/images/Home.png';
import Common from "./Common";

const Home = () => {
    return (
        <>
            <Common 
                name='Grow your business with '
                imgsrc={web}
                visit='/about'
                btname='Get Started'
                />
        </>
    )
}

export default Home;