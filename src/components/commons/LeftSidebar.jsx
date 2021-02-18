import React, { Component } from 'react'

export class LeftSidebar extends Component {
    render() {
        return (
            <div>
                <div class="vertical-menu">

<div data-simplebar class="h-100">

    {/* <!--- Sidemenu --> */}
    <div id="sidebar-menu">
        {/* <!-- Left Menu Start --> */}
        <ul class="metismenu list-unstyled" id="side-menu">
            <li class="menu-title">Menu</li>

            <li>
                <a href="/dashboard" class="waves-effect">
                    <i class="ri-dashboard-line"></i>
                    <span>Dashboard</span>
                </a>
            </li>



            <li>
                <a href="javascript: void(0);" class="has-arrow waves-effect">
                    <i class="ri-table-2"></i>
                    <span>Category </span>
                </a>
                <ul class="sub-menu" aria-expanded="false">
                    <li><a href="/movies">Movies</a></li>
                    <li><a href="/sports">Sports</a></li>
                    <li><a href="/political">Political</a></li>
                    <li><a href="/musician">Musicians</a></li>
                    <li><a href="/newaddcat">Add New</a></li>
                </ul>
            </li>

            <li>
                <a href="javascript: void(0);" class="has-arrow waves-effect">
                    <i class="  ri-account-pin-box-fill"></i>
                    <span>Celebrities</span>
                </a>
                <ul class="sub-menu" aria-expanded="false">
                    <li><a href="/celebritylist">Celebrity View</a></li>
                    <li><a href="/orderview">Orders View</a></li>
                    <li><a href="/addcelebrity">Add New Member</a></li>
                </ul>
            </li>


        </ul>
    </div>
    {/* <!-- Sidebar --> */}
</div>
</div>
            </div>
        )
    }
}

export default LeftSidebar
