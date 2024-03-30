import { getMovies, getMovie } from "../../services/movieService";
import { useRouter } from "next/router";

// 动态路由，一个动态参数
export default (props) => {
  const { movieDetail } = props.pageProps;

  // movieDetail 有不存在的情况：假如 falllback 设置为 true，就会多执行一次（因为会多渲染出来一个 movie/[id].html），多执行的那次是没有数据，会报错，因此这里多一个判断
  // if (movieDetail) {
  //     return <h1>电影详情页: {movieDetail?.name}</h1>
  // } else {
  //     return <h1>loading……</h1>
  // }

  // 上边的问题有另一种方案，next/router 提供的
  const router = useRouter();
  if (router.fallback) {
    return <h1>loading……</h1>;
  } else {
    return <h1>电影详情页: {movieDetail?.name}</h1>;
  }
};

export async function getStaticProps({ params }) {
  // 这里要请求电影详情页的数据，但是这个函数是在服务端执行的，这时候根本不可能获得 id 是什么，也不可能去点击，是在构建的时候执行的，不是请求的时候执行的，时间太早了。因此这里没法获取 id
  // 这时就需要用到 getStatePaths
  const res = await getMovie(params.id);
  return {
    props: {
      movieDetail: res.data,
    },
  };
}

//该函数用于得到有哪些可能出现的id
export async function getStaticPaths() {
  const res = await getMovies();
  const paths = res.data.map((m) => ({
    params: { id: m._id },
  }));

  return {
    paths,
    fallback: true,
  };
}

/**
 * fallback: true
 * 当访问到不存在的id页面时
1.响应［id］.html，页面中会请求JSON
2.重新运行getStaticProps函数，并将新的id传过去
3.重新渲染组件，把渲染的结果生成到一个新的HTML中
4.同时生成JSON(这时候，浏览器显示的是 loading, 会一直等待生成的 json)
 */
 