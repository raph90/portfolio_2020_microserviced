import React from "react"
import { TransitionGroup, Transition as ReactTransition } from "react-transition-group"
import { TIMEOUT } from "dns";

interface ITransitionState {

}

interface ITransitionProps {
}
const timeout = 500;

const getTransitionStyles = {
    entering: {
        position: "absolute",
        opacity: 0
    },
    entered: {
        transition: `opacity ${timeout}ms ease-in-out`,
        opacity: 1
    },
    exiting: {
        transition: `opacity ${timeout}ms ease-in-out`,
        opacity: 0
    }
}

class Transition extends React.PureComponent<ITransitionProps, ITransitionState> {

    render() {
        const { children } = this.props;

        return (
            <TransitionGroup>
                <ReactTransition
                    key={location.pathname}
                    timeout={{
                        enter: timeout,
                        exit: timeout
                    }}
                >
                    {status => (
                        <div style={{
                            ...getTransitionStyles[status]
                        }}>
                            {children}
                        </div>
                    )}
                </ReactTransition>
            </TransitionGroup>
        )

    }
}


export default Transition