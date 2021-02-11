import React, {useState, useEffect} from 'react';
import API from '../utils/API';
import exifr from 'exifr'; //newer model which support .heic

const SplashPage = () => {
    const [file, setFile] = useState();
    const [lat, setLat] = useState();
    const [long, setLong] = useState();

    useEffect( () => {
        API.getAllImageFiles()
            .then(data => {
                console.log(data)
            })
            .catch(console.err);
    }, [])

    function metaDataExportObject(LatDirect, LongDirect, Latitude, Longitude) {
        this.LatDirect = LatDirect;
        this.LongDirect = LongDirect;
        this.Latitude = Latitude;
        this.Longitude = Longitude;
    }

    const getExifr = async () => {
        let metaDataExport;

        let output = await exifr.parse(file)
        if(!output) {
            metaDataExport = new metaDataExportObject("N/A","N/A",0,0)
        } else {
            metaDataExport = (!output.GPSLatitudeRef) ? new metaDataExportObject("N/A","N/A",0,0) :
                new metaDataExportObject(
                    output.GPSLatitudeRef,
                    output.GPSLongitudeRef,
                    output.latitude,
                    output.longitude
                )
        }
        return (metaDataExport);
    }

    const send = async event => {
        const gpsMetaData = await getExifr();
        const data = new FormData();
        data.append('file', file);
        data.append('fileMetaData',  gpsMetaData.LatDirect);
        data.append('fileMetaData',  gpsMetaData.LongDirect);
        data.append('fileMetaData',  gpsMetaData.Latitude);
        data.append('fileMetaData',  gpsMetaData.Longitude);

        let postOptions = {
            method: 'POST',
            body: data
        }

        API.postOneImageFile(postOptions)
            .then(res => {
                console.log(res.json());
                alert('Image Uploaded!');
            })
            .catch(console.err);
    }

    return (
        <div style={{width: "550px"}}>
            <div>
                <img style={{float: "left"}} src="https://via.placeholder.com/200"></img>
                <img style={{float: "right"}} src="https://via.placeholder.com/200"></img>
            </div>
            <div>
                <img style={{float: "left"}} src="https://via.placeholder.com/200"></img>
                <img style={{float: "right"}} src="https://via.placeholder.com/200"></img>
            </div>

            <input type='file' onChange = { event => setFile(event.target.files[0])}/>
            <button onClick={send}>Upload</button>
        </div>
    )
}

export default SplashPage;

