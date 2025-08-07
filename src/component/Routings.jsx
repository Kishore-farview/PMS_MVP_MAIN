import React from 'react';
import { Routes, Route } from 'react-router-dom';

const Routings = () => {
    return (
        <div className="ml-[160px] flex-1 h-full">
            <Routes>
                <Route
                    path='/'
                    element={
                        <iframe
                            src="http://localhost:5175/"
                            title="Dashboard microfrontend"
                            width="100%"
                            height="100%"
                            style={{ border: 'none' }}
                        />
                    }
                />
                <Route
                    path='/housekeeping'
                    element={
                        <iframe
                            src="http://localhost:5174/"
                            title="HouseKeeping microfrontend"
                            width="100%"
                            height="100%"
                            style={{ border: 'none' }}
                        />
                    }
                />
            </Routes>
        </div>
    );
};

export default Routings;
