import {data} from '../helper/data'
import PlayerCard from './PlayerCard'
import './_cardContainer.scss'

const CardContainer = () => {
    return (
        <div className='card-container'>
            {data.map(info => {
                return <PlayerCard {...info} />
            {/* return <PlayerCard info = {info} /> */}
            })}

        </div>
    )
}

export default CardContainer