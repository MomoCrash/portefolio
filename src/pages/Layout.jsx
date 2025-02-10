import "../styles/layout.css"
import Navbar from "../components/navbar.jsx";
import Footer from "../components/footer.jsx";
import {Outlet} from "react-router-dom";

export default function Layout() {
    return (
        <div className={"background"}>

            <Navbar></Navbar>

            <Outlet></Outlet>

            <Footer></Footer>

        </div>
    )
}