import React from 'react'
import './SideBar.css'

function SideBar() {
  return (
  <div>
    <div className='container-fluid'>
        <div class="panel panel-default">
            <div class="panel-heading"><h3 id="heading">Acmy Solutions</h3></div>
            <div class="panel-body">
                <div className="frame61">
                    <div className="frame56">
                        <div className="frame55"><span className="dashboard"><img id="dashboardicon" src="" alt=""></img></span><p id="dashboardtext">Dashboard</p></div>                        
                    </div>
                </div>
            </div>
        </div>     
    </div>

    <div className="frame1743">
            <h3 id="welcome">Welcome Back, Jhon Doe</h3>
            <p id="welcomenote">The end of the year is coming. Are you planning your performance interviews? You can do this super efficiently with Acmy.<br/>
                <a id="link" href="http://localhost:3000/">Look here for more information</a></p>
            <div className="group1770">
                <img id="round1" src="/image/round01.png" alt=""></img>
                <img id="round2" src="/image/round02.png" alt=""></img>
                <img id="round3" src="/image/round03.png" alt=""></img>
                <img id="round4" src="/image/round04.png" alt=""></img>
                <img id="round5" src="/image/round05.png" alt=""></img>
            </div>
            <div className="close"><img id="closeicon" src="/image/close.png" alt="close"></img></div>
        </div>
  </div>  
  )
}

export default SideBar
