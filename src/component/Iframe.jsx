import LoadingGif from "./Loading";

function iframeVideo({ data }) {


	if (!data) return <>
		<section className="bg-dark-2 " style={{ padding: '20vh' }}>
			<div className="text-center">
				<LoadingGif />
			</div>
		</section>
	</>
	return <>
		<div className="col container-live bg-dark-2 text-center">
			<iframe
				width="70%"
				height="100%"
				src={`https://www.youtube.com/embed/${data[0].id.videoId}`}
				title="YouTube video player"
				frameBorder="0"
				allow="accelerometer; autoPlay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				allowFullScreen
			></iframe>
		</div>
	</>
}
export default iframeVideo;

