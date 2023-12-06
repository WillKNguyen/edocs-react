import spglogo from '../../assets/Logo.png'
import '../../assets/css/Branding.css'

function Branding(){
    function openLink(){
        window.open('https://www.spglobal.com/en/', '_blank')
    }

    return (
        <div className='branding'>
            <img src={spglogo} className='sp-logo' onClick={openLink} style={{cursor: 'pointer'}}></img>
            <div className='divider'></div> 
            <div className='appName'>Energy Documents</div>
        </div>
    )
}

export default Branding