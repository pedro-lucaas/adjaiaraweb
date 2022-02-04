import NavBar from "../../component/Navbar"
import Footer from "../../component/Footer"
import Iframe from "../../component/Iframe"

function Live(props) {
	return <>

		<NavBar />
		<div>
			<section className=" wow fadeIn container-fluid bg-dark-2" style={{paddingTop:'12vh'}}>
				<div className="d-flex flex-column">

					<div className="text-center border-white-t">
						<h1 className="text-white py-4 fw-bold">Culto Online</h1>
					</div>
					<div className="border-white-x">
						<Iframe />
					</div>

					<div className="text-white text-center py-5 border-white-b">
						<h3><span className="color fw-normal"> Programação AD JAIARA WEBTV:</span></h3>
						<p><b>Domingo</b> - Culto às 10:00h, 18:00h e 20:00h</p>
						<p><b>Terça</b> - Culto às 19:30h</p>
						<p><b>Quinta</b> - Culto às 19:30h</p>
					</div>
				</div>

			</section>
		</div>
		<Footer />
	</>
}


export default Live;