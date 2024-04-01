import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RegistrationPage from './registration';
import AddUserModule from '../component/AddUserModule';
import AddQuizForm from '../component/addquiz';
// import Navbar from '../component/Navbar';

const localizer = momentLocalizer(moment);

const Dashboard = () => {
  return (
    <Router>
      <div>
        {/* <Navbar /> */}
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div style={{ width: '30%' }}>
            <h2>Menu</h2>
            <ul>
              <li><a href="/register">Register</a></li>
              <li><a href="/module">Module</a></li>
              <li><a href="/quiz">Quiz</a></li>
            </ul>
          </div>
          <div style={{ width: '60%' }}>
            <Calendar
              localizer={localizer}
              events={[
                {
                  title: 'My event',
                  start: new Date(),
                  end: new Date(new Date().getTime() + 60 * 60 * 1000), // 1 hour
                },
              ]}
              startAccessor="start"
              endAccessor="end"
              style={{ height: 500, margin: '50px' }}
            />
          </div>
        </div>
        <Routes>
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="/module" element={<AddUserModule />} />
          <Route path="/quiz" element={<AddQuizForm />} />
        </Routes>
      </div>
    </Router>
  );
};

export default Dashboard;
