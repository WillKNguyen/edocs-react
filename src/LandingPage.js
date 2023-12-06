import Footer from "./components/Footer";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import React, {useState} from 'react'

function LandingPage(){
    const [showTips, setShowTips] = useState(false)

    function handleShowTips(){
        setShowTips(!showTips)
    }

    return(
        <>
            <Header hasSearch={false} username='Will Nguyen'></Header>
            <div className="firstSearchPageContent">
                <SearchBar width={692} height={24}></SearchBar>
                <div className="hintContainer">
                    <div className="hintLink" onClick={handleShowTips}>Search Tips</div>
                    {showTips && (
                        <div className="popover-container">
                            <div className="popover-arrow"></div>
                            <div className="popover-content">
                                <b>License:</b>
                                <br />
                                31000, 12J222, AB0406619
                                <br />
                                <br />
                                <b>UWI:</b>
                                <br />
                                100/06-24-010-19W4/00, 200D093C103J0400, 094-L-08, 010-19W4
                                <br />
                                <br />
                                <b>Area:</b>
                                <br />
                                100040209005W602;100040208505W600, 025-05W3;020-01W3
                                <br />
                                <br />
                                <b>Document Content Search:</b>
                                <br />
                                All:montney completion Alberta -pas -pressure -general
                                <br />
                                All:montney completion "Lost Circulation"
                                <br />
                                All:"15% HCL Acid" AND "86-09W5"
                                <br />
                                <br />
                                <a href="http://www.ihsenergy.ca/support/documentation_ca/EnergyDocs/Content/Searching%20EnergyDocs.htm" target="_blank">Advanced Searches</a>
                            </div>
                        </div>
                     )}
                </div>
            </div>
            <Footer></Footer>
        </>
    )
}

export default LandingPage