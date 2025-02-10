import Image from "next/image";
import {VideoCard} from "@/components/VideoCard"
import { Geist, Geist_Mono } from "next/font/google";
import { VideoGrid } from "@/components/VideoGrid";
import { Appbar } from "@/components/Appbar";
import { LeftBar } from "@/components/LeftBar";



export default function Home() {
  return (
    <div >
      <div className="h-screen"> 
         <Appbar></Appbar>
      
      <div className="flex">
        <LeftBar></LeftBar> 
        <div className="flex-grow">
        <VideoGrid></VideoGrid>

      </div>
      </div>
      </div>
      
    </div>
  );
}
