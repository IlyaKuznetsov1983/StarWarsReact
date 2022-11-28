import React, {Component} from 'react';
import Row from "../common/row";
import {PersonDetails, PersonList} from "../sw-components";

export class PeoplePage extends Component {

    state = {
        selectedItem: null
    }

    onItemSelected = (selectedItem) => {
        this.setState({selectedItem})
    }

    render() {
        return (
            <Row left={<PersonList onItemSelected={this.onItemSelected}/>}
                 right={<PersonDetails selectedItem={this.state.selectedItem}/>}/>
        );
    }
}

