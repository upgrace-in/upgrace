export default function MOBNav(props) {

    return (
        <div className="animate__animated nav_mob text-center mx-auto" style={{
            paddingTop: 100 + 'px'
        }}>
            <div onClick={props.hide_nav} className="cls_con2">
                <i className="fas fa-times"></i>
            </div>
            <a className="nv navbar-brand" href="#">upgrace</a>
            <ul className="navbar-nav ml-auto text-left" style={{ padding: 40 + 'px' }}>
                <li className="nav-item">
                    <a href=" " className="nv nav-link">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                    <a className="serv nv nav-link">Hands&nbsp;On</a>
                </li>
                <li className="nav-item">
                    <a href="#works" onClick={props.hide_nav} className="works nv nav-link">Works</a>
                </li>
                <li className="nav-item">
                    <a className="review nv nav-link">Testimonials</a>
                </li>
                <li className="nav-item">
                    <a href="#contact" onClick={props.hide_nav} className="contact nv nav-link">Contact</a>
                </li>
                <li className="nav-item bt_spec bt_spec2">
                    <a target="_blank" href="https://fiverr.com/thedesiretree" className="bt nav-link">Order Now</a>
                </li>
            </ul>
        </div>
    )
}