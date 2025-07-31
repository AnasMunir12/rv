import Link from "next/link";
import React from "react";

function Sidebar() {
  return (
    <>
      <aside style={{ width: "200px", background: "#eee", padding: "20px" }}>
        <nav>
          <ul style={{ listStyle: "none", padding: 0 }}>
            <li>
              <Link href="/dashboard">Home</Link>
            </li>
            <li>
              <Link href="/dashboard/step1">Step 1</Link>
            </li>
            <li>
              <Link href="/dashboard/step2">Step 2</Link>
            </li>
            <li>
              <Link href="/dashboard/settings">Settings</Link>
            </li>
          </ul>
        </nav>
      </aside>
    </>
  );
}

export default Sidebar;
