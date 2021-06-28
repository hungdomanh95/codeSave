import React from 'react'
import HoldBtn  from "./holdBtn/HoldBtn";
import ToggleBtn from "./toggleBtn/ToggleBtn";
import ComponentClass from "./ComponentClass";
import ComponentFunc from "./ComponentFunc";
import Time from "./time/Time";
import Socket from './socket/Socket';
import Lodash from './lodash/Lodash';
import Library from './Library';
const ReactJs = () => {
    return (
        <div className='react'>
            <Library/>
            <Time/>
            <HoldBtn />
            <ToggleBtn/>
            <Socket/>
            <Lodash/>
            <ComponentClass/>
            <ComponentFunc/>
        </div>
    )
}

export default ReactJs
