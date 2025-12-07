'use client'

import { Code } from "lucide-react";

export default function Button({onClick}) {

    return (
        <div className="p-4">
            <button type="button" className="cursor-pointer" onClick={onClick}><Code color="white"/></button>
        </div>
    )
}