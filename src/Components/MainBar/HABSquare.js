export default function HABSquare({ tryHits, tryBlows, i }) {
    return <div className="w-16 h-12 bg-neutral-800 rounded-lg grid grid-rows-2 grid-flow-col overflow-hidden mb-2">
        {i !== undefined && tryHits[i] > 0 &&
            [...Array(tryHits[i])].map((e, i) =>
                <div
                    key={i}
                    className="w-8 h-6 bg-hit-green"
                ></div>)
        }
        {i !== undefined && tryBlows[i] > 0 &&
            [...Array(tryBlows[i])].map((e, i) =>
                <div
                    key={i}
                    className="w-8 h-6 bg-blow-yellow"
                ></div>)
        }
    </div>;
}