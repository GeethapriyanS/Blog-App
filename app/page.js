"use client"
import Image from "next/image";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";

export default function Home() {
  const router=useRouter();
  return (
    <div className="main-div">
      <div className="main-div2">
        <div className="main-cls">
        <h1 style={{color:"white"}}>Welcome To Our Web Series Blog</h1>
        <button onClick={() => {
          router.push("/BlogU")
        }}>Check My Blogs</button>
      </div>
      </div>
    </div>
  );
}
