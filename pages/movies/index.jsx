import Head from 'next/head'
import { useRouter } from 'next/router'
import { getMovies } from '../../services/movieService'
import Page from '../../components/page'

export default (props) => {
    const { movies, total, page, limit } = props.pageProps
    const router = useRouter()

    // 这种方式每一次都会执行 getServerSideProps，假如你不想执行，那么你可以加上第三个参数
    const changePage = (page) => router.push(`/movies`, `/movies?page=${page}`, { shallow: true })
    return (
        <>
            <Head>
                <title>电影</title>
            </Head>
            <h1>Movies List.</h1>
            <ul>
                {
                    movies.map(m => (
                        <li key={m._id}>
                            <a href={`/movies/${m._id}`}>{m.name}</a>
                        </li>
                    ))
                }
            </ul>
            <Page page={page} total={total} limit={limit} changePage={changePage} />
        </>
    )
}

// 这个函数会在服务端运行的时候，把这个函数的返回值加到页面组件中去
// ⚠️ 这个函数必须在页面组件中运行，不能再 _app 中运行
// ⚠️ 改函数值可能在服务端运行，不可能在客户端运行
// export async function getStaticProps() {
//     const res = await getMovies(1, 20)
//     return {
//         props: {
//             movies: res.data
//         }
//     } 
// }

// SSR: 该函数每次请求到达的时候都会运行，仅在服务端运行
// req, res, query
export async function getServerSideProps(context) {
    const res = await getMovies(context.query?.page || 1, 10)
    const page = context.query?.page

    return {
        props: {
            movies: res.data,
            limit: 10,
            page: page,
            total: res.count
        }
    }
}