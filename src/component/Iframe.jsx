import { useEffect, useState } from "react";

function iframeVideo(props){
    const [data, setData] = useState(null)
	const [isLoading, setLoading] = useState(false)

	useEffect(()=>{
		setLoading(true)
		fetch('/api/youtubeV3')
		.then((res) => res.json())
		.then((data) =>{
			setData(data)
			setLoading(false)	
		})
	}, [])
	if (isLoading) return <p>Loading ...</p>
	if(!data) return <p>Ocorreu um problema</p>
    return <div className="col video-culto-online  align-self-center text-center">
    <iframe width="70%" height="100%" src={`https://www.youtube.com/embed/${data.items[0].id.videoId}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
</div>
}

export default iframeVideo;