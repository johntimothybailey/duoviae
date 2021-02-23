import { StoreEnhancer } from 'redux'
import { SagaMonitor } from '@redux-saga/core'

export interface Inspector {
  isReady: () => boolean
  setup: () => void
  createEnhancer: () => StoreEnhancer | undefined
}

export interface Inspectors {
  sagaMonitor: SagaMonitor | undefined
  isReady: () => boolean
  setup: () => void
  createEnhancers: () => StoreEnhancer[]
}
