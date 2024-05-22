import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Menu } from 'antd'
import routerMock from '@/router/routerMock'

const items = [
  {
    key: '/home',
    label: '首页',
    icon: <i className="iconfont icon-shouye" />
  }
]

const convertRoutesToMenuItems = (routes, basePath = '') => {

  return routes.map(route => {

    const fullPath = `${basePath}/${route.path}`

    const item = {
      key: fullPath,
      label: route.meta.pathName,
      icon: <i className={`iconfont ${route.meta.icon}`} />
    }

    if (route.children) {
      item.children = convertRoutesToMenuItems(route.children, fullPath)
    }

    return item

  })
}

items.push(...convertRoutesToMenuItems(routerMock))

function Sider({ activeTag }) {

  const navigate = useNavigate()

  const changePage = ({ key }) => {
    navigate(key)
  }

  return (
    <Menu
      selectedKeys={[activeTag]}
      mode="inline"
      items={items}
      onClick={changePage}
    />
  )
}

export default Sider
