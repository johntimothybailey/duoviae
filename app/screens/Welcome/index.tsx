import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { Layout, Text } from '@ui-kitten/components'

export default function Dashboard () {
  return (
    <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Welcome</Text>
      <StatusBar style='auto' />
    </Layout>
  )
}
