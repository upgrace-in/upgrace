export default function Head(props) {
    return (
        <div className="head_con mx-auto">
            <div onClick={props.handleClick} className="head3 mx-auto itemHeads">{props.heading}</div>
        </div>
    )
}