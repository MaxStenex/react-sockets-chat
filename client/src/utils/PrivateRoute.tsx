import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect, RouteProps } from "react-router-dom";
import { RootStateType } from "../redux/rootReducer";

type PrivateRouteProps = {
  component: React.FunctionComponent;
} & RouteProps;

const PrivateRoute: React.FC<PrivateRouteProps> = ({ component: Component, ...rest }) => {
  const userId = useSelector((state: RootStateType) => state.user.id);

  return (
    <Route {...rest} render={() => (userId ? <Component /> : <Redirect to="/login" />)} />
  );
};

export default PrivateRoute;
