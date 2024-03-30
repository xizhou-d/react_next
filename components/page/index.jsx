import React from 'react'
import styles from './index.module.css'

function createContent(content, page, callback) {
    return <span onClick={() => callback && callback(page)}>{content}</span>
}

export default function Page({ page = 1, limit = 10, total = 0, changePage}) {
    const pageNum = Math.ceil(total / limit)
  return (
    <div className={styles.page}>
        {page > 1 && createContent('首页', 1, changePage)}
        {page > 1 && createContent('上一页', page - 1, changePage)}
        {createContent(`${page} / ${pageNum}`)}
        {page < pageNum && createContent('下一页', +page + 1, changePage)}
        {page < pageNum && createContent('尾页', pageNum, changePage)}
    </div>
  )
}
