import { useState } from 'react'
import '../assets/css/Footer.css'
import spg_footer from '../assets/spg_footer.svg'

function Footer(){
    const [showLinks, setShowLinks] = useState(false)
    const [upsideDown, setUpsideDown] = useState(false)

    function handleShowLinks(){
        setShowLinks(!showLinks)
    }

    function openLink(){
        window.open('https://www.spglobal.com/en/', '_blank')
    }

    function rotateIcon(){
        setUpsideDown(!upsideDown)
    }

    return (
        <div className="footer">
            <div className='top'> 
                © 2023, S&P Global. All rights reserved. Reproduction in whole or part without permission is prohibited.
                <svg cursor='pointer' onClick={() => {handleShowLinks(); rotateIcon()}} className={upsideDown ? 'rotate' : ''}
                    xmlns="http://www.w3.org/2000/svg" height="16" width="16" 
                    viewBox="0 0 512 512">
                    <path opacity="1" fill="#FFFFFF" d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"/>
                </svg>   
            </div>
            {showLinks && (
            <div className='bottom'>
                <div className='links'>
                    <a href='https://ihsmarkit.com/legal/terms-of-use.html'>Terms of Use</a>
                    <div>|</div>
                    <a href='https://ihsmarkit.com/legal/privacy-policy.html'>Privacy Policy</a>
                    <div>|</div>
                    <a href='https://ihsmarkit.com/about/contact-us.html'>Customer Care</a>
                </div>
                <img src={spg_footer} onClick={openLink} style={{cursor: 'pointer'}}></img>
            </div>
        )}
        </div>
    )
}

export default Footer