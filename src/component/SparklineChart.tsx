import React, {useEffect, useState} from "react";
import useSparkLineChart from "../hooks/useSparkLineChart";


function SparklineChart({prices, percent}: { prices: any[], percent: number }) {
    const points = useSparkLineChart(prices)
    return (
        <svg
            className={'mx-auto'}
            width={"84px"}
            height={'52px'}
            fill={'none'}
            viewBox="0 0 168 100"
        >
            <polyline
                stroke={percent > 0 ? "green" : "red"}
                strokeWidth="2px"
                points={points}
            />
            <polygon
                opacity={'0.3'}
                fill={percent > 0 ? "green" : "red"}
                points={points + ' 168,100 0,100'}
            />
        </svg>

    )

}

export default SparklineChart
