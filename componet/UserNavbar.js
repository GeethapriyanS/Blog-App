"use client"
import { useRouter } from "next/navigation";

const UserNavbar=()=>{
    const router=useRouter();
    return(
        <div className="navbar">
            <div className="navbar-item1 navbar-logo">Web Series Blog - User</div>
            <div className="navbar-item2">
                <div className="nav-item" onClick={()=>{
                    router.push("/LoginU");
                }}>Admin Login</div>
            </div>
        </div>
    )
}
export default UserNavbar;