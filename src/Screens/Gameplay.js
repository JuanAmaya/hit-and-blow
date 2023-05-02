import { useEffect, useState } from "react";
import ColorSelector from "../Components/ColorSelector";
import AnswerBar from "../Components/AnswerBar";
import HABSquare from "../Components/MainBar/HABSquare";
import MistakeBar from "../Components/MainBar/MistakeBar";
import { AnimatePresence, motion } from "framer-motion";

let n = 8;

export default function Gameplay({ openGameScreen, openEndGameScreen, userWon, gameMode }) {
    const [answer, setAnswer] = useState([]);
    const [userTry, setUsertry] = useState([]);
    const [currentTry, setCurrentTry] = useState(0);
    const [mistakes, setMistakes] = useState([]);
    const [option1, setOption1] = useState(false);
    const [option2, setOption2] = useState(false);
    const [option3, setOption3] = useState(false);
    const [option4, setOption4] = useState(false);
    const [tryHits, setTryHits] = useState([]);
    const [tryBlows, setTryBlows] = useState([]);
    const [selectedPos, setSelectedPos] = useState(0);
    const [showResults, setShowResults] = useState(false);
    const [countRes, setCountRes] = useState(0);
    const [showAnswer, setShowAnswer] = useState(false);

    const changeColorOpt = (selectPos, colorVal) => {
        const updatedTry = userTry.map((e, i) => {
            if (i === selectPos) {
                return colorVal;
            } else {
                return e;
            }
        });
        setUsertry(updatedTry);
    };

    const selectedColors = {
        selColor0: function () {
            if (userTry.length < 4 && !option1 && !option2 && !option3 && !option4) {
                setUsertry((prev) => [...prev, 0]);
            } else if (option1) {
                changeColorOpt(0, 0);
                setOption1(false);
            } else if (option2) {
                changeColorOpt(1, 0);
                setOption2(false);
            } else if (option3) {
                changeColorOpt(2, 0);
                setOption3(false);
            } else if (option4) {
                changeColorOpt(3, 0);
                setOption4(false);
            }
            setSelectedPos(0);
        },
        selColor1: function () {
            if (userTry.length < 4 && !option1 && !option2 && !option3 && !option4) {
                setUsertry((prev) => [...prev, 1]);
            } else if (option1) {
                changeColorOpt(0, 1);
                setOption1(false);
            } else if (option2) {
                changeColorOpt(1, 1);
                setOption2(false);
            } else if (option3) {
                changeColorOpt(2, 1);
                setOption3(false);
            } else if (option4) {
                changeColorOpt(3, 1);
                setOption4(false);
            }
            setSelectedPos(0);
        },
        selColor2: function () {
            if (userTry.length < 4 && !option1 && !option2 && !option3 && !option4) {
                setUsertry((prev) => [...prev, 2]);
            } else if (option1) {
                changeColorOpt(0, 2);
                setOption1(false);
            } else if (option2) {
                changeColorOpt(1, 2);
                setOption2(false);
            } else if (option3) {
                changeColorOpt(2, 2);
                setOption3(false);
            } else if (option4) {
                changeColorOpt(3, 2);
                setOption4(false);
            }
            setSelectedPos(0);
        },
        selColor3: function () {
            if (userTry.length < 4 && !option1 && !option2 && !option3 && !option4) {
                setUsertry((prev) => [...prev, 3]);
            } else if (option1) {
                changeColorOpt(0, 3);
                setOption1(false);
            } else if (option2) {
                changeColorOpt(1, 3);
                setOption2(false);
            } else if (option3) {
                changeColorOpt(2, 3);
                setOption3(false);
            } else if (option4) {
                changeColorOpt(3, 3);
                setOption4(false);
            }
            setSelectedPos(0);
        },
        selColor4: function () {
            if (userTry.length < 4 && !option1 && !option2 && !option3 && !option4) {
                setUsertry((prev) => [...prev, 4]);
            } else if (option1) {
                changeColorOpt(0, 4);
                setOption1(false);
            } else if (option2) {
                changeColorOpt(1, 4);
                setOption2(false);
            } else if (option3) {
                changeColorOpt(2, 4);
                setOption3(false);
            } else if (option4) {
                changeColorOpt(3, 4);
                setOption4(false);
            }
            setSelectedPos(0);
        },
        selColor5: function () {
            if (userTry.length < 4 && !option1 && !option2 && !option3 && !option4) {
                setUsertry((prev) => [...prev, 5]);
            } else if (option1) {
                changeColorOpt(0, 5);
                setOption1(false);
            } else if (option2) {
                changeColorOpt(1, 5);
                setOption2(false);
            } else if (option3) {
                changeColorOpt(2, 5);
                setOption3(false);
            } else if (option4) {
                changeColorOpt(3, 5);
                setOption4(false);
            }
            setSelectedPos(0);
        },
    };

    const tryColors = {
        tryColor1: function () {
            console.log("Color 1");
            setOption1(true);
            setOption2(false);
            setOption3(false);
            setOption4(false);
            setSelectedPos(1);
        },
        tryColor2: function () {
            console.log("Color 2");
            setOption2(true);
            setOption1(false);
            setOption3(false);
            setOption4(false);
            setSelectedPos(2);
        },
        tryColor3: function () {
            console.log("Color 3");
            setOption3(true);
            setOption1(false);
            setOption2(false);
            setOption4(false);
            setSelectedPos(3);
        },
        tryColor4: function () {
            console.log("Color 4");
            setOption4(true);
            setOption1(false);
            setOption2(false);
            setOption3(false);
            setSelectedPos(4);
        },
    };

    useEffect(() => {
        for (let i = 0; i < 4; i++) {

            // Repetido
            if (gameMode === 'on') {
                console.log("dificil");

                if (answer.length < 4) {
                    const num = Math.floor((Math.random() * 6) + 0);
                    setAnswer([...answer, num]);
                }
            } else if (gameMode === 'off') {
                // Sin repetido
                console.log("facil");
                let different = false;
                if (answer.length < 4) {
                    let num = 0;
                    do {
                        different = false;
                        num = Math.floor((Math.random() * 6) + 0);
                        for (let i = 0; i < answer.length; i++) {
                            if (num === answer[i]) {
                                different = true;
                                break;
                            }
                        }
                    } while (different);
                    setAnswer([...answer, num]);
                }
            }
        }
    }, [answer]);

    const checkingAnswer = () => {
        let hit = 0;
        let blow = 0;
        let arrAnswer = [...answer];
        let arrUserTry = [...userTry];
        let x = [];
        let y = [];

        for (let i = (answer.length - 1); i >= 0; i--) {
            if (answer[i] === userTry[i]) {
                hit++;
                x = arrAnswer.splice(i, 1);
                y = arrUserTry.splice(i, 1);
            }
        }

        if (hit !== 4) {
            for (let i = (arrAnswer.length - 1); i >= 0; i--) {
                for (let j = (arrUserTry.length - 1); j >= 0; j--) {
                    if (arrAnswer[j] === arrUserTry[i]) {
                        blow++;
                        x = arrAnswer.splice(j, 1);
                        y = arrUserTry.splice(i, 1);
                    }
                }
            }
        }

        if (hit === 4) {
            console.log("You won");
            setShowResults(true);
            setShowAnswer(true);
            setTimeout(() => {
                setShowResults(false);
                userWon(true);
                openGameScreen(false);
                openEndGameScreen(true);
            }, 2000);

            setTimeout(() => {
                setShowAnswer(false);
                n = 8;
            }, 3000);

            setMistakes([...mistakes]);
            setTryHits([...tryHits, hit]);
            setTryBlows([...tryBlows, blow]);
        } else if (n > 1) {
            setShowResults(true);
            setTimeout(() => {
                setShowResults(false);
                setCountRes(countRes + 1);
            }, 2000);

            setMistakes([...mistakes, userTry]);
            setTryHits([...tryHits, hit]);
            setTryBlows([...tryBlows, blow]);
            setUsertry([]);
            n--;
            setCurrentTry((prev) => prev++);
            console.log(tryHits);
        } else {
            console.log("You lost");
            setShowResults(true);
            setShowAnswer(true);
            setTimeout(() => {
                setShowResults(false);
                userWon(false);
                openGameScreen(false);
                openEndGameScreen(true);
            }, 2000);

            setTimeout(() => {
                setShowAnswer(false);
                n = 8;
            }, 3000);

            setTryHits([...tryHits, hit]);
            setTryBlows([...tryBlows, blow]);
        }
    };

    return <>
        <div className="flex flex-col items-center overflow-hidden">
            <AnswerBar answer={answer} showAnswer={showAnswer} />

            <motion.div
                initial={{ height: 0 }}
                animate={{ height: "auto" }}
                className="mt-12 bg-backdrop-brown w-screen">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: .2 }}
                    className="p-6 flex gap-8 overflow-x-scroll max-w-fit mx-auto">
                    {mistakes.map((e, i) => (
                        <motion.div key={i} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                            <HABSquare tryHits={tryHits} tryBlows={tryBlows} i={i} />
                            <MistakeBar i={i} mistakes={mistakes} />
                        </motion.div>
                    ))}

                    {[...Array(n)].map((e, i) => (
                        <div key={i}>
                            <HABSquare />
                            <motion.div key={currentTry === i ? countRes : ""}
                                initial={{ backgroundColor: "#0390F9" }}
                                animate={{ backgroundColor: "rgba(0, 0, 0, .9)" }}
                                transition={{ delay: .1 }}
                                className={`${`${currentTry === i ? "border-4 border-sheikah-darkBlue rounded-xl drop-shadow-blueDrop shadow-2xl relative" : ""}`} w-16 h-84 bg-neutral-900 rounded-lg overflow-hidden`}
                            >
                                {currentTry === i &&
                                    userTry.map((colorSelec, i) => (
                                        <div className={`${`${(selectedPos !== i + 1 && selectedPos !== 0) ? "opacity-10" : ""}`} bg-pick-${colorSelec + 1} w-16 h-20 mt-1 transition-opacity`}
                                            key={i}
                                            onClick={tryColors["tryColor" + (i + 1)]}
                                        ></div>
                                    ))}
                                <AnimatePresence>
                                    {currentTry === i && userTry.length === 0 &&
                                        <motion.span initial={{ y: 0 }} exit={{ y: 0, opacity: 0 }}
                                            className="text-neutral-700 text-7xl flex justify-center items-center bottom-1/3 top-1/3 pb-12 absolute w-16 h-fit select-none"
                                        >
                                            {-n + 9}
                                        </motion.span>
                                    }
                                </AnimatePresence>
                            </motion.div>
                        </div>
                    ))}
                </motion.div>
            </motion.div>

            <ColorSelector
                userTry={userTry}
                onClick={checkingAnswer}
                option1={option1}
                option2={option2}
                option3={option3}
                option4={option4}
                selectedColors={selectedColors}
            />

            <AnimatePresence>
                {showResults &&
                    <motion.div
                        initial={{ x: "100vw" }} animate={{ x: 0 }} exit={{ x: "-150vw" }}
                        className="absolute bg-black/90 text-botw-brown w-screen text-center font-semibold italic text-3xl top-1/2 py-6"
                    >
                        <motion.div initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -100 }} transition={{ delay: .2 }}>
                            <span>{tryHits[countRes]} Hits! </span>
                            <span>{tryBlows[countRes]} Blows!</span>
                        </motion.div>
                        <div className="absolute h-full w-full select-none"></div>
                    </motion.div>
                }
            </AnimatePresence>
        </div>
    </>;
}