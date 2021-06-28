import React from 'react'

const Loading = () => {
    return (
        <div className='content loading'>
        <h3>LOADING ...</h3>
        <a href="https://loading.io/spinner/" target="blank" >https://loading.io/spinner/</a>
        <div className='content-body loading-color'>
            {/* Gooey loader */}
            <div class="gooey-loader">
                <div class="dot dot-1"></div>
                <div class="dot dot-2"></div>
                <div class="dot dot-3"></div>
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                    <defs>
                        <filter id="goo">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                        <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 21 -7"/>
                        </filter>
                    </defs>
                </svg>
            </div>
        </div>
   </div>
    )
}

export default Loading