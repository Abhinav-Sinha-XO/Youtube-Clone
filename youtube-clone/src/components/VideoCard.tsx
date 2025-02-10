
export function VideoCard(props: any){
  return(
    <div className="hover:cursor-pointer ">
      <img className="rounded-xl pl-3 " src={props.image}></img>
      <div className="grid grid-cols-12 pt-2">
        
          <div className="col-span-1">
          <img 
            className="rounded-full w-10 h-10 object-cover pr-" 
            src={props.Thumbimage}
            alt={`${props.author} channel avatar`}
          />
        </div>
          <div className="col-span-11 pl-4 pb-4 ">
            <div >
              {props.title}
            </div>
            <div className="col-span-11  text-base text-gray-600 "> 
              {props.author}
            </div>
            <div className="col-span-11   text-base text-gray-600">
              {props.views} | {props.timestamp}
            </div>
        </div>

        
      </div>
      
    </div>
  )
}

