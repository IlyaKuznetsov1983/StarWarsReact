import React from "react";
import ItemList from "../common/item-list";
import {WithChildFunctionHoc, WithDataHoc} from "../hoc";
import ServicesApi from "../../services-api";

const services = new ServicesApi()

const {
    getAllPlanets,
    getAllPeople,
    getAllStarShips
} = services

const renderName = (item) => <span>{item.name}</span>
const renderNameAndModel = ({name, model}) =>  <span>{name} ({model})}</span>

const PersonList = WithDataHoc(
    WithChildFunctionHoc(ItemList, renderName),
    getAllPeople
)

const PlanetList = WithDataHoc(
    WithChildFunctionHoc(ItemList, renderName),
    getAllPlanets
)

const StarshipList = WithDataHoc(
    WithChildFunctionHoc(ItemList, renderNameAndModel),
    getAllStarShips
)

export {
    PersonList,
    PlanetList,
    StarshipList
}