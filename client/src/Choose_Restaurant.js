import React from 'react';

import Button from './Button'

import clientSocket from './socket';



class Choose_Restaurant extends React.Component{
    Choose = () => {
      
        const res_price = document.getElementById("price_choose_input");
        const res_main_dish = document.getElementById("main_dish_choose_select");
        const res_distance = document.getElementById("distance_choose_select");
        const res_drink = document.getElementById("drink_choose_select");


        if(res_price.value === ""){
            var price = 1000;
        }

        else{
            
            var price = parseInt(res_price.value); 
        }
        if(res_distance.options[res_distance.selectedIndex].value === "default"){

            var distance = 5000;
        }
        else{
            var distance = parseInt(res_distance.options[res_distance.selectedIndex].value);
        }
       
        var main_dish = res_main_dish.options[res_main_dish.selectedIndex].value;
       
        var drink = res_drink.options[res_drink.selectedIndex].value;

        clientSocket.emit("find",{ 
            "name":"default",
            "main_dish":main_dish,
            "price":price,
            "distance":distance,
            "drink":drink
        })

        alert("提交成功");

 
        console.log(main_dish);
        console.log(price);
        console.log(distance);
        console.log(drink);
        
    }

    render(){
        return(
            <React.Fragment>
                
                <form id="main_dish_choose_form">
                    <div>主食</div>
                    <select id="main_dish_choose_select" >
                      <option value="default">不限</option>
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


                <div id="price_choose_form">
                    <div>價位</div>
                    <input placeholder="可不填" id="price_choose_input"></input>
                </div>  

                <form id="distance_choose_form">
                    <div>距離(腳踏車)</div>
                    <select id="distance_choose_select" >
                      <option value="default">不限</option>
                    　<option value="3">3分鐘內</option>
                    　<option value="6">6分鐘內</option>
                    　<option value="9">9分鐘內</option>
    
           
                    </select>
                </form>  

                <form id="drink_choose_form">
                    <div>有無附贈飲料</div>
                    <select id="drink_choose_select">
                      <option value="default">不限</option>
                    　<option value="true">要有</option>   
                    </select>
                </form> 

                <div id="please">請先提交資料</div>

                <Button id="submit_choose_btn"  src="./image/submit.png"  onClick={this.Choose}/>
                <Button id="choose_result_btn" src="./image/choose_result.png" link="/choose/choose_result" />
                
                
                


                <div >
                    <Button id="back_home_btn" src="./image/home.png"  class="button"  link="/home" />
                </div> 
            
            </React.Fragment>
            
            

        )       
    }
}

export default Choose_Restaurant;