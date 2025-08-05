import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import UserRouter from "./routers/UserRouter";
import AdminRouter from "./routers/AdminRouter";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin/*" element={<AdminRouter />} />
        <Route
          path="/*"
          element={
            <UserRouter
              isSidebarOpen={isSidebarOpen}
              setIsSidebarOpen={setIsSidebarOpen}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
