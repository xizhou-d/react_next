import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { whoamiAction } from '../../store/login/actionCreate'

function WhoAmI({ whoAmI }) {
    useEffect(() => {
        whoAmI && whoAmI()
    }, [])
  return (
    <></>
  )
}

function mapDispatchToProps(dispatch) {
    return {
        whoAmI() {
            dispatch(whoamiAction())
        }
    }
}

export default connect(null, mapDispatchToProps)(WhoAmI)
