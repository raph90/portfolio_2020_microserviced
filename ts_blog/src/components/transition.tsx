import React from 'react'
import {
  TransitionGroup,
  Transition as ReactTransition,
} from 'react-transition-group'
import { TIMEOUT } from 'dns'
import { createGlobalStyle } from 'styled-components'
const GlobalStyle = createGlobalStyle`
  body {
    // color: ${(props) => (props.theme === 'purple' ? 'purple' : 'white')};
  }
`
interface ITransitionState {}

interface ITransitionProps {}
const timeout = 500

const getTransitionStyles = {
  entering: {
    position: 'absolute',
    transform: 'translateY(-100%)',
  },
  entered: {
    transition: `transform ${timeout}ms ease-in-out`,
    transform: 'translateY(0)',
  },
  exiting: {
    transition: `transform ${timeout}ms ease-in-out`,
    transform: 'translateY(-100%)',
  },
}

class Transition extends React.PureComponent<
  ITransitionProps,
  ITransitionState
> {
  render() {
    const { children } = this.props
    console.log(this.props)
    return (
      <TransitionGroup>
        <ReactTransition
          key={location.pathname}
          timeout={{
            enter: timeout,
            exit: timeout,
          }}
        >
          {(status) => (
            <div
              style={{
                ...getTransitionStyles[status],
              }}
            >
              {children}
            </div>
          )}
        </ReactTransition>
      </TransitionGroup>
    )
  }
}

export default Transition

