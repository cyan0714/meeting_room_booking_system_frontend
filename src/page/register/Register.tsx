import { Button, Col, Form, Input, message, Row } from 'antd'
import './register.css'
import { register, registerCaptcha } from '../../interface/interfaces'
import { useForm } from 'antd/es/form/Form'
import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

export interface RegisterUser {
  username: string
  nickName: string
  password: string
  confirmPassword: string
  email: string
  captcha: string
}

const layout1 = {
  labelCol: { span: 6 },
  // wrapperCol: { span: 18 },
}

const layout2 = {
  labelCol: { span: 0 },
  wrapperCol: { span: 24 },
}

export function Register() {
  const [form] = useForm()
  const navigate = useNavigate()

  const sendCaptcha = useCallback(async function () {
    const address = form.getFieldValue('email')
    if (!address) {
      return message.error('请输入邮箱地址')
    }

    const res = await registerCaptcha(address)
    if (res.status === 201 || res.status === 200) {
      message.success(res.data.data)
    } else {
      message.error(res.data.data || '系统繁忙，请稍后再试')
    }
  }, [])

  const onFinish = useCallback(async (values: RegisterUser) => {
    if (values.password !== values.confirmPassword) {
      return message.error('两次密码不一致')
    }
    const res = await register(values)

    if (res.status === 201 || res.status === 200) {
      message.success('注册成功')
      setTimeout(() => {
        navigate('/login')
      }, 1500)
    } else {
      message.error(res.data.data || '系统繁忙，请稍后再试')
    }
  }, [])

  return (
    <div className='register-page'>
      <div id='register-container'>
        <h1>会议室预订系统</h1>
        <Form
          form={form}
          {...layout1}
          onFinish={onFinish}
          colon={false}
          autoComplete='off'>
          <Form.Item
            label='用户名'
            name='username'
            rules={[{ required: true, message: '请输入用户名!' }]}>
            <Input />
          </Form.Item>

          <Form.Item
            label='昵称'
            name='nickName'
            rules={[{ required: true, message: '请输入昵称!' }]}>
            <Input />
          </Form.Item>

          <Form.Item
            label='密码'
            name='password'
            rules={[{ required: true, message: '请输入密码!' }]}>
            <Input.Password />
          </Form.Item>

          <Form.Item
            label='确认密码'
            name='confirmPassword'
            rules={[{ required: true, message: '请输入确认密码!' }]}>
            <Input.Password />
          </Form.Item>

          <Form.Item
            label='邮箱'
            name='email'
            rules={[
              { required: true, message: '请输入邮箱!' },
              { type: 'email', message: '请输入合法邮箱地址!' },
            ]}>
            <Input />
          </Form.Item>

          <Form.Item
            label='验证码'
            name='captcha'
            rules={[{ required: true, message: '请输入验证码!' }]}>
            <Row gutter={8}>
              <Col span={14}>
                <Input />
              </Col>
              <Col span={10}>
                <Button type='primary' onClick={sendCaptcha}>
                  发送验证码
                </Button>
              </Col>
            </Row>
          </Form.Item>

          <Form.Item {...layout2}>
            <div className='links'>
              已有账号？去<a href=''>登录</a>
            </div>
          </Form.Item>

          <Form.Item {...layout1} label=' '>
            <Button className='btn' type='primary' htmlType='submit'>
              注册
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}
