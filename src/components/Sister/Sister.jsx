import React, { useContext } from 'react';
import { moneyContext } from '../Grandpa/Grandpa';

const Sister = () => {
    const [money,setMoney] = useContext(moneyContext);
    return (
        <div>
            <h2>Subarna</h2>
            <p>Money: {money}Tk. </p>
            <button onClick={()=> setMoney(money+1000)} className='btn'>Add 1000Tk to Grandpa</button>
        </div>
    );
};

export default Sister;