'use client'

import { Code } from "lucide-react";

export default function Button() {

    return (
        <div className="p-4">
            <button type="button" className="cursor-pointer"><Code color="white"/></button>
        </div>
    )
}