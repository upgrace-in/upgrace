export default function Footer() {
    return (
        <footer id="contact" className="bg-white" style={{ background: '#8000FF !important', marginTop: 100 + 'px' }}>
            <div className="container">
                <div className="row py-4">
                    <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                        <div id="foot_con">
                            <img src="assets/icon.png" alt="" width="180" className="mb-3" />
                            <br />
                            <p className="font-italic text-muted">"Never Settle For Less Than You Deserve. Even if it means loosing people" <br /><b>- Anonymous</b></p>
                        </div>
                        <ul className="list-inline mt-4">
                            <li className="list-inline-item"><a href="#" target="_blank" title="twitter"><i className="fa fa-twitter"></i></a></li>
                            <li className="list-inline-item"><a href="#" target="_blank" title="facebook"><i className="fa fa-facebook"></i></a></li>
                            <li className="list-inline-item"><a href="#" target="_blank" title="instagram"><i className="fa fa-instagram"></i></a></li>
                            <li className="list-inline-item"><a href="#" target="_blank" title="pinterest"><i className="fa fa-pinterest"></i></a></li>
                            <li className="list-inline-item"><a href="#" target="_blank" title="vimeo"><i className="fa fa-vimeo"></i></a></li>
                        </ul>
                    </div>
                    <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
                        <h6 className="text-uppercase font-weight-bold mb-4">Menu</h6>
                        <ul className="list-unstyled mb-0">
                            <li className="mb-2"><a href="#" className="text-muted">Home</a></li>
                            <li className="mb-2"><a style={{cursor: 'pointer'}} className="serv text-muted">Hands On</a></li>
                            <li className="mb-2"><a style={{cursor: 'pointer'}} className="review text-muted">Reviews</a></li>
                            <li className="mb-2"><a href="#works" className="works text-muted">Works</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
                        <h6 className="text-uppercase font-weight-bold mb-4">Social</h6>
                        <ul className="list-unstyled mb-0">
                            <li className="mb-2"><a target="_blank" href="https://leetcode.com/user7975b/" className="text-muted">Leetcode</a></li>
                            <li className="mb-2"><a target="_blank" href="https://www.linkedin.com/in/itzprince47/" className="text-muted">Linkedin</a></li>
                            <li className="mb-2"><a target="_blank" href="https://twitter.com/PrinceG07237749/" className="text-muted">Twitter</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-4 col-md-6 mb-lg-0">
                        <h6 className="text-uppercase font-weight-bold mb-4">Contact</h6>
                        <p className="text-muted mb-4">
                            <i className="fa fa-envelope"></i>&nbsp;&nbsp;upgrace.in@gmail.com
                            <br />
                            <i className="fa fa-phone"></i>&nbsp;&nbsp;+91 7001-617-004
                        </p>
                    </div>
                </div>
            </div>

            <div className="bg-light py-4">
                <div className="container text-center">
                    <p className="text-muted mb-0 py-2">© Upgrace 2022 All rights reserved</p>
                </div>
            </div>
        </footer>
    )
}