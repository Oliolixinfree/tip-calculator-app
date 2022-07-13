import React from 'react'

import ResetButton from '../ui/reset-button/ResetButton'
import ResultItem from './ResultItem'

const ResultList = () => {
    return (
        <div style={{
                minWidth: 400, 
                marginLeft: 10, 
                backgroundColor: '#00494d',
                borderRadius: '22px',
                padding: '20px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent:'space-between'
            }}> 
            <div>
                <ResultItem />
                <ResultItem />
            </div>
            <div style={{textAlign:'center'}}>
                <ResetButton desabled>reset</ResetButton>
            </div>
        </div>
    )
}

export default ResultList