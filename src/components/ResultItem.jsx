import React from 'react'

const ResultItem = () => {
    return (
        <div style={{
                display: 'flex', 
                justifyContent: 'space-between',
                alignItems: 'center',
            
            }}>
            <div>
                <div style={{color: '#ffffff'}}>Tip Amount</div>
                <div style={{fontSize: '14px', color: 'hsl(186, 14%, 43%)'}}>/ person</div>
            </div>
            <div style={{
                fontSize: '40px',
                color: 'hsl(172, 67%, 45%)'
            }}>0.00</div>
        </div>
    )
}

export default ResultItem