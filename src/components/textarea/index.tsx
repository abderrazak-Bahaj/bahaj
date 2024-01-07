import React from 'react'
import {TextAreaProps} from "@/lib/interfaces/components"


const TextAreaApp: React.FC<TextAreaProps> = ({className="",theme="default",...props}) => {
    const primaryClassName = theme=="primary" ? "w-full bg-white rounded px-5 py-2 h-40 dark:bg-transparent dark:text-slate-300 border border-[#dddddd] dark:border dark:border-slate-600" :"";
    const finaleClassName = `${primaryClassName} ${className}`
    return(
        <textarea
            className={finaleClassName}
            {...props}
        >

        </textarea>
        )
}

export default TextAreaApp

