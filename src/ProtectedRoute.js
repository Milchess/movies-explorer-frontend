import { Redirect, Route } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, ...props  }) => {
    return (
        <Route exact path={props.path}>
            {
                () => props.loggedIn ? <Component {...props} /> : <Redirect to='/' />
            }
        </Route>
    )}

export default ProtectedRoute;