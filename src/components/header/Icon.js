import '../../assets/css/Icon.css'
import { useState } from 'react'

function Icon({username, image, content}){ 
    const[showContent, setShowContent] = useState(false)

    function handleShowContent(){
        setShowContent(!showContent)
    }

    function handleMouseLeave(){
        setShowContent(false)
    }

    return (
        <div className='icon' onMouseLeave={handleMouseLeave}>
            <div className='show' onClick={handleShowContent}>
                <img src={image} alt='icon'></img>
                {username && <div>{username}</div>}
            </div>
            
            <div className={`content ${showContent ? 'visible' : 'hidden'}`}>{content}</div>
        </div>
    )
}

export default Icon