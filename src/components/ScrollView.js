import React from "react"

class ScrollView extends React.Component {
  render(){
    return(
      <div className="list-group-flush">
        <ChatList />
        <ChatList />
        <ChatList />
      </div>
    )
  }
}

const ChatList = () =>{
  return(
    <div className="list-group-item d-flex justify-content-start">
      <i className="fas fa-user fa-2x"></i>
      <div className="ml-4 w-100">
        <div className="d-flex justify-content-between">
          <span className="font-weight-bold">
          Username
          </span>
          <span className="small">
          12:00 am
          </span>
        </div>
        <div className="text-secondary">
          <span>
            Lorem Ipsum Cheksum Veksum...
          </span>
        </div>
      </div>
    </div>
  )
}

export default ScrollView