import React from 'react';
import { Map, GoogleApiWrapper,Marker,InfoWindow} from 'google-maps-react';
import clientSocket from "./socket.js";
import Button from "./Button";

const mapStyles = {
  width: '80%',
  height: '100%',
};





class MapContainer extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      stores:[
      ],
      showingInfoWindow: false,  
      activeMarker: {},          
      selectedPlace: {}

    }

    

    
  }

  componentDidMount(){
    clientSocket.emit("All_map");
    clientSocket.on("All_coords",(data)=>{
      console.log("get");
      this.setState({
        stores:data
      })
    })
    
  }

  displayMarkers = () => {
    return this.state.stores.map((com,index)=>{
      return <Marker key={index} id={index} name={com.name} position={{
        lat:com.lat,
        lng:com.lng
      }}
      onClick={this.onMarkerClick}/>
    })
  }

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

    render(){
        return(
          <React.Fragment>
            <Map
              google={this.props.google}
              zoom={16}
              style={mapStyles}
              initialCenter={{ lat: 25.016869, lng: 121.538122}}
              >

              {this.displayMarkers()}

              <InfoWindow
                marker={this.state.activeMarker}
                visible={this.state.showingInfoWindow}
                onClose={this.onClose}
              >
              <div>
                <h4>{this.state.selectedPlace.name}</h4>
              </div>
            </InfoWindow>  
                
            
            

            </Map>

            <div >
              <Button id="All_Map_back_home_btn" class="button" src="./image/home.png" link="/home" />
            </div> 
            

            
          </React.Fragment>
        )       
    }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyD-i8hYmJ9SeP6Eg5hh1Nwric_5PnJITEg"
})(MapContainer);