import Icon from "./header/Icon";
import SearchBar from "./SearchBar";
import Branding from "./header/Branding";
import '../assets/css/Header.css'
import userIcon from '../assets/user-icon.png'
import settingIcon from '../assets/setting-icon.png'
import searchIcon from '../assets/icon-suffix.png'
import Option from "./header/Option";
import { useState } from "react";

function Header({hasSearch, username, columns=[], handleColumnToggle, handleSelectAllColumns}) {
    const defaultOptions = ['Select All', ...columns]
    const [options, setOptions] = useState(defaultOptions)

    function onclickSelectAll(){
        handleSelectAllColumns()
        toggleOptionColumns()
    }

    function toggleOptionColumns(){
        const selectAllElement = document.getElementById('selectall')
        console.log(selectAllElement.checked)
        const columnOptionsElements = document.getElementsByClassName('columnOption')
        const checkboxArray = Array.from(columnOptionsElements)

        checkboxArray.forEach((checkbox) => {
            if (checkbox.checked !== selectAllElement.checked){
                checkbox.checked = !checkbox.checked
            }}
        )
    }

    function handleSearchOptionColumn(value){
        setOptions(prevOptions => {
            if (value.length === 0){
                return defaultOptions
            }
            const filteredOptions = prevOptions.filter(option => option.toLowerCase().includes(value.toLowerCase()))
            return filteredOptions
        })
    }

    const profileLinksContent = (
        <div className='links'>
            <div>Close Energy Documents</div>
            <h4>My Subscriptions</h4>
            <div>AB Energy Documents</div>
            <div>AB Pressure Documents</div>
            <div>BC Energy Documents</div>
            <div>MB Energy Documents</div>
            <div>SK Energy Documents</div>
            <div>TER Energy Documents</div>
            <div>TER Energy Documents</div>
        </div>
    )

    const settingsContent = (
        <div className="settings">
            <h3>Settings</h3>
            <div>Reset Grid</div>
            <h4>Column Visibility</h4>

            <div id="columnSearchBox">
                <input type="text" placeholder="Search Columns..." id="columnInput" onChange={(e) => handleSearchOptionColumn(e.target.value)}></input>
                <img src={searchIcon} id='searchIcon' style={{cursor: 'pointer'}}></img>
            </div>

            <div id="options">
                {options.map((option) => {
                    if (option === 'Select All'){
                        return <Option value='Select All' bold='1' action={onclickSelectAll}></Option>
                    } else {
                        return <Option value={option} action={() => handleColumnToggle(option)}></Option>
                    }
                })}
            </div>
        </div>
    )

    return (
        <div className="header">
            <Branding></Branding>
            {hasSearch && (<SearchBar width={317} height={32}></SearchBar>)}
            <div className='icons'>
                {hasSearch && (
                    <Icon image={settingIcon} content={settingsContent}></Icon>
                )}
                <Icon username={username} image={userIcon} content={profileLinksContent}></Icon>
            </div>
        </div>
    )
}

export default Header