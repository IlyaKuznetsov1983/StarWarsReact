import React, {Component, useState} from 'react'

import ItemList from "../item-list";
import PeoplePage from "../people-page";
import ServicesApi from "../../services-api";
import RandomPlanetBlock from "../random-planet-block";
import Header from "../header";
import ErrorBoundary from "../error-boundary";
import {WithDataHoc} from "../hoc";
import {PersonList} from "../sw-components";

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
            <Header/>
            <RandomPlanetBlock/>
            <PeoplePage/>
            <PersonList/>
        </ErrorBoundary>)
    }

}

export default App
