import { Form, Input, Button, Checkbox } from 'antd';
import {connect} from 'react-redux'
import mapDispatchToProps from '../../store/actions/login'
const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };
const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };
const Login = (props) => {
    console.log(props)
    const onFinish = values => {
      console.log('Success:', values);
    };
    const onFinishFailed = errorInfo => {
      console.log('Failed:', errorInfo);
    };
    return (
      <Form
        {...layout}
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    );
  };

let mapStateToProps = (state)=>state.user
export default connect(mapStateToProps,mapDispatchToProps)(Login)
