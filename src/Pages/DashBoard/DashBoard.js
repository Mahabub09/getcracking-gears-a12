import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const DashBoard = () => {
    return (
        <div>
            <div className="drawer drawer-mobile">
                <input id="dashboard-bar" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col  ">

                    dashBoard
                    <Outlet></Outlet>
                    {/* <!-- Page content here --> */}


                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-bar" className="drawer-overlay"></label>
                    <ul className="menu p-4 overflow-y-auto w-80 bg-base-200 text-base-content">
                        {/* <!-- Sidebar content here --> */}
                        <li><Link to="/dashBoard"> My Orders</Link></li>
                        <li><Link to="/dashBoard/addReview"> Add A Review</Link></li>

                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashBoard;