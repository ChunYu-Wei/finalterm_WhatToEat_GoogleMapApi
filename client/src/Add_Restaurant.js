import React from 'react';

import Button from './Button'

import clientSocket from './socket';



class Add_Restaurant extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            filled : false,
            linking : "/add"
        }
    }

    Add = () => {
        const res_name = document.getElementById("name_add_input");
        const res_price = document.getElementById("price_add_input");
        const res_main_dish = document.getElementById("main_dish_add_select");
        const res_distance = document.getElementById("distance_add_select");
        const res_drink = document.getElementById("drink_add_select");
        const res_lat = document.getElementById("lat_add_input");
        const res_lng = document.getElementById("lng_add_input");
        var name = res_name.value; 
        var main_dish = res_main_dish.options[res_main_dish.selectedIndex].value;
        var drink = res_drink.options[res_drink.selectedIndex].value;
        if(res_price.value === ""){
            var price = 10000;
        }
        else{
            
            var price = parseInt(res_price.value); 
        }
        if(res_lat.value === ""){
            var lat = 10000;
        }
        else{
            var lat = parseFloat(res_lat.value);
        }
        if(res_lng.value === ""){
            var lng = 10000;
        }
        else{
            var lng = parseFloat(res_lng.value);
        }
        if(res_distance.options[res_distance.selectedIndex].value === "default"){

            var distance = 5000;
        }
        else{
            var distance = parseInt(res_distance.options[res_distance.selectedIndex].value);
        }
        if((name === "" )||( price === 10000)||(main_dish === "default")||(distance === 5000) ||(drink === "default")||(lat === 10000)||(lng === 10000)){
            alert("新增失敗，有未填的欄位");
        }
        else{
            alert("新增成功");
            res_name.value = ""; 
            res_price.value = ""; 
            res_main_dish.selectedIndex = 0;
            res_distance.selectedIndex = 0;
            res_drink.selectedIndex = 0;
            res_lat.value = "";
            res_lng.value = "";

            clientSocket.emit('add',{
                "name":name,
                "main_dish":main_dish,
                "price":price,
                "drink":drink,
                "distance":distance,
                "lat":lat,
                "lng":lng
            })
            console.log("add emit");
           
            console.log(name);
            console.log(main_dish);
            console.log(price);
            console.log(distance);
            console.log(drink);
            console.log(lat);
            console.log(lng);

        }

        

    }


    render(){
        return(
            <React.Fragment>
                
                <div id="name_add_form">
                    <div>餐廳名稱</div>
                    <input id="name_add_input"></input>
                </div>  

                <form id="main_dish_add_form">
                    <div>主食</div>
                    <select id="main_dish_add_select" >
                      <option value="default">請選擇主食</option>
                    　<option value="rice">rice</option>
                    　<option value="noodle">noodles</option>
                    　<option value="meat">meat</option>
                      <option value="snack">snack</option>
                      <option value="fastfood">fastfood</option>
                      <option value="hotpot">hotpot</option>
                      <option value="vege">Vegetarian</option>
                      <option value="dump">dumplings</option>
                      <option value="itali">Italian cuisine</option>
                    </select>
                </form>


                <div id="price_add_form">
                    <div>價位</div>
                    <input id="price_add_input"></input>
                </div>  

                <form id="distance_add_form">
                    <div>距離(腳踏車)</div>
                    <select id="distance_add_select" >
                      <option value="default">請選擇距離</option> 
                    　<option value="3">0~3min</option> 
                    　<option value="6">3~6min</option>
                    　<option value="9">6~9min</option>
                    　<option value="10">>10min</option>
           
                    </select>
                </form>  

                <form id="drink_add_form">
                    <div>有無附贈飲料</div>
                    <select id="drink_add_select" >
                      <option value="default">請選擇有無附贈飲料</option>
                    　<option value="true">有</option>
                    　<option value="false">沒有</option>   
                    </select>
                </form> 

                <form id="lat_add_form">
                    <div>經度</div>
                    <input id="lat_add_input"></input>
                </form> 

                <form id="lng_add_form">
                    <div>緯度</div>
                    <input id="lng_add_input"></input>
                </form> 

                <Button id="submit_add_btn" src="./image/submit.png" onClick={this.Add}/>
           
                

                <div >
                    <Button id="back_home_btn" class="button" src="./image/home.png" link="/home" />
                </div> 

                
                
            
            </React.Fragment>

        )       
    }
}

export default Add_Restaurant;