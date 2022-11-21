import React, {Component} from 'react';
import Spinner from "../spinner";
import Error from "../error";

class ItemList extends Component {

    state = {
        itemList: null,
        hasError: false
    }

    componentDidMount() {
        const {getData} = this.props

        getData()
            .then(itemList => {
                this.setState({
                    itemList
                })
            })
            .catch((e) => console.log(e))
    }

    renderItems(itemList) {
        return itemList.map((item) => {
            const label = this.props.renderList(item)
            return (<li className='list-group-item'
                        key={item.id}
                        onClick={() => this.props.onItemSelected(item.id)}
            >
                {label}
            </li>)

        })
    }

    static getDerivedStateFromError(error) {
        return {hasError: true}
    }

    componentDidCatch(error, errorInfo) {
        console.log('componentDidCatch', error, errorInfo)
    }


    render() {

        const {itemList, hasError} = this.state

        if (!itemList) {
            return <Spinner/>
        }

        if (hasError) {
            return <Error/>
        }

        const items = this.renderItems(itemList)

        return (
            <div>
                <ul className='list-group'>
                    {items}
                </ul>
            </div>

        );
    }
}

export default ItemList;

