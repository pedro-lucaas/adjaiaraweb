import NavBar from "../../component/Navbar"
import Footer from "../../component/Footer"

export default function Live() {	
	return <>
    <NavBar />
    <div>
		<section className="section wow fadeIn bg-gr">
			<div className="container-fluid">
				<div className="row d-flex ">
					<div className="col-lg-12 text-center bg-dark">
						<h2>Culto Online</h2>
						<div className="col video-culto-online  align-self-center text-center">
							<iframe width="70%" height="100%" src="https://www.youtube.com/embed/" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
						</div>
					</div>
					<div className="col-lg-12 text-center">
						
							<h3>Programação AD JAIARA WEBTV:</h3>
						
						<p><b>Domingo</b> - Culto às 10:00h, 18:00h e 20:00h</p>
						<p><b>Terça</b> - Culto às 19:30h</p>
						<p><b>Quinta</b> - Culto às 19:30h</p>
					</div>
				</div>
			</div>
		</section>
	</div>
    <Footer />
    </>
}