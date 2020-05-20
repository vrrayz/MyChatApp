import React from 'react'

class NavigationBar extends React.Component{
    render(){
        return(
            <nav className="d-flex justify-content-between pt-2">
                <h4>MyChatApp</h4>
                <div className="d-flex justify-content-end">
                    <i className="fas fa-search mx-3 mt-2"></i>
                    <i className="fas fa-ellipsis-v mx-2 mt-2"></i>
                </div>
            </nav> 
        )
    }
}

export default NavigationBar