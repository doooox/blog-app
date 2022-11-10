import React from 'react'
import { Switch, Route } from 'react-router-dom'
import AppPosts from './pages/AppPosts'

const Routes = () => {
  return (
    <div>
        <Switch>
            <Route path="/posts">
                <AppPosts/>
            </Route>
        </Switch>
    </div>
  )
}

export default Routes