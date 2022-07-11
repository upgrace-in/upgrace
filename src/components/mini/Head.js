export default function Head(props) {
    return (
        <div onClick={props.handleClick} className="head3 mx-auto itemHeads">{props.heading}</div>
    )
}