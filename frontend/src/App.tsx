import React, { useState } from "react";
import Navbar from "./components/Navbar";
// import VideoBackground from "./assets/Home .mp4";
import GameList from "./components/GameList";
import Menu from "./components/Menu/Menu";
import Discount from "./components/Discount";
import Team from "./components/Team";
import Sponsors from "./components/Sponsors";
import "./App.css";
import Footer from "./components/Footer";

interface Game {
  id: number;
  title: string;
  // Add other properties of the Game object if necessary
}

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [] = useState<Game[]>([]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="App">
      <Navbar onMenuToggle={toggleMenu} />
      <div className="flex">
        <Menu isOpen={isMenuOpen} onClose={toggleMenu} />
        <div className="flex-1">
          <section className="video-section">
            {/* <video
              src={VideoBackground}
              autoPlay
              loop
              muted
              className="background-video"
            /> */}
            <div className="content-overlay text-white">
              <h1 className="text-3xl text-center py-9">LATEST RELEASES</h1>
              <div className="game-list-section px-4">
                
                <GameList filteredGames={[]} />
              </div>
            </div>
          </section>
          <section className="discount-section">
            <Discount />
          </section>
          <div className="content-overlay text-white">
            <h1 className="text-3xl text-center py-9">MEET THE OMEGA TEAM</h1>
            <div className="team-section px-8">
              <Team />
            </div>
          </div>
          <div>
          <h1 className=" text-white text-3xl text-center py-9">PROUD SPONSORS</h1>
            <Sponsors />
          </div>
          <div>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
