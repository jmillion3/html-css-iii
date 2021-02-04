import React from 'react';
import voltron from '../Media/voltron.png';
import redLion from '../Media/red_lion.png';
import greenLion from '../Media/green_lion.png';
import blueLion from '../Media/blue_lion.png';
import blackLion from '../Media/black_lion.png';
import yellowLion from '../Media/yellow_lion.png';

const Main = () => {
    return (
        <main>
            <img alt="voltron" id="voltron" src={voltron}/>
            <div className="lion-container">
                <div className="lion black" >
                    <img alt="lion" src={blackLion}/>
                </div>
                <div className="lion red">
                    <img alt="lion" src={redLion}/>
                </div>
                <div className="lion blue">
                    <img alt="lion" src={blueLion}/>
                </div>
                <div className="lion yellow">
                    <img alt="lion" src={yellowLion}/>
                </div>
                <div className="lion green">
                    <img alt="lion" src={greenLion}/>
                </div>
            </div>
        </main>
    )}

export default Main;