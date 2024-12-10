import React from "react";
import { NavLink } from "react-router-dom";
import web from '../src/images/About.png'
import Common from "./Common";

const About = () => {
    return (
        <>
            <Common 
             name='Welcome to About Page of'
                imgsrc={web}
                visit='/service'
                btname='Contact Now'
            />
        </>
    )
}

export default About;