import React from 'react';



const Button = ({idName, buttonName, buttonPress}) => (
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
        {buttonName}
    </button>
);

export default Button;