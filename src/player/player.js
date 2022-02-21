import './player.css';
import icon_play from "../assets/play_arrow_black_24dp.svg"
import icon_play_next from "../assets/skip_next_black_24dp.svg"
import icon_play_previous from "../assets/skip_previous_black_24dp.svg"
import mp3_sample from ".././assets/file_example_MP3_700KB.mp3"
import { useState } from 'react';
import { useEffect } from 'react';

const Player = () => {
    const [time, setTime] = useState(0);
    const [timeLeft, setTimeLeft] = useState(100);
    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setTime(time + 1);
    //         console.log("time :" + time);
    //     }, 1000);
    //     return () => clearInterval(interval);
    //   }, []);
    return <div className="player">
        <div className="controler">
            <button>
                <img src={icon_play_previous}  alt="icon_play_previous"></img>
            </button>
            <button>
                <img src={icon_play}  alt="icon_play"></img>
                {/* <source src={mp3_sample} type="audio/mpeg"/> */}
            </button>
            <button>
                <img src={icon_play_next}  alt="icon_play_next"></img>
            </button>
        </div>
        <div className='timeLineDiv'>
            {/* {timeLeft} */}
        <div className='timeLine'>
                <div className='timePassed' style={{width : `${time}%`}}></div>
                <button className='cursor'></button>
                <div className='timeToCome' style={{width : `${100-time}%`}}></div>
        </div>
        </div>
    </div>
}

export default Player