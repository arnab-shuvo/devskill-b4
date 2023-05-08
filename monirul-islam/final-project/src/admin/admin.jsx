import React from "react";

import AdminNavbar from "./components/navbar/navbar";
import AdminRoutes from "./admin.routes";

export default function Admin() {
    return (
        <div >
            <AdminNavbar />
            <main >
                <AdminRoutes />
            </main>
        </div>
    );
}
