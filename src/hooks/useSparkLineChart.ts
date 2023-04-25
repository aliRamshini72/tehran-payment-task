import {useEffect, useState} from "react";


export default function useSparkLineChart(prices: any[]) {
    const [points, setpoints] = useState('');

    useEffect(() => {
        let points = '';
        const min = Math.min(...prices);
        const max = Math.max(...prices);
        for (let i = 0; i < prices.length; i++) {
            // @ts-ignore
            let new_price = (parseFloat(props.prices[i]) - min) / (min - max);
            points += `${i},${Math.abs((Math.abs(new_price * 100)) - 100)} `
        }
        setpoints(points.trim());
    }, [prices]);
    return points
}