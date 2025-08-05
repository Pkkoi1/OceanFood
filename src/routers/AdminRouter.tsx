import { Routes, Route } from "react-router-dom";

function AdminRouter() {
  return (
    <Routes>
      {/* TODO: Add admin routes here */}
      <Route path="*" element={<div>Admin Dashboard</div>} />
    </Routes>
  );
}

export default AdminRouter;
