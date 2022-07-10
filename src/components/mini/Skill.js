export default function Skill(props) {
    return (
        <li>
            <div className="row">
                <div className="col-1">
                    <i className="far fa-check-circle"></i>
                </div>
                <div className="col-10">
                    <span className="se-t">{props.skill}</span>
                </div>
            </div>
        </li>
    )
}