'use client'

import { Code } from "lucide-react";

type ButtonProps = {
    onClick: () => void;
}

export default function Button({onClick}: ButtonProps) {

    return (
        <div className="p-4">
            <button type="button" className="cursor-pointer" onClick={onClick}><Code color="white"/></button>
        </div>
    )
}