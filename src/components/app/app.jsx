import React, {Component, useState} from 'react'

import ItemList from "../item-list";
import PeoplePage from "../people-page";
import ServicesApi from "../../services-api";
import RandomPlanetBlock from "../random-planet-block";
import Header from "../header";

class App extends Component {

    services = new ServicesApi()

    state = {
        selectedItem: null
    }

    onItemSelected = (selectedItem) => {
        this.setState({selectedItem})
    }


    render() {
        return (<div>
            <Header/>
            <RandomPlanetBlock/>}


            <PeoplePage/>
                     <br/>
            <div className={'row mb2'}>
                <div className={'col-md-6'}>
                    <ItemList
                        onItemSelected={this.onItemSelected}
                        getData={this.services.getAllPlanets}
                        renderList={(item) => <span>{item.diameter}<button>!!!!!!!!!</button></span>   }

                    />
                </div>
            </div>
            <br/>
            <div className={'row mb2'}>
                <div className={'col-md-6'}>
                    <ItemList
                        onItemSelected={this.onItemSelected}
                        getData={this.services.getAllStarShips}
                        renderList={(item) => `${item.model}` }

                    />
                </div>
            </div>

            {/*<PeoplePage/>*/}
            {/*<PeoplePage/>*/}
        </div>)
    }

}

export default App
