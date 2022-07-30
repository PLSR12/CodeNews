import { Switch, Route } from 'react-router-dom'

import Layout from './layout'
import { Home, Notice, Admin } from './pages'

import paths from './common/constants/paths'

export default function RoutesPath() {
  return (
    <Switch>
      <Route path={paths.Notices} component={Admin} />
      <Route path={paths.NewNotice} component={Admin} />
      <Route path={paths.EditNotice} component={Admin} />
      <Route path={paths.NewCategory} component={Admin} />
      <Layout>
        <Route exact path={paths.Home} component={Home} />
        <Route exact path={'/notice/:id'} component={Notice} />
      </Layout>
    </Switch>
  )
}
