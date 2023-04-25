export default function MistakeBar({ i, mistakes }) {
    return <div className="w-16 h-84 bg-neutral-900 rounded-lg overflow-hidden">
        {mistakes[i].map((colorSelec, i) => (
            <div className={`bg-pick-${colorSelec + 1} w-16 h-20 mt-1`}
                key={i}
            ></div>
        ))}
    </div>;
}