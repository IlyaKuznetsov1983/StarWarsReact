import React, {Component} from 'react';
import {WithDataHoc} from "../../components/hoc";

const ItemList = (props) => {
    const {children: renderLabel, onItemSelected, data} = props



    const  items = data.map((item) => {
        const {id} = item;
        const label = renderLabel(item);
        return (
            <li className='list-group-item'
                key={item.id}
                onClick={() => onItemSelected(item.id)}
            >
                {label}
            </li>
        )

    })

        return (
            <div>
                <ul className='list-group'>
                    {items}
                </ul>
            </div>

        );

}

export default  ItemList;

