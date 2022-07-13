import React, { useState } from 'react'
import MyButton from '../ui/button/MyButton'
import MyInput from '../ui/input/MyInput'

const PercentList = () => {

    const [customTip, setCustomTip] = useState(0)

    return (
        <div>
            <div style={{marginBottom: 15, color: 'hsl(186, 14%, 43%)'}}>Select tip %</div>
            <div className='percent-list'>
                <MyButton onClick={e => console.log(e.value)}>5%</MyButton>
                <MyButton>10%</MyButton>
                <MyButton>15%</MyButton>
                <MyButton>25%</MyButton>
                <MyButton>50%</MyButton>
                <MyInput
                    value={customTip.customTip}
                    onChange={(e) => setCustomTip(e.target.value)}
                    type='number'
                    placeholder='Custom'
                />
            </div>
            {customTip}
        </div>
    )
}

export default PercentList