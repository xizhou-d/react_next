import Link from 'next/link'
import { useRouter } from 'next/router'

import { connect } from 'react-redux'
import { loginout } from '../../store/login/actionCreate'
import styles from './index.module.css'

const Header = ({ loginUser, loginout }) => {
    const router = useRouter()
    console.log('logonUser', loginUser)
    return (
        <nav className={styles.header}>
            <div className={styles.left}>
                <Link className={styles.link} href='/'>
                    <img src="/yangjian.png" alt="" />
                </Link>
                {/* 跳转方式一：连接跳转 */}
                <Link className={styles.link} href='/'>首页</Link>
                <Link className={styles.link} href='/movies'>电影</Link>
                <Link className={styles.link} href='/movies/[id]' as='/movies/3'>详情</Link>
                <Link className={styles.link} href='/redux'>Redux</Link>
                <Link className={styles.link} href='/private'>Private</Link>
            </div>
            <div>
                {
                    loginUser ? <div>
                        <span style={{marginRight: '10px'}}>{ loginUser.name }</span>
                        <span style={{ cursor: 'pointer'}} onClick={() => {
                            loginout()
                            router.push('/login')
                        }}>注销</span>
                    </div> : 
                    <Link className={styles.link} href='/login'>登录</Link>
                }
            </div>
            
            {/* 跳转方式二：连接跳转 , 隐藏了，后续记得放出来*/}
            <button 
                onClick={() => {
                    router.push('/movies/[...params]', '/movies/a/b/c')
                }}
                className={styles.button_hidden}
            >
                跳转到[...params]
            </button>
        </nav>
    )
}

function mapStateToProps(state) {
    return {
        loginUser: state.login.user
    }
}

function mapDispatchToProps(dispatch) {
    return {
        loginout() {
            dispatch(loginout())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)