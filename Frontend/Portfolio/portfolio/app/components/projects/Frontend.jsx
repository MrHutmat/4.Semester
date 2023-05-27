import React from 'react'
import { AiOutlineFile } from "react-icons/ai";
import { motion } from "framer-motion";

const Frontend = () => {
    return (
        <div>
            <h4>Frontend</h4>
            <div>
                <p>Her kan du læse mere omkring mit arbejde med frontend, blandt andet læringsmål og litteraturlist</p>
                <button className="text-themelight bg-turkish hover:bg-darkturkish font-bold py-2 px-4 rounded inline-flex items-center">
                    <AiOutlineFile size={25} className="mr-2" />
                    <span>Link til Frontend</span>
                </button>
            </div>
        </div>
    )
}

export default Frontend