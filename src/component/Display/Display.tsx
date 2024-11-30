import styles from "../Counter/Counter.module.css";

type DisplayProps = {
    count: number;
    maxValue: number;
};
export const Display = ({count, maxValue}: DisplayProps) => {

    const radius = 70
    const PI = Math.PI
    const circleLength = 2 * PI * radius
    const offset = circleLength * ((maxValue - count) / maxValue)
    const countColor = count === maxValue ? 'var(--color-error)' : 'var(--color-black)'

    return (
        <div style={{display: "flex", justifyContent: "center"}}>
            <svg className={styles.progressСircle} width='160px' height='160px' viewBox="0 0 160 160">
                <circle r={radius} cx="80" cy="80" fill="transparent" stroke="#e0e0e0" strokeWidth="12px"></circle>
                <circle r={radius} cx="80" cy="80" fill="transparent" stroke={countColor} strokeWidth="12px"
                        stroke-dasharray={circleLength} stroke-dashoffset={offset} strokeLinecap={"round"}></circle>
                <text x="65" y="135" fill={countColor}
                      style={{transform: "rotate(90deg) translate(0px, -196px)"}}>{count}
                </text>
            </svg>

        </div>
    );
};