import React from 'react';

const LogoMain = '/assets/images/adjaiara-logo2.png'

export default function Footer() {
    const today = new Date().getFullYear()
    
    return (
        <footer id="footer" className="bg-one footer">
            <div className="container">
                <div className="wow fadeInUp" data-wow-duration="500ms">
                    <div className="">

                        {/* copyright */}
                        <div className="copyright text-center">
                            <a href="/">
                                <img src={LogoMain} alt="AD Jaiara" />
                            </a>
                            <span className="logo-title">AD <b>JAIARA</b></span>
                            <br />
                        
                            <p>&copy;{today} . Todos os direitos reservados.
                                <a href="http://www.adjaiara.org"> Assembleia de Deus Vila Jaiara</a>.
                            </p>
                        </div>
                        {/* /copyright */}

                    </div> {/* end col lg 12 */}
                </div> {/* end row */}
            </div> {/* end container */}
        </footer>
    )
}