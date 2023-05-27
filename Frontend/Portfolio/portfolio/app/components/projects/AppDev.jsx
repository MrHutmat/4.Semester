import React from 'react'
import { AiOutlineFile } from "react-icons/ai";
import { motion } from "framer-motion";

const AppDev = () => {
    return (
        <div>
            <h4>App devolopment</h4>
            <div>
                <p>Her kan du læse mere omkring mit arbejde med app devolopment, blandt andet læringsmål og litteraturlist</p>
                <button className="text-themelight bg-turkish hover:bg-darkturkish font-bold py-2 px-4 rounded inline-flex items-center">
                    <AiOutlineFile size={25} className="mr-2" />
                    <span>Link til App devolopment</span>
                </button>
            </div>
        </div>
    )
}

export default AppDev