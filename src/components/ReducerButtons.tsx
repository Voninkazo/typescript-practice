import React, { useContext, useRef } from 'react';
import styled from 'styled-components';


import GlobalContext from './GlobalState';
import useClickOutside from './useClickOutside';

const  ReducerButtons = () => {
    const {rValue, turnOn, turnOff} = useContext(GlobalContext);

    const ref = useRef<HTMLDivElement>(null!); //read only with the "!"

    useClickOutside(ref, () => {
        console.log("click outside");
    });

    return (
        <div ref={ref}>
            {rValue && <h1>Visible</h1>}
            <button onClick={turnOn}>Action One</button>
            <button onClick={turnOff}>Action Two</button>
        </div>
    )
}

const Wrapper = styled.div`
    background: red;
`;

export default ReducerButtons
