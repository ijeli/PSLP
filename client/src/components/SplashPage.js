import React, {useState, useEffect} from 'react';
import API from '../utils/API';
import axios from 'axios';
import exifr from 'exifr'; //newer model which support .heic

const SplashPage = () => {

    return (
        <div style={{width: "550px"}}>
            <img style={{float: "left"}} src="https://via.placeholder.com/200"></img>
            <img style={{float: "left"}} src="https://via.placeholder.com/200"></img>

            <img style={{float: "right"}} src="https://via.placeholder.com/200"></img>
            <img style={{float: "right"}} src="https://via.placeholder.com/200"></img>
        </div>
    )
}

export default SplashPage;

