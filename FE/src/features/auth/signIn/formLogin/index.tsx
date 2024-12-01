import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Form } from "antd";
import InputComponent from "../../../../components/form/inputComponent";
import ButtonComponent from "../../../../components/form/buttonComponent";
import {
  LockOutlined,
  UserOutlined,
  AliwangwangOutlined,
} from "@ant-design/icons";
import { schema, FormData } from "./constant";
import authApi from "../../../../api/auth";
import Notification from "../../../../components/notificationSend";
import { useNavigate } from "react-router-dom";
import { HEADER } from "../../../../constants/index";
import { setRefreshToken, setToken, setUser } from "../../../../utils";
import { setHeader } from "../../../../api/axiosService";

const FormSignIn = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormData>({
    // use resolver to validate with yup
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: Required<FormData>) => {
    try {
      setLoading(true);
      const { metadata } = await authApi.login(data);
      const { tokens, user } = metadata;

      // Notification({
      //   message: TEXT_COMMON.SUCCESS_TEXT.NOTIFY_MESSAGE,
      //   description: TEXT_COMMON.SUCCESS_TEXT.LOGIN_DESCRIPTION,
      // });
      setUser(user)
      setToken(tokens.accessToken)
      setRefreshToken(tokens.refreshToken)
      setHeader(HEADER.AUTHORIZATION, tokens.accessToken)
      navigate('/')
      window.location.reload();
    } catch (error: unknown) {
      // NotificationError(error)
      throw error;
    } finally {
      setLoading(false);
    }
  };
  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="singIn__content-form">
      <h2 className="form__title text-2xl text-center">Đăng nhập</h2>
      <Form
        name="basic"
        onFinish={handleSubmit(onSubmit)}
        onFinishFailed={onFinishFailed}
      >
        <InputComponent
          name="email"
          control={control}
          errors={errors}
          placeholder="Nhập email"
          className="remove__border"
          icon={<UserOutlined className="site-form-item-icon" />}
        />
        <InputComponent
          name="password"
          control={control}
          errors={errors}
          placeholder="Nhập mật khẩu"
          className="remove__border"
          type="password"
          icon={<LockOutlined />}
        />
        <a href="" className="text-secondary font-semibold hover:text-primary">Quên mật khẩu?</a>
        <ButtonComponent
          htmlType="submit"
          label="Đăng nhập"
          className="btn__submit"
          loading={loading}
        />
        <div className="btn__login-foreign">
          
        </div>
      </Form>
    </div>
  );
};

export default FormSignIn;
