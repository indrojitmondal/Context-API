import React, { createContext, useState } from 'react';
import Dad from '../Dad/Dad';
import Uncle from '../Uncle/Uncle';
import Aunty from '../Aunty/Aunty';

export const moneyContext = createContext(1000);

const Grandpa = () => {

     
    const [money, setMoney]= useState(1000);
    return (

        

        <>

            <h1 className='text-lg'>Grandpa</h1>
            <h2>Money: {money}</h2>

            <div className='grid grid-cols-3 border border-blue-500 p-3 rounded-xl '>


                <moneyContext.Provider value={[money,setMoney]}>
                    <Dad></Dad>
                    <Uncle></Uncle>
                    <Aunty></Aunty>
                </moneyContext.Provider>


            </div>
        </>

    );
};

export default Grandpa;