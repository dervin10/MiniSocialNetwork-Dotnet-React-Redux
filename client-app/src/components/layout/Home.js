import React from 'react';
import { connect } from 'react-redux';
import Onlines from '../social/online/Online';
import Notifications from '../social/notification/Notifications';
import Posts from '../social/posts/PostSection';

const Home = props => (
    <div className="home" style={
        {
            display: "flex", 
            justifyContent: "space-around", 
            paddingTop: "10px"
        }}>
       <Onlines />
       <Posts />
       <Notifications />
    </div>
)

export default connect()(Home);