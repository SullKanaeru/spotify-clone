import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { PlayerContext } from "../context/playerContext";

const Player = () => {
  const {
    seekBar,
    seekBg,
    playStatus,
    play,
    pause,
    track,
    time,
    previous,
    next,
    seekSong
  } = useContext(PlayerContext);

  return (
    <div className="h-[10%] min-h-[80px] bg-black text-white px-4 flex justify-between items-center">
      <div className="hidden lg:flex items-center gap-4 w-[25%]">
        <img
          className="w-12 h-12 object-cover rounded"
          src={track.image}
          alt="Song"
        />
        <div>
          <p className="font-semibold text-sm">{track.name}</p>
          <p className="text-xs text-gray-400">{track.desc.slice(0, 12)}</p>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center w-full lg:w-[50%]">
        <div className="flex gap-5 items-center justify-center mb-1">
          <img
            className="w-4 cursor-pointer"
            src={assets.shuffle_icon}
            alt="Shuffle"
          />
          <img
            onClick={previous}
            className="w-4 cursor-pointer"
            src={assets.prev_icon}
            alt="Previous"
          />
          {playStatus ? (
            <img
              onClick={pause}
              className="w-6 cursor-pointer"
              src={assets.pause_icon}
              alt="Play"
            />
          ) : (
            <img
              onClick={play}
              className="w-6 cursor-pointer"
              src={assets.play_icon}
              alt="Play"
            />
          )}
          <img
            onClick={next}
            className="w-4 cursor-pointer"
            src={assets.next_icon}
            alt="Next"
          />
          <img
            className="w-4 cursor-pointer"
            src={assets.loop_icon}
            alt="Loop"
          />
        </div>

        <div className="flex items-center gap-3 w-full px-4">
          <span className="text-xs text-gray-300">
            {time.currentTime.minute}:{time.currentTime.second}
          </span>
          <div
            ref={seekBg}
            onClick={seekSong}
            className="flex-1 bg-gray-500 h-1 rounded-full relative cursor-pointer"
          >
            <hr
              ref={seekBar}
              className="absolute top-0 left-0 h-1 w-[0%] bg-green-600 rounded-full"
            />
          </div>
          <span className="text-xs text-gray-300">
            {time.totalTime.minute}:{time.totalTime.second}
          </span>
        </div>
      </div>

      <div className="hidden lg:flex items-center gap-3 justify-end w-[25%] opacity-75">
        <img src={assets.plays_icon} alt="Plays" className="w-5" />
        <img src={assets.mic_icon} alt="Mic" className="w-5" />
        <img src={assets.queue_icon} alt="Queue" className="w-5" />
        <img src={assets.speaker_icon} alt="Speaker" className="w-5" />
        <img src={assets.volume_icon} alt="Volume" className="w-5" />
        <div className="w-20 bg-gray-400 h-1 rounded relative">
          <div className="absolute top-0 left-0 h-1 w-1/2 bg-white rounded" />
        </div>
        <img src={assets.mini_player_icon} alt="Mini" className="w-5" />
        <img src={assets.zoom_icon} alt="Zoom" className="w-5" />
      </div>
    </div>
  );
};

export default Player;
