import NavBar from "../../component/Navbar"
import Footer from "../../component/Footer"
import Contact from "../../component/Contact"
import Iframe from "../../component/Iframe"

function Live(props) {
	return <>

		<NavBar />
		<div>
			<section className=" wow fadeIn container-fluid bg-dark-2" style={{paddingTop:'12vh'}}>
				<div className="d-flex flex-column">

					<div className="text-center border-white-t">
						<h1 className="title-live fs-3 mb-5 mt-4">CULTO ONLINE</h1>
					</div>
					<div className="border-white-x fs-5">
						<Iframe />
					</div>

					<div className="text-center py-5 border-white-b fs-6 footer-live mt-4">
						<h2 className="fs-4 color">Programação AD JAIARA WEBTV:</h2>
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