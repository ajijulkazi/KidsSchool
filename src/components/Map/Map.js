
import { Component } from "react";
import {Map, GoogleApiWrapper} from 'google-maps-react';

class MapContainer extends Component{
    render(){
        return(
            <Map
            google = {this.props.google}
            style= {{width:'100%', height:'55%'}}
            zoom = {10}
            initialCenter ={
                {
                    lat: 23.746466,
                    lng:90.376015
                }
            }
            />
        );
    }
}

export default GoogleApiWrapper({
    apiKey:"AIzaSyBZkf4fh5AC0gLDwb9vfst3jevwHUBX7MA"
})(MapContainer)