import React from 'react'
import { TextField } from '@material-ui/core';

const MyInput = ({Label,handler,value}) => {
    return (
        <div>
           
            <TextField value={value} onChange={(e)=>handler(e.target.value)} label={Label}/>
        </div>
    )
}

export default MyInput
