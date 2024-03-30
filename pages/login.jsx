import React from 'react'

import { login, whoAmI, loginOut } from '../services/login'
import { getServerSideInstance } from '../services/request'
import LoginForm from '../components/loginFrom'


export default function Login(props) {
    // login('11111111111', '123123').then(res => {
    //     console.log('res', res)
    // })
    // whoAmI().then(res => {
    //     console.log('res-component', res)
    // })
    // loginOut()
  return (
    <LoginForm />
  )
}

// export async function getServerSideProps(context) {
//     const request = getServerSideInstance(context.req)
//     whoAmI(request).then(res => {
//         console.log('res-server', res)
//     })
//     return {
//         props: {}
//     }
// }
