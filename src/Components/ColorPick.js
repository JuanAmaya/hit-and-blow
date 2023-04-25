export default function ColorPick({ i, selectedColors }) {
    return <div className={`bg-pick-${i + 1} w-full h-12 rounded-lg`} onClick={selectedColors["selColor" + i]}></div>;
}