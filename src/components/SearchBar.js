import searchIcon from '../assets/icon-suffix.png'
import '../assets/css/SearchBar.css'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function SearchBar({width, height}) {
    const [highlightEmpty, setHighlightEmpty] = useState(false)
    const [inputValue, setInput] = useState('')
    const navigate = useNavigate()

    function handleClick(){
        if (!inputValue || inputValue.trim() === ''){
            setHighlightEmpty(true)
        } else {
            navigate(`/result?search=${encodeURIComponent(inputValue)}`)
        }
    }

    function handleInputChange(event){
        setInput(event.target.value)
    }

    useEffect(()=> {
        const urlParams = new URLSearchParams(window.location.search)
        const searchParam = urlParams.get('search')
        if (searchParam){
            setInput(searchParam)
        }
    }, [])

    return (
        <div id="searchBar" style={{width: `${width}px`, height: `${height}px`}} className={highlightEmpty ? 'empty' : ''}>
            <input value={inputValue} type="text" placeholder="Search Energy Documents" id="searchInput" onChange={handleInputChange}></input>
            <img src={searchIcon} id='searchIcon' onClick={handleClick} style={{cursor: 'pointer'}}></img>
        </div>
    )
}

export default SearchBar