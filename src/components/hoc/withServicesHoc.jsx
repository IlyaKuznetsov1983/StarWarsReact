import {ServiceConsumer} from "../context";

export const WithServicesHoc = (Wrapper, mapMethodToProps) => {
    return (props) => {
        return <ServiceConsumer>
            {
                (services) => {
                    const serviceProps = mapMethodToProps(services)
                    return <Wrapper {...props} {...serviceProps}/>
                }
            }
        </ServiceConsumer>
    }
}

