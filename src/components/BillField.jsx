import React, { useState } from 'react'
import MyInput from '../ui/input/MyInput'

const BillField = () => {

    const [bill, setBill] = useState(0)

    return (
        <div style={{width: '100%'}}>
            <div style={{marginBottom: 10, color: 'hsl(186, 14%, 43%)'}}>Bill</div>
            <MyInput
                type='number'
                value={bill.bill}
                onChange={(e) => setBill(e.target.value)}
                placeholder='0'
            />
            <div>{bill}</div>
        </div>
    )
}

export default BillField