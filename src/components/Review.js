import SS from './mini/SS'

export default function Review() {

    function reviewElements() {
        let arr = [];
        for(let i=1; i < 25; i++){
            arr.push(<SS key={i} src={`upgrace_s${i}`} />)
        }
        return arr
    }

    return (
        <div className="overlay review_con">
            <div className="cls_con stagger review_stagger">
                <i className="r_clsbtn fas fa-arrow-circle-left"></i>
            </div>
            <div className="text-center container mx-auto stagger review_stagger con_cards" style={{ marginTop: 100 + 'px' }}>
                <br />
                <img className="mx-auto dots_img" style={{ width: 8 + '%' }} src="assets/dots.png" alt="image not found" />
                <br />
                <div className="head3">
                    Genuine Reviews (from <a href="https://fiverr.com" target="_blank">fiverr.com</a>)
                </div>
                <br /><br /><br />
                {/* Swiper */}
                <div className="swiper">

                    <div className="swiper-wrapper">
                        {reviewElements()}
                    </div>

                    <div className="swiper-pagination"></div>


                    <div className="swiper-button-prev"></div>
                    <div className="swiper-button-next"></div>


                    <div className="swiper-scrollbar"></div>
                </div>
                {/* Swiper */}
            </div>
        </div>
    )
}