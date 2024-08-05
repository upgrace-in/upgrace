export default function Footer() {
    return (
        <footer id="contact" className="bg-white" style={{ background: '#8000FF !important', marginTop: 100 + 'px' }}>
            <div className="container">
                <div className="row py-4">
                    <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                        <div id="foot_con">
                            <img src="assets/logo 2.png" alt="" width="180" className="mb-3" />
                            <br />
                            <p className="font-italic text-muted">"Never Settle For Less Than You Deserve. Even if it means loosing people" <br /><b>- Anonymous</b></p>
                        </div>
                        {/* <ul className="list-inline mt-4">
                            <li className="list-inline-item"><a href="#" target="_blank" title="twitter">Terms & Conditions</a></li>
                            <li className="list-inline-item"><a href="#" target="_blank" title="facebook">Privacy Policy</a></li>
                            <li className="list-inline-item"><a href="#" target="_blank" title="instagram">Contact Us</a></li>
                        </ul> */}
                    </div>
                    <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
                        <h6 className="text-uppercase font-weight-bold mb-4">Menu</h6>
                        <ul className="list-unstyled mb-0">
                            <li className="mb-2"><a href="#" className="text-muted">Home</a></li>
                            <li className="mb-2"><a style={{cursor: 'pointer'}} className="serv text-muted">Hands On</a></li>
                            <li className="mb-2"><a style={{cursor: 'pointer'}} className="review text-muted">Reviews</a></li>
                            <li className="mb-2"><a href="#works" className="works text-muted">Works</a></li>
                            <li className="mb-2"><a href="/TermsandConditions" class="text-muted" target="_blank">Terms & Conditions</a></li>
                            <li className="mb-2"><a href="/RefundandCancellation" class="text-muted" target="_blank">Privacy Policy</a></li>
                            <li className="mb-2"><a href="/ContactUs" class="text-muted" target="_blank">Contact Us</a></li>
                            
                        </ul>
                    </div>
                    <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
                        <h6 className="text-uppercase font-weight-bold mb-4">Social</h6>
                        <ul className="list-unstyled mb-0">
                        <li className="mb-2"><a target="_blank" href="https://github.com/upgrace-in" className="text-muted">Github</a></li>
                            <li className="mb-2"><a target="_blank" href="https://leetcode.com/user7975b/" className="text-muted">Leetcode</a></li>
                            <li className="mb-2"><a target="_blank" href="https://www.linkedin.com/in/itzprince47/" className="text-muted">Linkedin</a></li>
                            <li className="mb-2"><a target="_blank" href="https://twitter.com/PrinceG07237749/" className="text-muted">Twitter</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-4 col-md-6 mb-lg-0">
                        <h6 className="text-uppercase font-weight-bold mb-4">Contact</h6>
                        <p className="text-muted mb-4">
                            <i className="fa fa-envelope"></i>&nbsp;&nbsp;<a href="mailto:upgrace.in@gmail.com">upgrace.in@gmail.com</a>
                            <br />
                            <i className="fa fa-phone"></i>&nbsp;&nbsp;<a href="tel:+917001617004">+91 7001617004</a>
                        </p>
                    </div>
                </div>
            </div>

            <div className="bg-light py-4">
                <div className="container text-center">
                    <p className="text-muted mb-0 py-2">© Upgrace 2022</p>
                </div>
            </div>
        </footer>
    )
}