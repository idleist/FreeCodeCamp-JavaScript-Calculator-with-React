import React from 'react';



const Button = ({idName, buttonName, buttonPress, buttonDisplay}) => (
    <div className = 'buttons'>
        <p className = 'buttonDisplay'>{buttonDisplay}</p>
        <button 
                className = {
                    idName === 'add'|| 
                    idName === 'subtract'||
                    idName ==='divide'|| 
                    idName ==='multiply' ? 'operator calcButton' : 
                    idName === 'equals'? 'equals calcButton' :
                    idName === 'decimal'? 'decimal calcButton':
                    idName === 'clear' ? 'clear calcButton': 'calcButton'} 
                id={idName}
                value = {buttonName}
                onClick = {buttonPress}      
        >
        </button>
    </div>
);

export default Button;