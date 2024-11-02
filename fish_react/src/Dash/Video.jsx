import React, { useState, useEffect, useRef } from 'react';
import './Video.css';

export default function Video({ num }) {
    // console.log(num);
    const videos = ['/video/v1.mp4', '/video/v2.mp4', '/video/v3.mp4', '/video/v4.mp4', '/video/v5.mp4','/video/v6.mp4'];
    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
    const videoRef = useRef(null);

    useEffect(() => {
        if (num >= 0 && num < videos.length) {
            setCurrentVideoIndex(num-1); 
        }
    }, [num]);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.load(); 
        }
    }, [currentVideoIndex]);

    const handleVideoLoad = () => {
        if (videoRef.current) {
            videoRef.current.play();
        }
    };

    return (
        <div className="video-container">
            <video ref={videoRef} loop muted onLoadedData={handleVideoLoad}>
                <source src={videos[currentVideoIndex]} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
}
