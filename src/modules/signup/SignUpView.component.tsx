'use client'
import { Button, Card, Flex, Form, Input, Spin, Typography } from 'antd';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const { Title } = Typography;

export const SignUpView = () => {
  const router = useRouter();

  const onFinish = async (values: any) => {
    router.push('/signin');
  };

  return (
    <Spin spinning={false}>
      <Card>
        <Title level={1}>Daftar</Title>
        <Form name="login" onFinish={onFinish} autoComplete="off" layout="vertical">
          <Form.Item
            label="Name"
            name="name"
            rules={[
              {
                required: true,
                message: 'Please input your name!'
              }
            ]}>
            <Input />
          </Form.Item>
          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                message: 'Please input your email!',
                type: 'email'
              }
            ]}>
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your password!'
              },
              {
                min: 6,
                message: 'Password minimum 6 character!'
              }
            ]}>
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
                message: 'Please confirm your password!'
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error('The new password that you entered do not match!')
                  );
                }
              })
            ]}>
            <Input.Password />
          </Form.Item>

          <Form.Item>
            <Flex vertical gap={5}>
              <Button type="primary" htmlType="submit" loading={status === 'loading'} block>
                Daftar
              </Button>
              <span>
                Sudah punya akun? <Link href="/signin">Masuk Sekarang</Link>
              </span>
            </Flex>
          </Form.Item>
        </Form>
      </Card>
    </Spin>
  );
};
