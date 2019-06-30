import React from 'react';
import { NavLink, Switch, Route ,Redirect} from 'react-router-dom'
import Button from './Button'

class Start extends React.Component{
    render(){
        return(
            <div>                      
                    <div class="button_list">
                        <Button id="start_btn"  src="./image/home.png" link="/home" Onclick={this.Start} />
                    </div>
                    <div>
                        <img id="start_img" src='https://www.pkstep.com/wp-content/uploads/2017/01/eat-what-App.png'></img>
                    </div>
            </div>

        )       
    }
}

export default Start;