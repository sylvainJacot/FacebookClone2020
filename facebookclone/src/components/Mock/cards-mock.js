import React from "react";
import {imagesLearn} from "../Media/images";

export const ReactRouterCode01 = () => {
    return <>
        <pre>
        <code className={"language-javascript"}>
            {`const Routes = [
    {
        path:"/",
        exact: true,
        component: FaceBookHome
    },
    {
        path:"/Learn",
        exact: true,
        component: CardsList
    },
    {
        path:"/Learn/Routes-Learn",
        exact: true,
        component: RoutesLearn,
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


export default AppRoutes;`}
        </code>
        </pre>
    </>
}

export const cards = [
    {
        id: 0,
        title: "React Router",
        description: "Description",
        bgimage: imagesLearn.test,
        pathname: "/Learn/Routes-Learn",
    },
    {
        id: 2,
        title: "test 2",
        description: "Description",
        bgimage: imagesLearn.test,
        pathname: "/",
    },
    {
        id: 3,
        title: "test 2",
        description: "Description",
        bgimage: imagesLearn.test,
        pathname: "/",
    },
    {
        id: 4,
        title: "test 2",
        description: "Description",
        bgimage: imagesLearn.test,
        pathname: "/",
    },
    {
        id: 5,
        title: "test 2",
        description: "Description",
        bgimage: imagesLearn.test,
        pathname: "/",
    },
]

