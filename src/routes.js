import React from 'react';
import Layout from './Hoc/Layout';
import { Switch } from 'react-router-dom';

import Home from './Components/home';
import SignIn from './Components/sign_in';

import Dashboard from './Components/admin/Dashboard'
import PrivateRoute from './Components/authRoutes/privateRoutes';
import PublicRoute from './Components/authRoutes/publicRoutes';
import AdminMatches from './Components/admin/matches';
import AddEditMatch from './Components/admin/matches/addEditMatch';
import AdminPlayers from './Components/admin/players';

const Routes = (props) => {

  console.log(props);
  return (
    <Layout>
      <Switch>
        <PrivateRoute {...props} path="/admin_players/" exact component={AdminPlayers} />
        <PrivateRoute {...props} path="/admin_matches/edit_match/" exact component={AddEditMatch} />
        <PrivateRoute {...props} path="/admin_matches/edit_match/:id" exact component={AddEditMatch} />
        <PrivateRoute {...props} path="/admin_matches" exact component={AdminMatches} />
        <PrivateRoute {...props} path="/dashboard" exact component={Dashboard} />

        <PublicRoute {...props} restricted={true} path="/sign_in" exact component={SignIn} />
        <PublicRoute {...props} restricted={false} path="/" exact component={Home} />


      </Switch>
    </Layout>
  )
}

export default Routes;
