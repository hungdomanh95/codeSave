import React from 'react'
import Loading from './loading/Loading'
import Ringring from './ringring/Ringring'
import Toggle from './toggle/Toggle'

const Static = () => {
    return (
        <div className='static'>
            <Ringring/>
            <Toggle/>
            <Loading/>
        </div>
    )
}

export default Static
