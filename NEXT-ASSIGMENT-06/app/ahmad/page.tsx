'use client';
import React, { useState } from 'react';
import axios from 'axios';
// import { log } from 'console';

export default function Page() {
    const [image, setImage] = useState('');

    const uploadImage = async (e) => {
        const files = e.target.files[0]
        setImage(files)
console.log(files);

        const data = new FormData();
        data.append('file', files);
        data.append('upload_preset', 'adcmlgck')
        data.append('cloud_name','dlpygcbme')
        try {
            const res = await axios.post(
                'https://api.cloudinary.com/v1_1/dlpygcbme/image/upload', // Correctly using the string
                data
            );
           console.log(res.data.url);
           
        } catch (err) {
            console.error("Error uploading image:", err);
        }
    };

    return (
        <div>
            <h1>Upload Image to Cloudinary</h1>
            <input type="file" onChange={uploadImage} />
            {image && (
                <div>
                    <h2>Uploaded Image</h2>
                    <img src={image} alt="Uploaded" style={{ width: '300px' }} />
                </div>
            )}
        </div>
    );
}