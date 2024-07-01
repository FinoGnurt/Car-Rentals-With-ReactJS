import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import BookingCar from "./pages/BookingCar";
import "antd/dist/antd.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<ProtectedRoute component={<Home />} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/bookingcar"
            element={<ProtectedRoute component={<BookingCar />} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

function ProtectedRoute({ component }) {
  if (localStorage.getItem("user")) {
    return component;
  } else {
    return <Navigate to="/login" />;
  }
}

//
//
//
//
//
//
// function App() {
//   return (
//     <div className="App">
//       <Router>
//         <Routes>
//           <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/register" element={<Register />} />
//           <Route path="/bookingcar" element={<ProtectedRoute><BookingCar /></ProtectedRoute>} />
//         </Routes>
//       </Router>
//     </div>
//   );
// }

// export default App;

// function ProtectedRoute({ children }) {
//   if (localStorage.getItem("user")) {
//     return children;
//   } else {
//     return <Navigate to="/login" />;
//   }
// }
