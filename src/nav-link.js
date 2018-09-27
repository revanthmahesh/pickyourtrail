import React from 'react';
import {NavLink} from 'react-router-dom';

const Navigate = ()=>(
    <div>
        <NavLink to='/'>Task-1</NavLink>
        <NavLink to='/task2'>Task-2</NavLink>
        <NavLink to='/task3'>Task-3</NavLink>
    </div>
)

export default Navigate;