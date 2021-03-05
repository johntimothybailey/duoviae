import React from 'react'
import {
  BottomNavigation,
  BottomNavigationTab,
  BottomNavigationTabElement,
  Divider, Layout
} from '@ui-kitten/components'
import { Route } from '@react-navigation/core'
import { Props } from './props'
import styles from './styles'

/**
 * @cite https://reactnavigation.org/blog/2019/11/04/using-react-navigation-5-with-ui-kitten/#step-3-bottom-tabs
 * @cite https://reactnavigation.org/blog/2019/11/04/using-react-navigation-5-with-ui-kitten/#typescript
 * @param props
 * @constructor
 */
export const BottomBar = (props: Props): React.ReactElement => {
  const onSelect = (index: number): void => {
    const selectedTabRoute: string = props.state.routeNames[index]
    props.navigation.navigate(selectedTabRoute)
  }

  /**
   * Consider moving this out
   * @param route
   */
  const createNavigationTabForRoute = (route: Route<any, any>): BottomNavigationTabElement => {
    const { options } = props.descriptors[route.key] || { options: {} }
    return (
      <BottomNavigationTab
        key={route.key}
        title={options.title ?? route.name}
        // @ts-expect-error: all Tab Screens strictly have UI Kitten Icon
        icon={options.tabBarIcon}
      />
    )
  }

  return (
    <Layout style={styles.Main} level='1'>
      <Divider />
      <BottomNavigation
        {...props}
        style={styles.Items}
        appearance='noIndicator'
        selectedIndex={props.state.index}
        onSelect={onSelect}
      >
        {props.state.routes.map(createNavigationTabForRoute)}
      </BottomNavigation>
    </Layout>
  )
}

export default BottomBar
