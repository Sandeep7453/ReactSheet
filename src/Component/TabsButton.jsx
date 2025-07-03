import React from 'react'


const TabsButton = (props ) => {

 const isRight = props.iconPosition === "right";
    
  return (
   <div className='flex items-center '>
            <button className={`h-6  border-gray-500 w-fit px-2 py-2 cursor-pointer text-sm flex items-center ${props.className}` } onClick = {props.onClick}>  {isRight ? props.label : props.icon}
      {isRight ? props.icon : props.label}  </button>
   </div>
  )
}

export default TabsButton