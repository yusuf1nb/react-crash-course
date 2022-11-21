import { Link } from 'react-router-dom'

function Nav(){
    return (<nav>
        <Link to="/">Home</Link>
        <Link to="/users/Ronny">Ronny</Link>
        <Link to="/users/Jake">Jake</Link>
        <Link to="/users/Messi">Messi</Link>
      </nav>)
}

export default Nav