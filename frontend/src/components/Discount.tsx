import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FaXbox, FaWindows, FaApple, FaLinux, FaStar, FaStarHalfAlt } from "react-icons/fa";
import { SiPlaystation5, SiPlaystation4 } from "react-icons/si";
import { BsNintendoSwitch, BsAndroid2 } from "react-icons/bs";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";

// const API_KEY = process.env.REACT_APP_RAWG_API_KEY;

interface Platform {
  platform: {
    id: number;
    name: string;
  };
}

interface Screenshot {
  image: string;
}

interface Game {
  id: number;
  name: string;
  platforms: Platform[];
  rating: number;
  short_screenshots: Screenshot[];
}

const getPlatformIcon = (platformName: string) => {
  switch (platformName.toLowerCase()) {
    case "pc":
      return <FaWindows size={24} />;
    case "playstation 5":
      return <SiPlaystation5 size={24} />;
    case "playstation 4":
      return <SiPlaystation4 size={24} />;
    case "xbox series s/x":
      return <FaXbox size={24} />;
    case "nintendo switch":
      return <BsNintendoSwitch size={24} />;
    case "macos":
      return <FaApple size={24} />;
    case "android":
      return <BsAndroid2 size={24} />;
    case "linux":
      return <FaLinux size={24} />;
    default:
      return null;
  }
};

const Discount: React.FC = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [hoveredGame, setHoveredGame] = useState<boolean | null>(null);

  const renderRatingStars = (rating: number) => {
    const roundedRating = Math.round(rating * 10) / 10;
    const stars = [];
    const fullStars = Math.floor(roundedRating);
    const halfStar = roundedRating - fullStars > 0 ? 1 : 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={i} className="text-yellow-500" />);
    }
    if (halfStar === 1) {
      stars.push(<FaStarHalfAlt key={fullStars} className="text-yellow-500" />);
    }

    return (
      <div className="flex">
        {stars.map((star, index) => (
          <div key={index} className="flex items-center">
            {star}
          </div>
        ))}
      </div>
    );
  };

  const calculateDiscount = (rating: number) => {
    const maxDiscount = 40;
    const minDiscount = 15;
    const percentage = (rating / 5) * (maxDiscount - minDiscount) + minDiscount;
    return Math.round(percentage);
  };

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await fetch(
          // `https://api.rawg.io/api/games?key=${API_KEY}&dates=2016-01-01,2022-12-31&ordering=-added&page_size=40&genres=sports,action,arcade,racing`
          // 6e2c3d10b67342d8a5dac993f10b5393
          `https://api.rawg.io/api/games?key=6e2c3d10b67342d8a5dac993f10b5393&dates=2016-01-01,2022-12-31&ordering=-added&page_size=40&genres=sports,action,arcade,racing`

        );
        if (!response.ok) {
          throw new Error("Network response was not ok.");
        }
        const data = await response.json();
        setGames(data.results);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchGames();
  }, []);

  const sliderRef = useRef<Slider>(null);

  const handleSlide = (direction: "prev" | "next") => {
    if (sliderRef.current) {
      if (direction === "prev") {
        sliderRef.current.slickPrev();
      } else if (direction === "next") {
        sliderRef.current.slickNext();
      }
    }
  };

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    swipeToSlide: false,
  };

  return (
    <div className="overflow-x-auto ">
      <div className="flex gap-4 p-4">
        {games.map((game) => (
          <div
            key={game.id}
            className="bg-black p-4 rounded-lg shadow-md text-center flex-shrink-0 border border-gray-300"
            style={{ maxWidth: "500px" }}
          >
            <div
              className="relative overflow-hidden h-52 rounded-sm max-h-70"
              onMouseEnter={() => setHoveredGame(true)}
              onMouseLeave={() => setHoveredGame(false)}
            >
              <Slider {...sliderSettings} ref={sliderRef}>
                {game.short_screenshots.map((screenshot, index) => (
                  <img
                    key={index}
                    src={screenshot.image}
                    alt={`Screenshot ${index + 1}`}
                    className="w-full h-full object-cover object-center mb-4"
                  />
                ))}
              </Slider>
              {hoveredGame && (
                <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-between">
                  <button
                    onClick={() => handleSlide("prev")}
                    className=" text-white py-2 px-4 "
                  >
                    <IoIosArrowDropleft size={30} />
                  </button>
                  <button
                    onClick={() => handleSlide("next")}
                    className=" text-white py-2 px-4 "
                  >
                    <IoIosArrowDropright size={30} />
                  </button>
                </div>
              )}
            </div>

            <div className="text-center text-white">
              <h3 className="text-lg font-semibold mb-2 uppercase relative top-4">
                {game.name}
              </h3>
              <div className="p-4">
                <div className="flex items-center justify-center mb-2 gap-3">
                  {game.platforms.map((platform) => {
                    const platformIcon = getPlatformIcon(platform.platform.name);
                    if (platformIcon) {
                      return (
                        <span
                          key={platform.platform.id}
                          className="flex mb-2 h-4 w-6 justify-center items-center"
                        >
                          {platformIcon}
                        </span>
                      );
                    }
                  })}
                </div>
                <p className="flex h-4 w-50 justify-center">
                  {renderRatingStars(game.rating)}
                </p>
              </div>
              <p className="text-green-600 mb-2">
                Discount: {calculateDiscount(game.rating)}%
              </p>
            </div>

            <div className="flex items-center justify-center">
              <Link
                to="/login"
                className="bg-teal-400 text-white py-2 px-6 rounded-md mr-4 hover:bg-teal-500/90 transition duration-300"
              >
                PLAY
              </Link>
              <Link
                to="/signup"
                className="bg-teal-400 text-white py-2 px-6 rounded-md hover:bg-teal-500/90 transition duration-300"
              >
                BUY NOW
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Discount;
