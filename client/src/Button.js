import React from 'react';
import { NavLink, Switch, Route ,Redirect} from 'react-router-dom'

class Button extends React.Component{
    render(){
        return(
            <div>
                <NavLink to={this.props.link}>
                    
                        <img  id={this.props.id} className={this.props.class} onClick={this.props.onClick} src={this.props.src}>
                        </img>
                   
                </NavLink>
            </div>

        )       
    }
}

export default Button;