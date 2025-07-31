// src/app/dashboard/layout.js

import DashcboardNavbar from "@/components/admin/DashcboardNavbar";
import Sidebar from "@/components/admin/Sidebar";
import { Box } from "@mui/material";

// import "./dashboard.css"; // optional custom styles

export const metadata = {
  title: "Dashboard",
};

export default function DashboardLayout({ children }) {
  return (
    <div className="dashboard-layout">
      <DashcboardNavbar />
      <div className="dashboard-main">
        <Box display={"flex"}>
          <Sidebar />
          <main className="dashboard-content">{children}</main>
        </Box>
      </div>
    </div>
  );
}
