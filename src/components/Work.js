import data from './mini/data'
import useEffect from 'react'
import Workcard from './mini/Workcard'

export default function Work() {

    function getHeads() {
        const heads = data[0]["data"]
        const arr = []
        for (let i = 0; i < heads.length; i++) {
            arr.push(<Workcard key={i} heading={heads[i]["heading"]} code={heads[i]["code"]} />)
        }
        return arr
    }

    return (
        <div className="overlay work_con">
            <div className="cls_con stagger work_stagger">
                <i className="w_clsbtn fas fa-arrow-circle-left"></i>
            </div>

            <div className="container mx-auto stagger work_stagger con_cards" style={{ marginTop: 100 + 'px' }}>
                {getHeads()}
            </div>
        </div>
    )
}