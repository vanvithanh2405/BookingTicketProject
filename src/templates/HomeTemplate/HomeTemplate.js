import { Fragment } from "react";
import { Route } from "react-router";
import Footer from "./Layout/Footer/Footer";
import Header from "./Layout/Header/Header";



export const HomeTemplate = (props) => {
    const { Component, ...restRoute } = props;

    return <Route {...restRoute} render={(propsRoute) => { //props.location,props.history.props.match

        return <Fragment>
            <Header {...propsRoute} />
            <div>
                <Component {...propsRoute} />
            </div>

            <hr className="mt-10" />
            <Footer  />

        </Fragment>
    }} />
}