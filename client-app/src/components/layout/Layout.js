import React from 'react';
import NavMenu from './NavMenu';
import TimeServer from './TimeServer';

export default props => (
    <div>
        <NavMenu/>
        {props.children}
        <TimeServer/>
    </div>
)