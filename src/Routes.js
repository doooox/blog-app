import React from "react";
import { Switch, Route } from "react-router-dom";
import AddPost from "./pages/AddPost";
import AppPosts from "./pages/AppPosts";
import SinglePost from "./pages/SInglePost";

const Routes = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/posts">
          <AppPosts />
        </Route>
        <Route path="/posts/:id">
          <SinglePost />
        </Route>
        <Route path="/add">
          <AddPost />
        </Route>
      </Switch>
    </div>
  );
};

export default Routes;
