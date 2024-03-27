import { useState } from 'react'
import './_playerCard.scss'

const PlayerCard = ({name, img, statistics}) => {
  const[showStats, setShowStats] = useState(false);
  
  function clickContainer () {
    setShowStats(!showStats)
  }

  return (
    <div onClick={clickContainer} className="player-container">

        {showStats ? (<div className='statistics'>{statistics.map((data) => {
          return <p>{data}</p>
        })}
        </div>): (<div className='default-stats'>
          <img src={img} alt="" />
        <h3>{name}</h3>
        </div>)}

    </div>
  )
}

export default PlayerCard