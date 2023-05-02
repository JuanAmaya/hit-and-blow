import { useState } from "react";
import Button from "../Components/Button";
import DuplicateSelec from "../Components/DuplicateSelec";

export default function MenuScreen({ openGameScreen, setGameMode, gameMode, openInstructionsScreen }) {
    const openScreen = () => {
        openGameScreen(true);
    };

    const openInsScreen = () => {
        openInstructionsScreen(true);
    };

    return <>
        <div className="flex items-center flex-col mt-20 select-none">
            <div className="flex items-baseline">
                <h2 className="text-hit-green font-bold text-7xl mr-2">Hit</h2>
                <span className="text-2xl text-botw-brown">and</span>
            </div>
            <h2 className="text-blow-yellow font-bold text-7xl">Blow</h2>
        </div>

        <DuplicateSelec setGameMode={setGameMode} gameMode={gameMode} />

        <div className="flex justify-center mt-10 flex-col items-center gap-2">
            <Button onClick={openScreen} textColor={"text-sheikah-lightBlue"}>Play</Button>
            <Button onClick={openInsScreen} textColor={"text-sheikah-yellow"}>Instructions</Button>
        </div>
    </>;
}