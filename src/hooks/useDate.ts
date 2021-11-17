import { useEffect, useState } from "react";

export type Interval = "second" | "minute" | "hour" | number | undefined | null;

export const nextCallback = (now: Date, interval: Interval) => {
    if (typeof interval === "number") {
        return interval;
    } else if (interval === "second") {
        return 1000 - now.getMilliseconds();
    } else if (interval === "minute") {
        return 60 * 1000 - now.getMilliseconds() - now.getSeconds() * 1000;
    } else if (interval === "hour") {
        return (
            60 * 60 * 1000 -
            now.getMilliseconds() -
            now.getSeconds() * 1000 -
            now.getMinutes() * 60 * 1000
        );
    } else {
        return 1000 - now.getMilliseconds();
    }
};

export default function useDate({ interval }: { interval?: Interval } = {}) {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        let timeoutId: NodeJS.Timeout | undefined;

        const bump = () => {
            timeoutId = setTimeout(() => {
                setDate(new Date());
                bump();
            }, nextCallback(new Date(), interval));
        };

        bump();

        return () => clearTimeout(timeoutId!);
    });

    return date;
}