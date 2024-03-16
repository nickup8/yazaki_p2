import AdminLayout from "@/Layouts/AdminLayout";
import { Head } from "@inertiajs/react";

export default function Dashboard({ auth }) {
    return (
        <>
            <Head title="Dashboard" />

            <div className="w-full">
                <h1>123</h1>
            </div>
        </>
    );
}

Dashboard.layout = (page) => <AdminLayout children={page} />;
