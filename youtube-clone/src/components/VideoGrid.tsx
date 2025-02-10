import { VideoCard } from "./VideoCard"

const VIDEOS = [{
  title:"Apex Legends| 4-3 linear | India",
      image:"photo.jpg",
      Thumbimage:"Thumb.jpg",
      author:"Abhinav Sinha",
      views:"100k",
      timestamp:"2 days ago",
},{
  title:"Apex Legends| 4-3 linear | India",
      image:"photo.jpg",
      Thumbimage:"Thumb.jpg",
      author:"Abhinav Sinha",
      views:"100k",
      timestamp:"2 days ago",
},{
  title:"Apex Legends| 4-3 linear | India",
      image:"photo.jpg",
      Thumbimage:"Thumb.jpg",
      author:"Abhinav Sinha",
      views:"100k",
      timestamp:"2 days ago",
},{
 title:"Apex Legends| 4-3 linear | India",
      image:"photo.jpg",
      Thumbimage:"Thumb.jpg",
      author:"Abhinav Sinha",
      views:"100k",
      timestamp:"5 days ago"}
,{
  title:"how to learn swimming in 30 days| 30day plan | Code with",
      image:"photo.jpg",
      Thumbimage:"Thumb.jpg",
      author:"Abhinav Sinha",
      views:"100k",
      timestamp:"2 days ago",
},
,{
  title:"how to learn swimming in 30 days| 30day plan | Code with",
      image:"photo.jpg",
      Thumbimage:"Thumb.jpg",
      author:"Abhinav Sinha",
      views:"100k",
      timestamp:"2 days ago",
},
,{
  title:"how to learn swimming in 30 days| 30day plan | Code with",
      image:"photo.jpg",
      Thumbimage:"Thumb.jpg",
      author:"Abhinav Sinha",
      views:"100k",
      timestamp:"2 days ago",
},
,{
  title:"how to learn swimming in 30 days| 30day plan | Code with",
      image:"photo.jpg",
      Thumbimage:"Thumb.jpg",
      author:"Abhinav Sinha",
      views:"100k",
      timestamp:"2 days ago",
},
,{
  title:"how to learn swimming in 30 days| 30day plan | Code with",
      image:"photo.jpg",
      Thumbimage:"Thumb.jpg",
      author:"Abhinav Sinha",
      views:"100k",
      timestamp:"2 days ago",
},
,{
  title:"how to learn swimming in 30 days| 30day plan | Code with",
      image:"photo.jpg",
      Thumbimage:"Thumb.jpg",
      author:"Abhinav Sinha",
      views:"100k",
      timestamp:"2 days ago",
},
,{
  title:"how to learn swimming in 30 days| 30day plan | Code with",
      image:"photo.jpg",
      Thumbimage:"Thumb.jpg",
      author:"Abhinav Sinha",
      views:"100k",
      timestamp:"2 days ago",
},
,{
  title:"how to learn swimming in 30 days| 30day plan | Code with",
      image:"photo.jpg",
      Thumbimage:"Thumb.jpg",
      author:"Abhinav Sinha",
      views:"100k",
      timestamp:"2 days ago",
}]

export const VideoGrid =()=>{
  return <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">
    {VIDEOS.map(video => <div>
      <VideoCard title={video.title}
      image={video.image}
      Thumbimage={video.Thumbimage}
      author={video.author}
      views={video.views}
      timestamp={video.timestamp}>
      
      </VideoCard>

    </div>)}

  </div>
}