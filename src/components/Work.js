import data from './mini/data.json'
import { useState, useEffect, useTransition } from 'react'
import Workcard from './mini/Workcard'
import Head from './mini/Head'
import $ from 'jquery'

export function WorkCon(props) {

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
                    if (heads[i]['code'] === code) {
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
        <div id="works" className='text-center container mx-auto' style={{ marginTop: props.sec ? '0px' : 150 + 'px' }}>
            <div className="cards text-center mx-auto col-md-12">
                {props.hide && <img className="mx-auto dots_img" style={{ width: 8 + '%' }} src="assets/dots.png" alt="image not found" />}
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
    )
}

export function Work() {

    return (
        <div className="overlay work_con">
            <div className="cls_con stagger work_stagger">
                <i className="w_clsbtn fas fa-arrow-circle-left"></i>
            </div>

            <div className="stagger work_stagger con_cards" style={{ marginTop: 100 + 'px' }}>
                {WorkCon({ hide: true, sec: true })}
            </div>
        </div>
    )
}