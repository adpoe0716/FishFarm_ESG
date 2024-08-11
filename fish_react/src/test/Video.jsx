import React, { useState, useEffect, useRef } from 'react';
import video1 from '../video/監視器1.mp4';
import video2 from '../video/監視器2.mp4';
import video3 from '../video/監視器3.mp4';
import video4 from '../video/監視器4.mp4';
import video5 from '../video/監視器5.mp4';
import video6 from '../video/fly.mp4';

export default function Video() {
    const videos = [video1, video2, video3, video4, video5, video6];
    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
    const videoRef = useRef(null);

    useEffect(() => {
        // 當影片來源改變時，自動播放新影片
        if (videoRef.current) {
            videoRef.current.load();  // 加載新影片
            videoRef.current.play();  // 自動播放
        }
    }, [currentVideoIndex]);

    const changeVideo = (index) => {
        setCurrentVideoIndex(index);
    };

    return (
        <div className="video-container">
            <video ref={videoRef} loop autoPlay muted>
                <source src={videos[currentVideoIndex]} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="video-controls">
                {videos.map((_, index) => (
                    <button key={index} onClick={() => changeVideo(index)}>
                        Video {index + 1}
                    </button>
                ))}
            </div>
        </div>
    );
}
