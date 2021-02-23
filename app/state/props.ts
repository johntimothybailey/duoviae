import { Inspectors } from '../services/inspectors/interfaces'
import { PropsWithChildren } from 'react'

export interface ProviderProps extends PropsWithChildren<any> {
  inspection: Inspectors
}
