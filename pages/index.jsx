import { useState, useEffect } from 'react'
import Head from 'next/head';

export default () => {
    const [lists, setLists] = useState([])

    useEffect(() => {
        setLists([
            '新浪', '小米', '大疆'
        ])
    }, [])
    return (
        <>
            <Head>
                <title>Index 首页</title>
            </Head>

            <ul>
                {
                    lists.map((list, index) => {
                        return (
                            <li key={index}>{list}</li>
                        )
                    })
                } 
            </ul>
        </>
    )
}

