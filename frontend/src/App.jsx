import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import Home from "./components/Home.jsx";
import ChooseUser from "./components/ChooseUser.jsx";
// import AboutMe from "./components/AboutMe.jsx";

import AdminRegister from "./components/AdminRegister.jsx";
import StudentRegister from "./components/StudentRegister.jsx";
import TeacherRegister from "./components/TeacherRegister.jsx";

import AdminDashboard from "./pages/Admin/Dashboard.jsx";
import AdminAnnouncement from "./pages/Admin/Announcement.jsx"
import AdminAssignment from "./pages/Admin/Assignment.jsx"
import AdminAttendance from "./pages/Admin/Attendance.jsx"
import AdminClasses from "./pages/Admin/Classes.jsx";
import AdminEventCalender from "./pages/Admin/EventCalender.jsx"
import AdminExam from "./pages/Admin/Exam.jsx"
import AdminLibrary from "./pages/Admin/Library.jsx"
import AdminPerformance from "./pages/Admin/Performance.jsx"
import AdminSettingProfile from "./pages/Admin/SettingsProfile.jsx"
import Students from "./pages/Admin/Students.jsx"
import Teachers from "./pages/Admin/Teachers.jsx"

import StudentDashboard from "./pages/Students/Dashboard.jsx";
import StudentAssignments from './pages/Students/Assignment.jsx';
import ExamSection from './pages/Students/Exam.jsx';
import PerformanceSection from './pages/Students/Performance.jsx';
import AttendanceSection from './pages/Students/Attendance.jsx';
import LibrarySection from './pages/Students/Library.jsx';
import AnnouncementSection from './pages/Students/Announcement.jsx';
import ProfileSection from './pages/Students/Profile.jsx';
import StudentEventSection from './pages/Students/EventCalendar.jsx';

import TeacherDashboard from '../src/pages/Teachers/Dashboard';
import ClassSection from '../src/pages/Teachers/Classes';
import StudentSection from '../src/pages/Teachers/Students';
import CheckPerformanceSection from '../src/pages/Teachers/Performance';
import EventSection from '../src/pages/Teachers/Events';
import TeacherProfileSection from '../src/pages/Teachers/Profile';
import CheckAnnouncementSection from '../src/pages/Teachers/Announcement';
import AssignmentSection from '../src/pages/Teachers/Assignments';
import CheckAttendanceSection from '../src/pages/Teachers/Attendance';
import CheckExamSection from '../src/pages/Teachers/Exams';

import ProtectedRoute from "./routes/ProtectedRoute.jsx";

function App() {
  return(
    <Router>
      <Routes>
          <Route path='/' element ={<Home/>}/>
          <Route path='/choose-user' element={<ChooseUser/>}/>
          {/* <Route path="/about-me" element={<AboutMe />} /> */}

          {/* Add the Admin Register route here */}
          <Route exact path="/admin-register" element={<AdminRegister />} />
          <Route exact path="/teacher-register" element={<TeacherRegister />} />
          <Route exact path="/student-register" element={<StudentRegister />} />

          {/* All dashboard routes */}
          <Route exact path='/admin/dashboard' element={<ProtectedRoute><AdminDashboard/></ProtectedRoute>}/>
          <Route exact path="/student/dashboard" element={<ProtectedRoute><StudentDashboard /> </ProtectedRoute>} />
          <Route exact path="/teacher/dashboard" element={<ProtectedRoute><TeacherDashboard /></ProtectedRoute>} /> 


          {/* Admin Section */}
          <Route exact path='/admin/Announcement' element ={<ProtectedRoute><AdminAnnouncement/></ProtectedRoute>}/>
          <Route exact path='/admin/Assignment' element ={<ProtectedRoute><AdminAssignment/></ProtectedRoute>}/>
          <Route exact path='/admin/Attendance' element ={<ProtectedRoute><AdminAttendance/></ProtectedRoute>}/>
          <Route exact path='/admin/Classes' element ={<ProtectedRoute><AdminClasses/></ProtectedRoute>}/>
          <Route exact path='/admin/EventCalender' element ={<ProtectedRoute><AdminEventCalender/></ProtectedRoute>}/>
          <Route exact path='/admin/Exam' element ={<ProtectedRoute><AdminExam/></ProtectedRoute>}/>
          <Route exact path='/admin/Library' element ={<ProtectedRoute><AdminLibrary/></ProtectedRoute>}/>
          <Route exact path='/admin/Performance' element ={<ProtectedRoute><AdminPerformance/></ProtectedRoute>}/>
          <Route exact path='/admin/Profile' element ={<ProtectedRoute><AdminSettingProfile/></ProtectedRoute>}/>
          <Route exact path='/admin/Students' element ={<ProtectedRoute><Students/></ProtectedRoute>}/>
          <Route exact path='/admin/Teachers' element ={<ProtectedRoute><Teachers/></ProtectedRoute>}/>

          {/* Student Dashboard routes */}
          <Route exact path="/student/assignments" element={<ProtectedRoute><StudentAssignments /></ProtectedRoute>} />
          <Route exact path="/student/exams" element={<ProtectedRoute><ExamSection /></ProtectedRoute>} />
          <Route exact path="/student/performance" element={<ProtectedRoute><PerformanceSection /></ProtectedRoute>} />
          <Route exact path="/student/attendance" element={<ProtectedRoute><AttendanceSection /></ProtectedRoute>} />
          <Route exact path="/student/library" element={<ProtectedRoute><LibrarySection /></ProtectedRoute>} />
          <Route exact path="/student/communication" element={<ProtectedRoute><AnnouncementSection/></ProtectedRoute>} />
          <Route exact path="/student/EventCalendar" element={<ProtectedRoute><StudentEventSection /></ProtectedRoute>} />
          <Route exact path="/student/settings" element={<ProtectedRoute><ProfileSection /></ProtectedRoute>} />

          {/* Teachers sections here */}
          <Route exact path="/teacher/classes" element={<ProtectedRoute><ClassSection /></ProtectedRoute>} />
          <Route exact path="/teacher/students" element={<ProtectedRoute><StudentSection /></ProtectedRoute>} />
          <Route exact path="/teacher/assignments" element={<ProtectedRoute><AssignmentSection /></ProtectedRoute>} />
          <Route exact path="/teacher/exams" element={<ProtectedRoute><CheckExamSection /></ProtectedRoute>} />
          <Route exact path="/teacher/performance" element={<ProtectedRoute><CheckPerformanceSection /></ProtectedRoute>} />
          <Route exact path="/teacher/attendance" element={<ProtectedRoute><CheckAttendanceSection /></ProtectedRoute>} />
          <Route exact path="/teacher/communication" element={<ProtectedRoute><CheckAnnouncementSection /></ProtectedRoute>} />
          <Route exact path="/teacher/events" element={<ProtectedRoute><EventSection /></ProtectedRoute>} />
          <Route exact path="/teacher/settings" element={<ProtectedRoute><TeacherProfileSection/></ProtectedRoute>} />
      </Routes>
    </Router>
  )
}

export default App;
