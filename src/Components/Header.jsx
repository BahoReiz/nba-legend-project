import nbalogo from '../images/nba-logo.png'
import './_header.scss'


function Header() {
  return (
    <div className='header-container'>
        <img src={nbalogo} alt="" />
        
        <form action="">
            <input type="text" placeholder='Search Player ...'/>
        </form>

    </div>
  )
}

export default Header