'use client'

import { Code, Plus } from "lucide-react";

const variants = {
    "primary": "bg-transparent text-white",
    "secondary": "flex justify-center bg-orange-500 text-white rounded-2xl w-8 h-8"
}

type VariantKey = keyof typeof variants;

type ButtonProps = {
    onClick: () => void;
    variant?: VariantKey
}


export default function Button({onClick, variant = "primary"}: ButtonProps) {

    return (
        <div className={`flex items-center ${variants[variant]}`}>
            <button 
                type="button" 
                className="cursor-pointer" 
                onClick={onClick}
                >
                { variant === "primary" ? <Code/> : <Plus />}
            </button>
        </div>
    )
}