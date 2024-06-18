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
  Dropdown,
  Space,
  MenuProps,
} from 'antd'
import Link from 'next/link'

const { Title } = Typography

export const SignUpView = () => {
  const onFinish = async (values: any) => {}
  const { TabPane } = Tabs
  const onChange = (key: string) => {
    console.log(key)
  }

  const items: MenuProps['items'] = [
    {
      label: 'Laki-laki',
      key: '0',
    },
    {
      label: 'Perempuan',
      key: '1',
    },
  ]

  return (
    <>
      <Title level={2}>Registrasi Pasien</Title>
      <Tabs defaultActiveKey="2">
        <TabPane tab="Akun" key="1">
          <Spin spinning={false}>
            <Card>
              <Form
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
                  name="confirm"
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
        <TabPane tab="Info Pribadi" key="2">
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
              <Form.Item
                label="Jenis Kelamin"
                name="gender"
                rules={[
                  {
                    required: true,
                    message: 'Please choose your gender!',
                  },
                ]}
              >
                <Dropdown menu={{ items }} trigger={['click']}>
                  <Button block>
                    <a onClick={(e) => e.preventDefault()}>
                      <Space>Pilih Jenis Kelamin</Space>
                    </a>
                  </Button>
                </Dropdown>
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
              <Button type="primary" htmlType="submit" block>
                Daftar
              </Button>
            </Form>
          </Card>
        </TabPane>
      </Tabs>
    </>
  )
}
