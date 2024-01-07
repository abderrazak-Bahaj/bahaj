import React from 'react'
import {TextInputProps} from "@/lib/interfaces/components"

const TextInputApp: React.FC<TextInputProps> = ({className="",theme="default",...props}) => {
    const primaryClassName = theme=="primary" ? "w-full bg-white rounded px-5 py-2 h-11 dark:bg-transparent dark:text-slate-300 border border-[#dddddd] dark:border dark:border-slate-600" :"";
    const finaleClassName = `${primaryClassName} ${className}`
    return(
        <input
            className={finaleClassName}
            {...props}
        />
        )
}

export default TextInputApp

