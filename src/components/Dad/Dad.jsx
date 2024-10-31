import React from 'react';
import Myself from '../Myself/Myself';
import Sister from '../Sister/Sister';

const Dad = () => {
    return (
        <div>

            <h2>Dad</h2>
            <div className='grid grid-cols-2 border border-blue-500 p-3 rounded-xl'>
                <Myself></Myself>
                <Sister></Sister>
            </div>
            
        </div>
    );
};

export default Dad;