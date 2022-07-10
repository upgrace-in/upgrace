export default function SS(props){
    return (
        <div className="swiper-slide">
            <img className="reviewEles" src={`proof/${props.src}.jpg`} alt=""/>
        </div>
    )
}