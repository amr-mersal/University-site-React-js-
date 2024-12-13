import React, { useRef } from 'react'
import './videoPlayer.css'
import college_video from '../../assets/college.mp4'

const VideoPlayer = ({playState,setPlayState}) => {

    const player=useRef(null);
    const closePlayer=(e)=>{
        if(e.target=== player.current){
            setPlayState(false);


        }
    }


  return (
    <div className={`videoplayer ${playState?'':'hide'}`}ref={player} onClick={closePlayer}>
        <video src={college_video} autoPlay muted controls></video>
      
    </div>
  )
}

export default VideoPlayer
