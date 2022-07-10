import PCNav from './mini/PCNav'
import MOBNav from './mini/MOBNav'

export default function Navbar(props) {

    return (
        <div>
            <MOBNav {...props} />
            <PCNav {...props} />
        </div>
    )
}