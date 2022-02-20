import { Routes, Route, BrowserRouter } from "react-router-dom";
import { UsersPage } from "./components/users/UsersPage";
import { UserDetailPage } from "./components/users/UserDetailPage";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/:id" element={<UserDetailPage />} />
        <Route path="/" element={<UsersPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
