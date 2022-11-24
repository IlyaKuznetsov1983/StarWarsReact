import React from "react";

import Record from "../common/record";
import ItemDetails from "../item-details";
import {ServiceConsumer} from "../context";

export const PersonDetails = ({selectedItem}) => {

    return (
        <ServiceConsumer>
            {
                (getPerson, getPersonImage) => {

                    return (<ItemDetails selectedItem={selectedItem}
                                         getData={getPerson}
                                         getImageUrl={getPersonImage}
                    >
                        <Record label='Gender:' value='gender'/>
                        <Record label='Birth Year:' value='birthYear'/>
                        <Record label='Eye Color:' value='eyeColor'/>
                    </ItemDetails>)
                }
            }
        </ServiceConsumer>
    )
}

