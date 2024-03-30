import React, { useState } from 'react'
import { connect } from 'react-redux'
import { useRouter } from 'next/router'

import { loginUser } from '../../store/login/actionCreate'
import styles from './index.module.css'

function LoginForm(props) {
    const { login } = props
    const router = useRouter()
    const [formData, setFormData] = useState({
        loginId: '',
        loginPwd: ''
    })
    const changeLoginId = (e) => {
        setFormData({
            ...formData,
            loginId: e.target.value
        })
    }

    const changeLoginPwd = (e) => {
        setFormData({
            ...formData,
            loginPwd: e.target.value
        })
    }

    const onSubmit = async (loginId, loginPwd) => {
        const res = await login(loginId, loginPwd)

        if (res) {
            router.push('/')
        } else {
            alert('账号或者密码错误。')
        }
    }

  return (
    <div className={styles.login_form}>
        <input type="text" value={formData.loginId} onChange={changeLoginId} />
        <input type="text" value={formData.loginPwd} onChange={changeLoginPwd} />
        <button onClick={() => onSubmit(formData.loginId, formData.loginPwd)}>登录</button>
    </div>
  )
}

function mapDispatchToProps(dispatch) {
    return {
        login: async (loginId, loginPwd) => {
            const result = await dispatch(loginUser(loginId, loginPwd))
            return result
        }
    }
}

export default connect(null, mapDispatchToProps)(LoginForm)

