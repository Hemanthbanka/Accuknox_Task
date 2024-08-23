import React, { useState } from 'react';
import {
    PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer
} from 'recharts';
import './Dashboard.css'; // Assuming you'll add custom styling here

const data01 = [
    { name: 'Connected', value: 2, color: '#4285F4' },
    { name: 'Not Connected', value: 2, color: '#A5ACB5' }
];

const data02 = [
    { name: 'Failed', value: 1889, color: '#FF4D4F' },
    { name: 'Warning', value: 681, color: '#FFAA2D' },
    { name: 'Not available', value: 36, color: '#A5ACB5' },
    { name: 'Passed', value: 7253, color: '#52C41A' }
];

const Dashboard = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="dashboard">
            <div className="dashboard-header">
                <h2>CNAPP Dashboard</h2>
                <button className="add-widget-button" onClick={toggleSidebar}>Add Widget</button>
                <button className="date-range-button">Last 2 days</button>
            </div>

            <div className="dashboard-grid">
                <div className="dashboard-widget">
                    <h3>Cloud Accounts</h3>
                    <ResponsiveContainer width="100%" height={200}>
                        <PieChart>
                            <Pie
                                data={data01}
                                dataKey="value"
                                nameKey="name"
                                outerRadius={80}
                            >
                                {data01.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={entry.color} />
                                ))}
                            </Pie>
                            <Tooltip />
                            <Legend />
                        </PieChart>
                    </ResponsiveContainer>
                </div>
                
                <div className="dashboard-widget">
                    <h3>Cloud Account Risk Assessment</h3>
                    <ResponsiveContainer width="100%" height={200}>
                        <PieChart>
                            <Pie
                                data={data02}
                                dataKey="value"
                                nameKey="name"
                                outerRadius={80}
                            >
                                {data02.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={entry.color} />
                                ))}
                            </Pie>
                            <Tooltip />
                            <Legend />
                        </PieChart>
                    </ResponsiveContainer>
                </div>

                {/* Additional widgets can go here */}
                <div className="dashboard-widget empty">
                    <p>No Graph data available!</p>
                </div>
                <div className="dashboard-widget empty">
                    <p>No Graph data available!</p>
                </div>
            </div>

            {isSidebarOpen && (
                <div className="sidebar">
                    <h4>Add Widgets</h4>
                    <ul>
                        <li>CSPM</li>
                        <li>CSMM</li>
                        <li>Images</li>
                        <li>Tickets</li>
                    </ul>
                    <button className="add-widget-confirm">Add Widget</button>
                </div>
            )}
        </div>
    );
};

export default Dashboard;
