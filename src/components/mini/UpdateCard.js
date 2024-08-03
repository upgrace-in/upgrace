export default function UpdateCard(props) {
    return (
        <div className="card col-md-4">
            <div className="card_con">
                {props.src.includes('mp4') ? 
                <video className="card-img-top" controls>
                    <source src={`/websites/${props.src}#t=03`} type="video/mp4" />Your browser does not support the video tag.
                </video> 
                : 
                <img className="card-img-top" src={`/websites/${props.src}`} alt="Card image cap" />}
                <div className="card-body">
                    <a href={props.href == "" ? "/websites/"+props.src : props.href} target="_blank" className="btn btn-primary">OPEN</a>
                </div>
            </div>
        </div>
    )
}