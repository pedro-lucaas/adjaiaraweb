import { useEffect, useState } from "react";
import LoadingGif from "./Loading";

function iframeVideo(props) {
	const [data, setData] = useState(null)
	const [isLoading, setLoading] = useState(false)

	useEffect(() => {
		setLoading(true)
		fetch('/api/youtubeV3')
			.then((res) => res.json())
			.then((data) => {
				setData(data.response)
				setLoading(false)
			})
	}, [])

	if (isLoading) return <>
		<section className="bg-dark-2 " style={{ padding: '20vh' }}>
			<div className="text-center">
				<LoadingGif />
			</div>
		</section>
	</>
	if (!data) return <>
		<section className="bg-dark-2" style={{ padding: '20vh' }}>
			<p className="text-center">Desculpe! Ocorreu um problema</p>
		</section>
	</>
	return <div className="bg-dark-2 p-1">
		<div className="text-center container">

		<iframe width="70%" height="100%" src={`https://www.youtube.com/embed/${data[0].id.videoId}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
		</div>
	</div>
}

export default iframeVideo;