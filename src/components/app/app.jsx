import React, {Component} from 'react'
import ServicesApi from "../../services-api";
import RandomPlanetBlock from "../random-planet-block";
import Header from "../header";
import ErrorBoundary from "../error-boundary";
import {ServiceProvider} from '../context'
import {PeoplePage, PlanetsPage, StarshipsPage} from "../pages";

class App extends Component {

    services = new ServicesApi()


    render() {
        return (
            <ErrorBoundary>
                <ServiceProvider value={this.services}>
                    <Header/>
                    <RandomPlanetBlock/>
                    <PeoplePage/>
                    <PlanetsPage/>
                    <StarshipsPage/>
                </ServiceProvider>
            </ErrorBoundary>
        )
    }

}

export default App
