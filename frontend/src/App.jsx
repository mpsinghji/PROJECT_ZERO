import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import Home from "./components/Home.jsx";
import ChooseUser from "./components/ChooseUser.jsx";
import AdminSignIn from "./components/AdminSignIn.jsx";
import StudentSignIn from "./components/StudentSignIn.jsx";
import TeacherSignIn from "./components/TeacherSignIn.jsx";
import AboutMe from "./components/AboutMe.jsx";

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


function App() {
  return(
    <Router>
      <Routes>
          <Route path='/' element ={<Home/>}/>
          <Route path='/choose-user' element={<ChooseUser/>}/>
          <Route path="/about-me" element={<AboutMe />} />

          {/* Add the Admin Register route here */}
          <Route exact path="/admin-register" element={<AdminRegister />} />
          <Route exact path="/teacher-register" element={<TeacherRegister />} />
          <Route exact path="/student-register" element={<StudentRegister />} />
          

          {/* Sign in pages routes */}
          <Route exact path='/admin-signIn' element ={<AdminSignIn/>}/>
          <Route exact path='/student-signIn' element ={<StudentSignIn/>}/>
          <Route exact path='/teacher-signIn' element ={<TeacherSignIn/>}/>
          

          {/* All dashboard routes */}
          <Route exact path='/admin/dashboard' element ={<AdminDashboard/>}/>
          <Route exact path="/student/dashboard" element={<StudentDashboard />} />
          <Route exact path="/teacher/dashboard" element={<TeacherDashboard />} /> 


          {/* Admin Section */}
          <Route exact path='/admin/Announcement' element ={<AdminAnnouncement/>}/>
          <Route exact path='/admin/Assignment' element ={<AdminAssignment/>}/>
          <Route exact path='/admin/Attendance' element ={<AdminAttendance/>}/>
          <Route exact path='/admin/Classes' element ={<AdminClasses/>}/>
          <Route exact path='/admin/EventCalender' element ={<AdminEventCalender/>}/>
          <Route exact path='/admin/Exam' element ={<AdminExam/>}/>
          <Route exact path='/admin/Library' element ={<AdminLibrary/>}/>
          <Route exact path='/admin/Performance' element ={<AdminPerformance/>}/>
          <Route exact path='/admin/Profile' element ={<AdminSettingProfile/>}/>
          <Route exact path='/admin/Students' element ={<Students/>}/>
          <Route exact path='/admin/Teachers' element ={<Teachers/>}/>


          {/* Student Dashboard routes */}
          <Route exact path="/student/assignments" element={<StudentAssignments />} />
          <Route exact path="/student/exams" element={<ExamSection />} />
          <Route exact path="/student/performance" element={<PerformanceSection />} />
          <Route exact path="/student/attendance" element={<AttendanceSection />} />
          <Route exact path="/student/library" element={<LibrarySection />} />
          <Route exact path="/student/communication" element={<AnnouncementSection/>} />
          <Route exact path="/student/settings" element={<ProfileSection />} />


          {/* Teachers sections here */}
          <Route exact path="/teacher/classes" element={<ClassSection />} />
          <Route exact path="/teacher/students" element={<StudentSection />} />
          <Route exact path="/teacher/assignments" element={<AssignmentSection />} />
          <Route exact path="/teacher/exams" element={<CheckExamSection />} />
          <Route exact path="/teacher/performance" element={<CheckPerformanceSection />} />
          <Route exact path="/teacher/attendance" element={<CheckAttendanceSection />} />
          <Route exact path="/teacher/communication" element={<CheckAnnouncementSection />} />
          <Route exact path="/teacher/events" element={<EventSection />} />
          <Route exact path="/teacher/settings" element={<TeacherProfileSection/>} />
      </Routes>
    </Router>
  )
}

export default App;
