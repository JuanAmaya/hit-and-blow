import { useState } from "react";
import Gameplay from "./Screens/Gameplay";
import MenuScreen from "./Screens/MenuScreen";
import EndGame from "./Screens/EndGame";
import { motion, AnimatePresence } from "framer-motion";

function App() {
  const [openGame, setOpenGame] = useState(false);
  const [openEndGame, setOpenEndGame] = useState(false);
  const [winner, setWinner] = useState(false);
  const [gameMode, setGameMode] = useState('off');

  const openGameScreen = (val) => {
    setOpenGame(val);
  };

  const openEndGameScreen = (val) => {
    setOpenEndGame(val);
  };

  return (
    <>
      <main>
        {!openGame && !openEndGame &&
          <MenuScreen openGameScreen={openGameScreen} setGameMode={setGameMode} gameMode={gameMode} />
        }
        <AnimatePresence>
          {openGame && !openEndGame &&
            <motion.div exit={{ opacity: 0 }} transition={{ delay: .2 }}>
              <Gameplay openGameScreen={openGameScreen} openEndGameScreen={openEndGameScreen} userWon={setWinner} gameMode={gameMode} />
            </motion.div>
          }
        </AnimatePresence>
        {!openGame && openEndGame &&
          <EndGame openGameScreen={openGameScreen} openEndGameScreen={openEndGameScreen} userWon={winner} />
        }
      </main>
    </>
  );
}

export default App;
