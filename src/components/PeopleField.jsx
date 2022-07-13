import React, { useState } from 'react'
import MyInput from '../ui/input/MyInput'

const PeopleField = () => {

    const [numPeople, setNumPeople] = useState(0)

    return (
        <div style={{width: '100%'}}>
            <div style={{marginBottom: 10, color: 'hsl(186, 14%, 43%)'}}>Bill</div>
            <MyInput
                type='number'
                value={numPeople.numPeople}
                onChange={(e) => setNumPeople(e.target.value)}
                placeholder='0'
            />
            <div>{numPeople}</div>
        </div>
    )
}

export default PeopleField