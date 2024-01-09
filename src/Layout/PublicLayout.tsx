import { Outlet } from "react-router-dom";
import NavBar from "../Components/NavBar";

const PublicLayout = () => {

    return (
        <div>
            <NavBar />
            <Outlet />
        </div>
    )
}

export default PublicLayout