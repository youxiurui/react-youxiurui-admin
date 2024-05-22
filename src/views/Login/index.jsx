import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Switch, Form, Input } from 'antd'
import './index.css'

function Login() {

  const navigate = useNavigate()

  const nameRules = [{ required: true, message: '请输入用户名' }]
  const passwordRules = [{ required: true, message: '请输入密码' }]

  const onFinish = (values) => {
    console.log('Success:', values)
    navigate('/home')
  }

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }

  return (
    <div id="login">
      <div className="form-box">
        <span className='title'>优秀瑞</span>
        <div className='form'>
          <Form
            name="basic"
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 16,
            }}
            style={{
              maxWidth: 600,
            }}
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              name="username"
              className='form-item'
              rules={nameRules}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="password"
              className='form-item'
              rules={passwordRules}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item style={{ marginLeft: '25px' }} valuePropName="checked">
              <Switch />
              <span className='remember-me'>记住我</span>
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit">
                登录
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  )
}

export default Login
