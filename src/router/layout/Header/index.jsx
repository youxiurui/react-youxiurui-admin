import React, { useState } from 'react'
import { Dropdown } from 'antd'
import './index.css'
import Head from '@/static/images/head.jpg'

const items = [
  {
    key: '1',
    label: '退出登录'
  }
]

function Header({ changeCollapsed }) {

  const [collapsed, setCollapsed] = useState(false)

  const triggerCollapsed = () => {
    setCollapsed(!collapsed)
    changeCollapsed(!collapsed)
  }

  return (
    <div className="header">
      <div className="header-left">
        <div className="title">
          <span>优秀瑞</span>
        </div>
        <div className="collapsed" onClick={triggerCollapsed}>
          {collapsed ? (
            <i className="iconfont icon-zhankai"></i>
          ) : (
            <i className="iconfont icon-shousuo"></i>
          )}
        </div>
        <div className="nav">

        </div>
      </div>
      <div className="header-right">
        <div className="item-box">
          <div className="item">
            <i className="iconfont" ></i>
            <span>20℃</span>
          </div>
          <div className="item">
            <i className="iconfont icon-liangdian"></i>
          </div>
          <div className="item">
            <i className="iconfont icon-quanping"></i>
          </div>
          <div className="item">
            <a target="_blank" href="https://github.com/youxiurui/vue2-youxiurui-admin">
              <i className="iconfont icon-github"></i>
            </a>
          </div>
          <div className="item">123</div>
          <div className="item">
            <Dropdown
              menu={{
                items,
              }}
              placement="bottom"
              destroyPopupOnHide
            >
              <img className='head' src={Head} alt="" />
            </Dropdown>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
