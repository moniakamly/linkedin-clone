import { Avatar } from '@material-ui/core';
import React from 'react';
import './Sidebar.css';

function Sidebar() {

    const recentItem = (topic) => (
        <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>
    );

    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8d2ViJTIwZGV2ZWxvcG1lbnR8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" />
                <Avatar src="https://media-exp1.licdn.com/dms/image/C4D35AQH4tXKFfESRwA/profile-framedphoto-shrink_100_100/0/1613494608179?e=1617181200&v=beta&t=NL1u05wlL1zGUVOrStIh-OXHtsvtRxHEpz1aGAahtwE" className="sidebar__avatar" />
                <h2>Monia Kamly</h2>
                <p>moniakamli95@gmail.com</p>
            </div>
            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>Who viewed you</p>
                    <p className="sidebar__statNumber">199</p>
                </div>
                <div className="sidebar__stat">
                    <p>Views on post</p>
                    <p className="sidebar__statNumber">234</p>
                </div>
            </div>
            <div className="sidebar__bottom">
                <p>Recent</p>
                {recentItem('reactjs')}
                {recentItem('developper')}
                {recentItem('programming')}
                {recentItem('javascript')}
            </div>
        </div>
    )
}

export default Sidebar
