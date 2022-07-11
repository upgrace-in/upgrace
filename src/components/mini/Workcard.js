import UpdateCard from './UpdateCard'
import data from './data'

export default function Workcard(props) {

    function updateCards() {
        let code = props.code
        let samples = data[1]["data"]
        let sampleArr = []
        for (let j = 1; j < samples.length; j++) {
            if (samples[j]["code"] == code) {
                sampleArr.push(<UpdateCard key={j} src={samples[j]["src"]} href={samples[j]["link"]} />)
            }
        }
        return sampleArr
    }

    return (
            <div className="cards text-center mx-auto col-md-12">
                <div className="row">
                    {updateCards()}
                </div>
            </div>
    )
}