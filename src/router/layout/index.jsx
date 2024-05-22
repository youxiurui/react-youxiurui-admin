import React, { useState } from 'react'
import { Layout as LayoutElement } from 'antd'
import Header from './Header'
import Sider from './Sider'
import Tags from './Tags'
import Content from './Content'
import './index.css'

function Layout() {

    const { Header: LayoutHeader, Sider: LayoutSider, Content: LayoutContent } = LayoutElement

    const [collapsed, setCollapsed] = useState(false)
    const [activeTag, setActiveTag] = useState('')

    const changeCollapsed = (params) => {
        setCollapsed(params)
    }

    return (
        <LayoutElement className='layout-element'>
            <LayoutHeader className='layout-header'>
                <Header changeCollapsed={changeCollapsed} />
            </LayoutHeader>
            <LayoutElement>
                <LayoutSider trigger={null} collapsible collapsed={collapsed} className='layout-sider' width={200}>
                    <Sider activeTag={activeTag} changeTag={tag => setActiveTag(tag)} />
                </LayoutSider>
                <LayoutContent className='layout-content' >
                    <div className="tags tags-scroll">
                        <Tags activeTag={activeTag} changeTag={tag => setActiveTag(tag)} />
                    </div>
                    <div className="container set-scroll">
                        <Content />
                    </div>
                </LayoutContent>
            </LayoutElement>
        </LayoutElement>
    )
}

export default Layout