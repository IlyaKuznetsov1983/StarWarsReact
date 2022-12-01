import React, {Component} from 'react'
import ServicesApi from "../../services-api";
import RandomPlanetBlock from "../random-planet-block";
import Header from "../header";
import ErrorBoundary from "../error-boundary";
import {ServiceProvider} from '../context'
import {PeoplePage, PlanetsPage, StarshipsPage} from "../pages";
import {BrowserRouter, Switch, Route} from 'react-router-dom';



class App extends Component {

    services = new ServicesApi()


    render() {
        return (
            <ErrorBoundary>
                <ServiceProvider value={this.services}>
                    <BrowserRouter>
                        <>
                            <Header/>
                            <RandomPlanetBlock/>
                        <Switch>
                            <Route path='/' exact render={() => <h2>Welcome</h2>}/>
                            <Route path='/people/:id?' component={PeoplePage}/>
                            <Route path='/planets' component={PlanetsPage}/>
                            <Route path='/starships' component={StarshipsPage}/>

                            <PlanetsPage/>
                            <StarshipsPage/>
                            <Route path={'/'} component={PeoplePage}/>
                            <PeoplePage/>
                        </Switch>
                        </>
                    </BrowserRouter>
                </ServiceProvider>
            </ErrorBoundary>
        )
    }

}

export default App
