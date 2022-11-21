import React, {Component} from 'react';
import ServicesApi from "../../services-api";

class PersonDetails extends Component {

    services = new ServicesApi()

    state = {
        item: null,
        image: null,
    }

    componentDidMount() {
        this.updateItem()
    }

    componentDidUpdate(prevProps, prevState, s) {
        if (this.props.selectedItem !== prevProps.selectedItem) {
            this.updateItem()
        }
    }

    updateItem() {
        const {selectedItem} = this.props
        if (!selectedItem) return
        this.services.getPerson(selectedItem)
            .then(item => {
                this.setState({
                    item,
                    image: this.services.getPersonImage(item)
                })
            })
    }


    render() {
        const {item, image} = this.state

        if (!item) {
            return <span>Выберите элемент из списка!</span>
        }

        const {name,birthYear, eyeColor, gender } = item

        return (
            <div>
                <img className='rounded float-start planet'
                     src={image}
                     alt=""/>
                <h4>{name}</h4>
                <ul className='list-group list-group-flush detail'>
                    <li className='list-group-item'>
                        <span className='term'>Gender:</span>
                        <span>{gender}</span>
                    </li>
                    <li className='list-group-item'>
                        <span className='term'>BY:</span>
                        <span>{birthYear}</span>
                    </li>
                    <li className='list-group-item'>
                        <span className='term'>Eye Color:</span>
                        <span>{eyeColor}</span>
                    </li>
                </ul>
            </div>
        );
    }
}

export default PersonDetails;