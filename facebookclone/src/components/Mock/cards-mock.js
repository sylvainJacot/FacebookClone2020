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

export const ReactRouterCode02 = () => {
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
        description: "Description du code",
        bgimage: imagesLearn.test,
        slug: "Routes-Learn",
        content: [
            {
                explanation: "explanation one",
                codecontent: ReactRouterCode01,
            },
            {
                explanation: "explanation TWO",
                codecontent: ReactRouterCode02,
            },
            {
                explanation: "explanation TWO",
                codecontent: ReactRouterCode02,
            },
        ]
    },
    {
        id: 1,
        title: "React Router loool",
        description: "Description du code",
        bgimage: imagesLearn.test,
        slug: "Deuxieme-Learn",
        content: [
            {
                explanation: "explanation one",
                codecontent: ReactRouterCode01,
            },
            {
                explanation: "explanation TWO",
                codecontent: ReactRouterCode02,
            },
        ]
    },
    {
        id: 2,
        title: "React Router",
        description: "Description",
        bgimage: imagesLearn.test,
        slug: "Troisieme-Learn",
        content: [
            {
                explanation: "explanation one",
                codecontent: ReactRouterCode01,
            },
            {
                explanation: "explanation TWO",
                codecontent: ReactRouterCode02,
            },
        ]
    },

]