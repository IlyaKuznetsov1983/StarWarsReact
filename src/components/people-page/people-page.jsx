import React, {Component} from 'react';
import PersonDetails from "../person-details";
import ItemList from "../item-list";
import ServicesApi from "../../services-api";

class PeoplePage extends Component {

    services = new ServicesApi()

    state = {
        selectedItem: null
    }

    onItemSelected = (selectedItem) => {
        this.setState({selectedItem})
    }


    render() {
        const {selectedItem} = this.state

        return (
            <div className={'row mb2'}>
                <div className={'col-md-6'}>
                    <ItemList
                        onItemSelected={this.onItemSelected}
                        getData={this.services.getAllPeople}
                        renderList={(item) => <span>{item.name}</span>  }
                    />
                </div>
                <div className={'col-md-6'}>
                    <PersonDetails selectedItem={selectedItem}/>
                </div>
            </div>
        );
    }
}

export default PeoplePage;