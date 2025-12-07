'use client'

import { useState } from "react";
import Heatmap from "../Heatmap";
import IconButton from "../ui/IconButton";

export default function HeatmapContainer() {
    const todayString = new Date().toISOString().split('T')[0];

    const generateDates = (daysBack = 365) => {
        const dates = [];
        const today = new Date();

        for (let i = daysBack; i >= 0; i--) {
            const date = new Date(today);

            date.setDate(today.getDate() - i);

            dates.push({
                date: date.toISOString().split('T')[0],
                isCompleted: undefined,
            })
        }

        return dates;
    }

    const [dates, setDates] = useState(() => generateDates())

    const handleClick = () => {
        // Je dois modifier dans le tableau dates la propriété isCompleted de la date d'aujourd'hui et vérifier si c'est bien la date d'aujourd'hui
        // Pour modifier un tableau Map
        setDates(prev => prev.map((item => {
            if (item.date === todayString) {
                return {...item, isCompleted: true}
            }

            return item
        })))
    }

    return (
        <div className="max-w-3xl bg-gray-800 p-4 rounded-2xl">
            <div className="flex items-center">
                <IconButton onClick={handleClick}/>
                <Heatmap dates={dates}/>
            </div>
        </div>
    )
}