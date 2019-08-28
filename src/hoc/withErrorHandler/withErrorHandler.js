import React from 'react'
import Modal from '../../components/UI/Modal/Modal'
import Aux from '../Auxil/Auxil'

const withErrorHandler = (WrappedComponent) => {
    return (props) => {
        return (
            <Aux>
                <Modal show>
                    Something didn't work!
                </Modal>
                <WrappedComponent {...props} />
            </Aux>
        )
    }
}

export default withErrorHandler
