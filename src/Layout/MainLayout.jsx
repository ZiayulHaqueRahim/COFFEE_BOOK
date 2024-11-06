import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

 const MainLayout = () => {
    return (
        <div>
           <Navbar />

            <div className="min-h-[calc(100vh-232px)] container mx-auto px-4  py-10">
                <Outlet />
            </div>


            <Footer />
        </div>
    );
};

export default MainLayout;