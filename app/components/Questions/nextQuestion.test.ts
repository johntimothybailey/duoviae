import { nextQuestion } from './index'
import { LIST } from '../../../test/fixtures/QuestionsStateMachine'
describe('nextQuestion()', () => {
  it('invokes onComplete when the next step would be more than the max / total length', () => {
    const onComplete = jest.fn()
    const setItem = jest.fn()
    const setStep = jest.fn()
    nextQuestion(setStep, setItem, LIST[LIST.length - 1], LIST, onComplete)
    expect(setItem).not.toHaveBeenCalled()
    expect(setStep).not.toHaveBeenCalled()
    expect(onComplete).toHaveBeenCalledTimes(1)
  })
})
