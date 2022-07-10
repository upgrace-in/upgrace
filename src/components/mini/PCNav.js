export default function PCNav(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">upgrace</a>
            <img onClick={props.show_nav} className="bars" style={{ width: 50 + 'px' }} src="assets/bars.png" alt="" />
            <img onClick={props.hide_nav} className="bars2" style={{ display: 'none', width: 50 + 'px' }} src="assets/bars2.png" alt="" />
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <a href=" " className="nav-link">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="serv nav-link">Hands&nbsp;On</a>
                    </li>
                    <li className="nav-item">
                        <a className="works nav-link">Works</a>
                    </li>
                    <li className="nav-item">
                        <a className="review nav-link">Reviews</a>
                    </li>
                    <li className="nav-item">
                        <a className="contact nav-link">Contact</a>
                    </li>
                    <li className="nav-item bt_spec">
                        <a target="_blank" href="https://fiverr.com/thedesiretree" className="bt nav-link">Fiverr</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}