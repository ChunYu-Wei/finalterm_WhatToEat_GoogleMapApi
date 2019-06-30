import React from 'react';
import Choose_Restaurant from './Choose_Restaurant.js';
import Add_Restaurant from './Add_Restaurant.js';
import Add_successfully from './Add_successfully.js';
import choose_result from './choose_result.js';
import All_Map from './All_Map.js';
import Choose_Map from './Choose_map';
import Start from './Start';
import Home from './Home.js';
import { Switch, Route ,Redirect} from 'react-router-dom'
import './App.css';


class Restaurant_Finder extends React.Component{
    

    render(){
        return(
            <React.Fragment>
                

                <div id="main_container">
                    
                

                <Switch>
                    <Route path="/home" component={Home} / >
                    <Route exact path="/choose" component={Choose_Restaurant} / >
                    <Route path="/start" component={Start} / >
                    <Route exact path="/choose/choose_result" component={choose_result} / >
                    <Route exact path="/add" component={Add_Restaurant} / >
                    <Route exact path="/add/add_successfully" component={Add_successfully} / >
                    <Route exact path="/all_map" component={All_Map} / >
                    <Route exact path="/choose/choose_result/map" component={Choose_Map} / >
                    <Redirect from="/" to="/start" />
                
                    
        
                </Switch>      
                </div> 
                
            </React.Fragment>
        )       
    }
}

export default Restaurant_Finder;