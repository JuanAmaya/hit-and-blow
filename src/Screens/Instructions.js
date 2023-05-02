import { useState } from "react";
import Button from "../Components/Button";
import Arrow from "../Components/SVG/Arrow";
import Home from "../Components/SVG/Home";
import HABSquare from "../Components/MainBar/HABSquare";
import { AnimatePresence, motion } from "framer-motion";

export default function Instructions({ openInstructionsScreen }) {
    const duplColors = [3, 5, 3, 6];
    const colEx1 = [1, 3, 6, 2];
    const colEx2 = [3, 5, 6, 2];

    const INFO = [
        {
            text: "You have to guess the 4 colors in order",
            content: <div
                className="bg-sheikah-darkBlue border-2 border-shiny-lightBlue h-16 w-96 rounded-lg flex overflow-hidden drop-shadow-blueDrop"
            >
            </div>
        },
        {
            text: "You select the colors with the bar",
            content: <div
                className="w-11/12 bg-black/80 border-2 border-white/20 p-4 mt-8 grid grid-cols-fluid justify-items-center gap-3 mb-2 rounded-xl max-w-sm"
            >
                {[...Array(6)].map((e, i) => (
                    <div className={`bg-pick-${i + 1} w-full h-12 rounded-lg`} key={i}></div>
                ))}
            </div>
        },
        {
            text: "Duplicate colors OFF doesn't duplicate the colors",
            content: <div className="flex flex-col gap-12">
                <div className="relative flex justify-center bg-black/80 w-32 mx-auto py-2 overflow-hidden border-2 border-white/20 rounded-3xl mt-4 h-12">
                    <span
                        className="italic capitalize select-none absolute"
                    >
                        Off
                    </span>
                </div>
                <div
                    className="bg-sheikah-darkBlue border-2 border-shiny-lightBlue h-16 w-80 rounded-lg flex overflow-hidden drop-shadow-blueDrop"
                >
                    {[...Array(4)].map((e, i) => (
                        <div className={`bg-pick-${i + 1} w-24 h-16 transition-colors`} key={i}></div>
                    ))}
                </div>
            </div>
        },
        {
            text: "Duplicate colors ON allow any color to duplicate",
            content: <div className="flex flex-col gap-12">
                <div className="relative flex justify-center bg-black/80 w-32 mx-auto py-2 overflow-hidden border-2 border-white/20 rounded-3xl mt-4 h-12">
                    <span
                        className="italic capitalize select-none absolute"
                    >
                        On
                    </span>
                </div>
                <div
                    className="bg-sheikah-darkBlue border-2 border-shiny-lightBlue h-16 w-80 rounded-lg flex overflow-hidden drop-shadow-blueDrop"
                >
                    {duplColors.map((color, i) => (
                        <div className={`bg-pick-${color} w-24 h-16 transition-colors`} key={i}></div>
                    ))}
                </div>
            </div>
        },
        {
            text: "You have 8 opportunities",
            content:
                [...Array(3)].map((e, i) => (
                    <div key={i} className="mr-2">
                        <HABSquare />
                        <div
                            className={`w-16 h-72 bg-neutral-900 rounded-lg overflow-hidden`}
                        >
                        </div>
                    </div>
                ))
        },
        {
            text: "Blow means you got a color right (yellow)",
            content:
                [...Array(1)].map((e, i) => (
                    <div key={i}>
                        <HABSquare tryHits={0} tryBlows={[2]} i={i} />
                        <div
                            className={`w-16 h-72 bg-neutral-900 rounded-lg overflow-hidden`}
                        >
                            {colEx1.map((color, i) => (
                                <div className={`bg-pick-${color} w-16 h-17 mt-1`} key={i}></div>
                            ))}
                        </div>
                    </div>
                ))
        },
        {
            text: "Hit means you got a color and position right (green)",
            content:
                [...Array(1)].map((e, i) => (
                    <div key={i}>
                        <HABSquare tryHits={[2]} tryBlows={[1]} i={i} />
                        <div
                            className={`w-16 h-72 bg-neutral-900 rounded-lg overflow-hidden`}
                        >
                            {colEx2.map((color, i) => (
                                <div className={`bg-pick-${color} w-16 h-17 mt-1`} key={i}></div>
                            ))}
                        </div>
                    </div>
                ))
        },
        {
            text: "You win if you get four hits",
            content:
                [...Array(1)].map((e, i) => (
                    <div key={i}>
                        <HABSquare tryHits={[4]} tryBlows={[0]} i={i} />
                        <div
                            className={`w-16 h-72 bg-neutral-900 rounded-lg overflow-hidden`}
                        >
                            {duplColors.map((color, i) => (
                                <div className={`bg-pick-${color} w-16 h-17 mt-1`} key={i}></div>
                            ))}
                        </div>
                    </div>
                ))
        },
    ];

    const [page, setPage] = useState(0);

    const nextPage = () => {
        if (page < INFO.length - 1) {
            setPage(page + 1);
        }
    };

    const backPage = () => {
        if (page > 0) {
            setPage(page - 1);
        }
    };

    const openInsScreen = () => {
        openInstructionsScreen(false);
    };

    return <>
        <h2 className="text-center text-menu-blue italic text-2xl my-2">Instructions</h2>
        <div className="text-center text-white text-2xl p-4 border-2 border-botw-brown w-11/12 max-w-screen-md mx-auto relative h-128">
            <AnimatePresence>
                <motion.div
                    key={page}
                    className="h-128"
                    initial={{ opacity: 0, position: "absolute" }}
                    animate={{ opacity: 1, position: "relative", transition: { delay: .3 } }}
                    exit={{ opacity: 0 }}
                >
                    <p>{INFO[page].text}</p>
                    <div className="flex justify-center h-5/6 items-center">
                        {INFO[page].content}
                    </div>
                </motion.div>
            </AnimatePresence>
        </div>
        <div className="flex mt-8 p-4 gap-4 justify-center max-w-screen-md mx-auto lg:mt-4">
            <Button textColor={`${page <= 0 ? "opacity-30" : ""} text-botw-brown`} onClick={backPage}>
                <Arrow dPath={"M15.75 19.5L8.25 12l7.5-7.5"} styles={"w-10 h-10 mx-auto"} />
            </Button>
            <Button onClick={openInsScreen} textColor={"text-botw-brown"}>
                <Home />
            </Button>
            <Button textColor={`${page >= (INFO.length - 1) ? "opacity-30" : ""} text-botw-brown`} onClick={nextPage}>
                <Arrow dPath={"M8.25 4.5l7.5 7.5-7.5 7.5"} styles={"w-10 h-10 mx-auto"} />
            </Button>
        </div>
    </>;
}