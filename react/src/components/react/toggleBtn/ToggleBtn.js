import React, { useState } from 'react';
import Switch from 'react-input-switch';

const ToggleBtn = () => {
    const [value, setValue] = useState(0);
    return (
        <div className='content toggle-btn'>
            <div className='toggle-btn'>
                <h3>TOGGLE BUTTON</h3>
                <div className='content-body'>
                    <p>npm install react-input-switch --save</p>
                    <div>
                        <a href='https://reactjsexample.com/react-toggle-switch-component/'  target="blank" >Link Document</a>
                    </div>
                    <div>
                        <a href='https://github.com/swiftcarrot/react-input-switch/blob/master/src/utils.js'  target="blank" >LINK FIX CSS</a>
                    </div>
                    <Switch value={value} onChange={setValue}
                    styles={{
                        track: { backgroundColor: '#ccc',  borderRadius: 34 },
                        trackChecked: { backgroundColor: '#0F2E4E' },
                        container:{ width: 45, height: 24 },
                        button:{ right: 2, left: 24 },
                        buttonChecked:{ left:2, right:24 }
                      }}
                    />
                    
                    <Switch on="yes" off="no" value={value} onChange={setValue} />
                </div>
            </div>
        </div>
    )
}

export default ToggleBtn
