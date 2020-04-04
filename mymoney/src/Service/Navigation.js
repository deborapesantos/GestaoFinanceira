import { NavigationActions, DrawerActions } from 'react-navigation'

let _navigator

function setTopLevelNavigator(r) {
  _navigator = r
}

function navigate(routeName, params, actions, key) {
  _navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params,
      actions,
      key
    })
  )
}

function openDrawer() {
  _navigator.dispatch(DrawerActions.openDrawer())
}
function closeDrawer() {
  _navigator.dispatch(DrawerActions.closeDrawer())
}

function back() {
  _navigator.dispatch(NavigationActions.goBack())
}


export default {
  navigate,
  setTopLevelNavigator,
  openDrawer,
  closeDrawer,
  back
}