import { Formik, Form, ErrorMessage, Field } from "formik";
import * as Yup from "yup";
import { Button } from "../../../elements";
import styles from "./password.module.css";

const PasswordEdit = () => {
  const initialValues = {
    password: "",
    repeatPassword: "",
  };
  const validation = Yup.object().shape({
    password: Yup.string().required("وارد کردن کلمه عبور الزامی است."),
    repeatPassword: Yup.string().required("لطفا تکرار کلمه عبور را وارد کنید"),
  });
  return (
    <div className={styles.container}>
      <Formik initialValues={initialValues}
      validationSchema={validation}>
          <Form className={styles.form}>
            <span><ErrorMessage name="password" /></span>
            <Field name="password" placeholder="کلمه عبور جدید" />

            <span><ErrorMessage name="repeatPassword" /></span>
            <Field name="repeatPassword" placeholder="تکرار کلمه عبور" />

            <Button type="submit" exists={true} value="ویرایش کلمه عبور"/>
          </Form>
      </Formik>
    </div>
  );
};

export default PasswordEdit;
