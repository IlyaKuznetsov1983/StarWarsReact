import React, {Component} from 'react'
import ServicesApi from "../../services-api";
import RandomPlanetBlock from "../random-planet-block";
import Header from "../header";
import ErrorBoundary from "../error-boundary";
import {PersonDetails, PersonList} from "../sw-components";
import {ServiceProvider} from "../context";
import Row from "./common/row";

class App extends Component {

    services = new ServicesApi()

    state = {
        selectedItem: null
    }

    onItemSelected = (selectedItem) => {
        this.setState({selectedItem})
    }


    render() {
        return (<ErrorBoundary>
            <ServiceProvider value={this.services}>
                <Header/>
                <RandomPlanetBlock/>
                <Row left={<PersonList onItemSelected={this.onItemSelected}/>}
                     right={<PersonDetails selectedItem={this.state.selectedItem}/>}/>
            </ServiceProvider>
        </ErrorBoundary>)
    }

}

export default App
