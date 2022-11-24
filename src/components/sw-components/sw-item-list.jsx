import React from "react";
import ItemList from "../item-list";
import {WithDataHoc} from "../hoc";
import ServicesApi from "../../services-api";

const services = new ServicesApi()

const  {
    getAllPlanets,
    getAllPeople,
    getAllStarships
} = services

const renderName = (item)  => <span>{item.name}</span>
const renderNameAndModel = ({name, model})  => <span>{name} ({model})</span>




const withChildFunctionHoc = (Wrapped, fn) => {

    return (props) => {

        return (
            <Wrapped {...props}>
                {fn}
            </Wrapped>
        )
    }
}


const  PersonList = WithDataHoc(
    withChildFunctionHoc(ItemList, renderName),
    getAllPeople
    )


const  PlanetList =  WithDataHoc(
    withChildFunctionHoc(ItemList, renderName),
    getAllPlanets
)


const  StarshipList = WithDataHoc(
    withChildFunctionHoc(ItemList, renderNameAndModel),
    getAllStarships
)

export {
    PersonList,
    PlanetList,
    StarshipList
}