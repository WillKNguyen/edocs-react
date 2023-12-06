function Option({value, bold, action}){
    const elementId = value.toLowerCase().replace(/\s+/g, '')

    return(
        <div style={{display: 'flex', alignItems: 'center'}}>
            <input type="checkbox" onClick={action} id={elementId} defaultChecked={true} className={bold? '' : 'columnOption'}></input>
            {bold ? <b>{value}</b> : <span>{value}</span>}
        </div>
    )
}

export default Option