import React from "react";
import {Route, Switch} from 'react-router-dom';
import ErrorPage from "./page404";
import TemplateLearn from "./cards/template-learn";
import FaceBookHome from "./facebookhome";
import CardsList from "./cards";

const Routes = [
    {
        path:"/FacebookClone",
        exact: true,
        component: FaceBookHome
    },
    {
        path:"/Learn",
        exact: true,
        component: CardsList
    },
    {
        path:`/Learn/:slug`,
        exact: false,
        component: TemplateLearn,
    },

]

const AppRoutes = () => {
    return <>
        <Switch>
            {
                Routes.map((route) =>

                    <Route
                        path={route.path}
                        exact={route.exact}
                        component={route.component}
                    />
                )
            }
            <Route path="*" component={ErrorPage}/>

        </Switch>

    </>

};


export default AppRoutes;