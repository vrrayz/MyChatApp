import React from "react"

const Tabs = () =>{
	return(
	  <div className="row">
	    <div className="col-1 text-center px-1 pt-2">
	      <span className="fas fa-camera"></span>
	    </div>
	    <div className="col-11">
	      <MainTabs />
	    </div>
	  </div>
	)
}
const MainTabs = () =>{
  return(
    <div className="row">
	    <div className="col-4 text-center p-2">
	      <h6>CHATS</h6>
	    </div>
	    <div className="col-4 text-center p-2">
	      <h6>STATUS</h6>
	    </div>
	    <div className="col-4 text-center p-2">
	      <h6>CALLS</h6>
	    </div>
	  </div>
  )
}
export default Tabs