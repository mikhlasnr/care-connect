"use client";
import { Button, Card, Flex, Form, Input, Spin, Typography } from "antd";
import Link from "next/link";
import { useRouter } from "next/navigation";

const { Title } = Typography;

export const SignInView = () => {
  const router = useRouter();
  const onFinish = async (values: any) => {
    router.push("/");
  };

  return (
    <Spin spinning={false}>
      <Card>
        <Title level={1}>Masuk</Title>
        <Form
          name="login"
          onFinish={onFinish}
          layout="vertical"
          scrollToFirstError
        >
          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                type: "email",
                message: "The input is not valid E-mail!",
              },
              {
                required: true,
                message: "Please input your E-mail!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="password"
            label="Password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item>
            <Flex vertical gap={5}>
              <Button type="primary" htmlType="submit" block>
                Masuk
              </Button>
              <span>
                Belum punya akun? Ayo {" "}
                <Link href="/signup">Daftar</Link>
              </span>
            </Flex>
          </Form.Item>
        </Form>
      </Card>
    </Spin>
  );
};
