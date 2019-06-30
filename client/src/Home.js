import React from 'react';
import { NavLink, Switch, Route ,Redirect} from 'react-router-dom'
import Button from './Button'
import clientSocket from './socket';


class Home extends React.Component{


    render(){
        return(
            <div  >
                <h1 id="header">今天吃甚麼?</h1> 
                <div className="button_list">
                    <Button src="./image/choose.png" id="choose_btn" class="button"  link="/choose" />
                    <Button src="./image/add.png" id="add_btn" class="button"link="/add" />  
                    <Button src="./image/All_map.png" id="all_map_btn" class="button" link="/all_map" />  
                     
                </div>         
            </div> 

        )       
    }
}

export default Home;