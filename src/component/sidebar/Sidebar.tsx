import React from 'react';
import Section from '../section/Section';


const Sidebar = () => {

    return (
        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

            <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/public">
                <div className="sidebar-brand-icon rotate-n-15">
                    <i className="fas fa-laugh-wink"></i>
                </div>
                <div className="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
            </a>

            <hr className="sidebar-divider my-0"/>

            <li className="nav-item active">
                <a className="nav-link" href="/public">
                    <i className="fas fa-fw fa-tachometer-alt"></i>
                    <span>Dashboard</span></a>
            </li>

            <hr className="sidebar-divider"/>

            <div className="sidebar-heading">
                Interface
            </div>

            <Section title="Import" icon="fa-upload">
                <h6 className="collapse-header">Files</h6>
                <a className="collapse-item" href="utilities-color.html">Products</a>
            </Section>


        </ul>
    )
}

export default Sidebar;