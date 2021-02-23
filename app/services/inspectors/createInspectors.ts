import { Inspectors } from './interfaces'
// @ts-expect-error
import { USE_INSPECTORS } from '@env'

export default (): Inspectors => {
  let inspectors: Inspectors
  if (USE_INSPECTORS === 'true') {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const Inspection = require('./Inspectors').default
    inspectors = new Inspection()
  } else {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const NoopInspection = require('./NoopInspector').default
    inspectors = new NoopInspection()
  }
  return inspectors
}
