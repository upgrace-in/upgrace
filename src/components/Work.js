import data from './mini/data'
import { useState, useEffect, useRef, useTransition } from 'react'
import Workcard from './mini/Workcard'
import Head from './mini/Head'
import $ from 'jquery'

export default function Work() {

    const [eles, setEles] = useState([""])
    const [isPending, startTransition] = useTransition();

    function getHeads() {
        const heads = data[0]["data"]
        const arr = []
        for (let i = 0; i < heads.length; i++) {
            arr.push(<Head key={i} handleClick={(e) => pushData(e.target, heads[i]["code"])} heading={heads[i]["heading"]} />)
        }
        return arr
    }

    function pushData(e, code) {
        $('.itemHeads').removeClass("headActive")
        $(e).addClass("headActive")
        const heads = data[0]["data"]
        startTransition(() => {
            setEles(prevEle => {
                const arr = []
                for (let i = 0; i < heads.length; i++) {
                    if (heads[i]['code'] == code) {
                        arr.push(<Workcard key={i} code={heads[i]["code"]} />)
                    }
                }
                return arr
            });
        });
    }

    useEffect(() => {
        pushData('.itemHeads:eq(0)', 'W3')
    }, [])

    return (
        <div className="overlay work_con">
            <div className="cls_con stagger work_stagger">
                <i className="w_clsbtn fas fa-arrow-circle-left"></i>
            </div>

            <div className="container mx-auto stagger work_stagger con_cards" style={{ marginTop: 100 + 'px' }}>
                <div className="cards text-center mx-auto col-md-12">
                    <img className="mx-auto dots_img" style={{ width: 8 + '%' }} src="assets/dots.png" alt="image not found" />
                    <h3>Recent Projects</h3>
                    <p>Who are in extremely love with eco friendly system.</p>
                    <br />
                    <div className="row col-md-6 text-center mx-auto">
                        {getHeads()}
                    </div>
                    <br /><br />
                    {isPending ? " Loading..." : null}
                    {eles}
                </div>
            </div>
        </div>
    )
}