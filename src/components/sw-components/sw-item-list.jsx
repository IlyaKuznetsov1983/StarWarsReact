import React from "react";
import ItemList from "../common/item-list";
import {compose, WithChildFunctionHoc, WithDataHoc, WithServicesHoc} from "../hoc";


const mapPersonListMethodToProps = (service) => ({
    getData: service.getAllPeople,

})

const mapPlanetsListMethodToProps = (service) => ({
    getData: service.getAllPlanets,

})
const mapStarshipListMethodToProps = (service) => ({
    getData: service.getAllStarShips,

})
const renderName = (item) => <span>{item.name}</span>
const renderNameAndModel = ({name, model}) => <span>{name} ({model})}</span>

const PersonList = compose(
    WithServicesHoc(mapPersonListMethodToProps),
    WithDataHoc,
    WithChildFunctionHoc(renderName)
)(ItemList)


const PlanetList = compose(
    WithServicesHoc(mapPlanetsListMethodToProps),
    WithDataHoc,
    WithChildFunctionHoc(renderName)
)(ItemList)

const StarshipList = compose(
    WithServicesHoc(mapStarshipListMethodToProps),
    WithDataHoc,
    WithChildFunctionHoc(renderNameAndModel)
)(ItemList)


export {
    PersonList,
    PlanetList,
    StarshipList
}

