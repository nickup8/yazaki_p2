import Header from "@/Components/Header";
import { Container } from "@mui/material";

export default function AdminLayout({ children }) {
    return (
        <>
            <Header />
            <Container maxWidth="2xl" className="pt-24 px-12">
                {children}
            </Container>
        </>
    );
}
