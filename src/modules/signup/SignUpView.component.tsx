'use client'
import {
  Button,
  Card,
  Flex,
  Form,
  Input,
  Spin,
  Typography,
  Tabs,
  Radio,
  RadioChangeEvent,
  message,
} from 'antd'
import Link from 'next/link'
import { useState } from 'react'

const { Title } = Typography
const { TabPane } = Tabs

export const SignUpView = () => {
  const [form] = Form.useForm()
  const [activeTabKey, setActiveTabKey] = useState('1')
  const [isTab2Enabled, setIsTab2Enabled] = useState(false)
  const [gender, setGender] = useState('Pria')
  const [messageApi, contextHolder] = message.useMessage()

  const onChange = (e: RadioChangeEvent) => {
    console.log('radio checked', e.target.value)
    setGender(e.target.value)
  }

  const success = () => {
    messageApi.open({ type: 'success', content: 'Data berhasil dibuat' })
  }

  const onFinish = (values: any) => {
    console.log('Received values from form: ', values)
    setIsTab2Enabled(true)
    setActiveTabKey('2')
  }

  const items = [
    {
      label: 'Pria',
      value: 'Pria',
    },
    {
      label: 'Wanita',
      value: 'Wanita',
    },
  ]

  return (
    <>
      {contextHolder}
      <Title level={2}>Registrasi Pasien</Title>
      <Tabs activeKey={activeTabKey} onChange={setActiveTabKey}>
        <TabPane tab="Akun" key="1">
          <Spin spinning={false}>
            <Card>
              <Form
                form={form}
                name="register"
                onFinish={onFinish}
                autoComplete="off"
                layout="vertical"
              >
                <Form.Item
                  label="Email"
                  name="email"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your email!',
                      type: 'email',
                    },
                  ]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  label="Password"
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your password!',
                    },
                    {
                      min: 6,
                      message: 'Password minimum 6 character!',
                    },
                  ]}
                >
                  <Input.Password />
                </Form.Item>
                <Form.Item
                  name="confirmPassword"
                  label="Confirm Password"
                  dependencies={['password']}
                  hasFeedback
                  rules={[
                    {
                      required: true,
                      message: 'Please confirm your password!',
                    },
                    ({ getFieldValue }) => ({
                      validator(_, value) {
                        if (!value || getFieldValue('password') === value) {
                          return Promise.resolve()
                        }
                        return Promise.reject(
                          new Error(
                            'The new password that you entered do not match!',
                          ),
                        )
                      },
                    }),
                  ]}
                >
                  <Input.Password />
                </Form.Item>

                <Form.Item>
                  <Flex vertical gap={5}>
                    <Button type="primary" htmlType="submit" block>
                      Selanjutnya
                    </Button>
                    <span>
                      Sudah punya akun?{' '}
                      <Link href="/signin">Masuk Sekarang</Link>
                    </span>
                  </Flex>
                </Form.Item>
              </Form>
            </Card>
          </Spin>
        </TabPane>
        <TabPane tab="Info Pribadi" key="2" disabled={!isTab2Enabled}>
          <Card>
            <Form
              name="info-pribadi"
              onFinish={onFinish}
              autoComplete="off"
              layout="vertical"
            >
              <Form.Item
                label="Nama"
                name="name"
                rules={[
                  {
                    required: true,
                    message: 'Please input your name!',
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Alamat"
                name="alamat"
                rules={[
                  {
                    required: true,
                    message: 'Please input your address!',
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="No. HP"
                name="no-hp"
                rules={[
                  {
                    required: true,
                    message: 'Please input your name!',
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item label="Jenis Kelamin">
                <Radio.Group
                  options={items}
                  onChange={onChange}
                  value={gender}
                />
              </Form.Item>
              <Form.Item
                label="No. BPJS"
                name="no-bpjs"
                rules={[
                  {
                    required: true,
                    message: 'Please input no BPJS!',
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Button type="primary" htmlType="submit" block onClick={success}>
                Daftar
              </Button>
            </Form>
          </Card>
        </TabPane>
      </Tabs>
    </>
  )
}
