import SS from './mini/SS'

export function ReviewCon(props) {

    function reviewElements() {
        let arr = [];
        for (let i = 1; i < 25; i++) {
            arr.push(<SS key={i} src={`upgrace_s${i}`} />)
        }
        return arr
    }

    return (
        <div className='text-center container mx-auto' style={{marginTop: props.sec ? '0px' : 150+'px'}}>
            {props.hide && <img className="mx-auto dots_img" style={{ width: 8 + '%' }} src="assets/dots.png" alt="image not found" />}
            <h3>Genuine Reviews</h3>
            <p>(from <a href="https://fiverr.com/thedesiretree/" target="_blank">fiverr.com</a>)</p>
            <br />
            <br />
            <div className="swiper">

                <div className="swiper-wrapper">
                    {reviewElements()}
                </div>

                <div className="swiper-pagination"></div>


                <div className="swiper-button-prev"></div>
                <div className="swiper-button-next"></div>


                <div className="swiper-scrollbar"></div>
            </div>
        </div>
    )
}

export function Review() {

    return (
        <div className="overlay review_con">
            <div className="cls_con stagger review_stagger">
                <i className="r_clsbtn fas fa-arrow-circle-left"></i>
            </div>
            <div className="stagger review_stagger con_cards" style={{ marginTop: 100 + 'px' }}>
                {ReviewCon({hide: true, sec: true})}
            </div>
        </div>
    )
}