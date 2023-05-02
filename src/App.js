import { useState } from "react";
import Gameplay from "./Screens/Gameplay";
import MenuScreen from "./Screens/MenuScreen";
import EndGame from "./Screens/EndGame";
import { motion, AnimatePresence } from "framer-motion";
import Instructions from "./Screens/Instructions";

function App() {
  const [openGame, setOpenGame] = useState(false);
  const [openEndGame, setOpenEndGame] = useState(false);
  const [openInstructions, setOpenInstructions] = useState(false);
  const [winner, setWinner] = useState(false);
  const [gameMode, setGameMode] = useState('off');

  const openGameScreen = (val) => {
    setOpenGame(val);
  };

  const openEndGameScreen = (val) => {
    setOpenEndGame(val);
  };

  const openInstructionsScreen = (val) => {
    setOpenInstructions(val);
  };

  return (
    <>
      <main>
        {!openGame && !openEndGame && !openInstructions &&
          < MenuScreen openGameScreen={openGameScreen} setGameMode={setGameMode} gameMode={gameMode} openInstructionsScreen={openInstructionsScreen} />
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
        {openInstructions && !openGame && !openEndGame &&
          <Instructions openInstructionsScreen={openInstructionsScreen} />
        }
      </main>
    </>
  );
}

export default App;
