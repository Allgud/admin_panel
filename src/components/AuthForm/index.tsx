import { Form, Button, Input, Typography } from 'antd'
import * as styles from './styles'
import { useAppDispatch } from '../../hooks/useAppDispatch'
import type { FormValues } from '../../redux/types'
import { getTokensAction } from '../../redux/actions/getTokensAction'

const AuthForm = () => {
    const dispatch = useAppDispatch()

    const onSubmit = (data: FormValues) => {
        dispatch(getTokensAction(data))
    }

    const onSubmitError = (errorInfo: any) => {
        console.log(errorInfo)
    }

    return (
        <Form
            style={styles.authForm}
            onFinish={onSubmit}
            onFinishFailed={onSubmitError}
        >
            <Form.Item
                label='Email'
                name='email'
                rules={[{ required: true, message: 'Поле обязательно для заполнения' }]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label='Password'
                name='password'
                rules={[{ required: true, message: 'Поле обязательно для заполнения' }]}
            >
                <Input.Password />
            </Form.Item>
            <Form.Item>
                <Button
                    type='primary'
                    htmlType='submit'
                >
                    Отправить
                </Button>
            </Form.Item>
        </Form>
    )
}

export default AuthForm