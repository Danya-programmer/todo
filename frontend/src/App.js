import './App.css';
import React from 'react';
import {Server} from "./server";

import { useEffect } from "react";
import Aos from 'aos';
import 'aos/dist/aos.css';
import SmoothScroll from "./components/SmoothScroll/SmoothScroll";



export const App = () => {
    const data = Server().ControllerServer.todo
    useEffect(() => {
        Aos.init({duration: 2000})
    })
    return (

            <SmoothScroll>
            {data.map(item =>
                <h1 data-aos='fade-up'
                    style={{margin:'50px', width:'1400px', height:'800px', background: "grey", color:'white', textAlign:'center'}}>
                    {item.title}
                    <div>{item.body}</div>
                </h1>)}
            </SmoothScroll>


    )
}