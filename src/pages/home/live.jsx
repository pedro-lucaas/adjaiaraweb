import NavBar from "../../component/Navbar"
import Footer from "../../component/Footer"
import Iframe from "../../component/Iframe"
import { useEffect, useState } from "react";

function Live(props) {
	return <>
	{/* ${data.items[0].id.videoId} */}
		<NavBar />
		<div>
			<section className="section wow fadeIn bg-gr">
				<div className="container-fluid">
					<div className="row d-flex ">
						<div className="col-lg-12 text-center bg-dark">
							<h2>Culto Online</h2>
							<Iframe />
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


export default Live;