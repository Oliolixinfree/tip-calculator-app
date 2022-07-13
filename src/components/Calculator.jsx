import React from 'react'
import BillField from './BillField'
import PeopleField from './PeopleField'
import PercentList from './PercentList'

const Calculator = () => {
    return (
        <div style={{minWidth: 400, marginRight: 10, paddingTop: 20, paddingBottom: 20}}>
            <BillField />
            <PercentList />
            <PeopleField />
        </div>
    )
}

export default Calculator