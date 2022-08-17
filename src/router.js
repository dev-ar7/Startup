import React from 'react';
import App from './App';
import ContactUs from './Pages/ContactUs';
import ComingSoon from './Pages/ComingSoon';
import { Route, Routes, BrowserRouter } from 'react-router-dom';


function Router() {
    return (
        <React.StrictMode>
            <BrowserRouter>
                <Routes>
                    <Route exact path="/Startup" element={<App />} />
                    <Route exact path="/Startup/contact" element={<ContactUs />} />
                    <Route exact path="/Startup/careers" element={<ComingSoon />} />
                    <Route exact path="/Startup/privacy" element={<ComingSoon />} />
                    <Route exact path="/Startup/terms" element={<ComingSoon />} />
                    <Route exact path="/Startup/locations" element={<ComingSoon />} />
                    <Route exact path="/Startup/culture" element={<ComingSoon />} />
                </Routes>
            </BrowserRouter>
        </React.StrictMode>
    );
}


export default Router;