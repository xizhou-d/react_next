import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { connect } from 'react-redux'

import withServerSideProps from '../utils/withServerSideProps'
import { whoamiAction } from '../store/login/actionCreate'

function Private({loginUser}) {
    const router = useRouter()

    useEffect(() => {
        if (!loginUser) {
            router.push('/login')
        }
    })

    if (loginUser) {
        return <div>Private: 登陆了才能查看</div>
    } else { 
        return null
    }
}

function mapStateToProps(state) {
    return {
        loginUser: state.login.user
    }
}

export default connect(mapStateToProps)(Private)

const func = async ({ axios, store }) => {
    await store.dispatch(whoamiAction(axios))
}

export const getServerSideProps = withServerSideProps(func)