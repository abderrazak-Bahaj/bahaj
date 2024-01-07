import React from 'react'

interface PopupProps {
  icon:any
  title:string
  message:string
  okText?:string
  cancelText?:string
  onCancel?:React.MouseEventHandler<HTMLButtonElement>
  onOk?:(e:any)=>{}
}

const PopupApp: React.FC<PopupProps> = ({icon,message,onCancel,cancelText,onOk,okText,title}) => {
    return(
      <div className="rounded-2xl border border-blue-100  bg-white p-4  dark:border-gray-800 dark:bg-gray-700 shadow-lg sm:p-6 lg:p-8 w-[500px]" role="alert">
      <div className="flex items-center gap-4">
        <span className="shrink-0 rounded-full bg-blue-400 p-2 text-white">
          {icon}
        </span>
    
        <p className="font-medium sm:text-lg">{title}</p>
      </div>
    
      <p className="mt-4 text-gray-500 dark:text-gray-300">
        {message}
      </p>
    
      <div className="mt-6 sm:flex sm:gap-4">
        {okText && (<button
          className="inline-block w-full rounded-lg bg-blue-500 px-5 py-3 text-center text-sm font-semibold text-white sm:w-auto"
          onClick={onOk && onOk}
        >
          {okText}
        </button>)}
    
       {
        cancelText&&
        (
          <button
          className="mt-2 inline-block w-full rounded-lg bg-gray-50 px-5 py-3 text-center text-sm font-semibold text-gray-500 sm:mt-0 sm:w-auto"
          onClick={onCancel&&onCancel}
        >
        {cancelText}
        </button>
        )
       }
      </div>
    </div>
    )
}

export default PopupApp

