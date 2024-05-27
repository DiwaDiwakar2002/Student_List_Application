import { BrowserRouter, Route, Routes } from "react-router-dom"; // Import necessary components from React Router
import AddNewStudent from "./Pages/AddNewStudentPage/AddNewStudent"; // Import AddNewStudent component
import EditStudent from "./Pages/EditStudentPage/EditStudent"; // Import EditStudent component
import Home from "./Pages/Homepage/Home"; // Import Home component

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="addnewstudent" element={<AddNewStudent />} />
        <Route path="editstudent/:id" element={<EditStudent />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
