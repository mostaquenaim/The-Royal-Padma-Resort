import { useContext } from "react";
import { ThemeContext } from "../../contexts/Theme/ThemeProvider";
import { useRef } from "react";

const Banner = ({fnc}) => {
    const { theme } = useContext(ThemeContext)
   

    return (
        <div
            data-theme={theme}
            className="relative">
            <video className="w-full" autoPlay muted loop>
                <source src="/hotel-banner-video.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-neutral opacity-50"></div>
            <div className="absolute inset-0 flex flex-col justify-end md:justify-center items-center text-center pb-3 md:pb-0">
                <h1 className="text-center text-base-100 font-bold text-lg md:text-2xl lg:text-6xl font-luxurious">
                    THE ROYAL PADMA RESORT
                </h1>
                <p className="mt-2 text-center text-base-100 opacity-80 text-xs md:text-sm lg:text-base">
                    Destinations to discover, journeys to remember
                </p>
            </div>
            {/* Down arrow icon horizontally centered */}
            <div className="absolute left-1/2 bottom-3 text-base-100 hidden md:inline-block cursor-pointer" onClick={fnc}>
                <svg
                    className="animate-bounce"
                    xmlns="http://www.w3.org/2000/svg"
                    id="down-arrow"
                    width="48" // Adjust the width as needed
                    height="48" // Adjust the height as needed
                    fill="#ffffff"
                >
                    <path d="m21.956 16.364-5.992 5.3-5.992-5.3a1.007 1.007 0 0 0-1.422 1.422l6.69 5.918c.2.2.462.296.724.292a.994.994 0 0 0 .724-.29l6.69-5.918a1.007 1.007 0 0 0-1.422-1.424zm1.422-7.172a1.007 1.007 0 0 0-1.422 0l-5.992 5.3-5.992-5.3a1.007 1.007 0 0 0-1.424 1.422l6.69 5.918c.2.2.462.296.724.292a.993.993 0 0 0 .724-.292l6.69-5.918a1.001 1.001 0 0 0 .002-1.422z">
                    </path>
                </svg>
            </div>
        </div>
    );
};

export default Banner;
