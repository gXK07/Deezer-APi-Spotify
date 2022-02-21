import './menu.css';
import { Link } from "react-router-dom";
import { useState } from 'react';
import {ReactComponent as IconMusic} from "../assets/music_note_black_24dp (1).svg"
import {ReactComponent as Iconlike} from "../assets/favorite_border_black_24dp.svg"

const Menu = () => {
    const [colorMusic, setColorMusic] = useState('#fffff');
    const [colorLike, setColorLike] = useState('#fffff');
    return <div className="menu">
        <div className='tabs'>
        
            <Link to='./Music' className='Music tab'
            onMouseEnter={() => setColorMusic('#fd4545')}
            onMouseLeave={() => setColorMusic('#fffff')}
             >
                <IconMusic className="image" fill={colorMusic} alt="icon_music"></IconMusic>
                <div className='text'>Music</div>
            </Link>
            <Link to='./Like' className='Like tab'
                        onMouseEnter={() => setColorLike('#fd4545')}
                        onMouseLeave={() => setColorLike('#fffff')}
            >
                <Iconlike className="image" fill={colorLike}alt="icon_like"></Iconlike>
                <div className='text'>Liked</div>
            </Link>
        </div>
    </div>
}

export default Menu