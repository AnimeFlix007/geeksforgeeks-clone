import React, { useState } from "react";
import {
  AiOutlineFullscreen,
  AiOutlineFullscreenExit,
  AiOutlineSetting,
} from "react-icons/ai";

type Props = {};

export default function PreferenceNavbar({}: Props) {
  const [isFullScreen, setIsFullScreen] = useState(false);

  const handleFullScreen = () => {
    if (isFullScreen) {
      document.exitFullscreen();
    } else {
      document.documentElement.requestFullscreen();
    }
    setIsFullScreen(!isFullScreen);
  };
  return (
    <div className="flex items-center justify-between  bg-slate-50 h-11 w-full ">
      <div className="flex items-center">
        <button className="flex cursor-pointer items-center rounded focus:outline-none bg-slate-100 text-dark-label-2 hover:bg-slate-200  px-2 py-1.5 font-medium">
          <div className="flex items-center px-1">
            <div className="text-xs text-label-2 dark:text-dark-label-2">
              JavaScript
            </div>
          </div>
        </button>
      </div>

      <div className="flex items-center m-2">
        <button className="preferenceBtn group">
          <div className="h-4 w-4 text-dark-gray-6 font-bold text-lg">
            <AiOutlineSetting />
          </div>
          <div className="preferenceBtn-tooltip">Settings</div>
        </button>

        <button className="preferenceBtn group" onClick={handleFullScreen}>
          <div className="h-4 w-4 text-dark-gray-6 font-bold text-lg">
            {!isFullScreen ? (
              <AiOutlineFullscreen />
            ) : (
              <AiOutlineFullscreenExit />
            )}
          </div>
          <div className="preferenceBtn-tooltip">Full Screen</div>
        </button>
      </div>
    </div>
  );
}
