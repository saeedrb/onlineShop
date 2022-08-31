import { Formik, Form, ErrorMessage, Field } from "formik";
import styles from "./personaldata.module.css";
import * as Yup from "yup";
import { Button } from "../../../elements";
import PasswordEdit from "../passwordedit";

const PersonalData = () => {
  const initialValues = {
    fullname: "",
    phone: "",
    email: "",
    province: "",
    city: "",
    address: "",
  };
  const validation = Yup.object().shape({
    fullname: Yup.string(
      "لطفا برای نام خود از حروف فارسی استفاده کنید"
    ).required("لطفا نام کامل خود را وارد کنید"),
    phone: Yup.string().required("لطفا یک شماره تلفن معتبر وارد کنید."),
    email: Yup.string()
      .email("لطفا یک ایمیل معتبر وارد کنید.")
      .required("فیلد نمیتواند خالی باشد."),
    province: Yup.string().required("لطفا استان خود را انتخاب کنید."),
    city: Yup.string().required("لطفا شهر خود را انتخاب کنید."),
    address: Yup.string().required("آدرس خود را وارد کنید."),
  });
  return (
    <div className={styles.container}>
      <div className={styles.infoEdit}>
        <Formik
          initialValues={initialValues}
          onSubmit={(values) => {
            console.log(values);
          }}
          validationSchema={validation}
        >
          <Form className={styles.form}>
            <span>
              <ErrorMessage name="fullname" />
            </span>
            <Field name="fullname" placeholder="نام شما" />

            <span>
              <ErrorMessage name="phone" />
            </span>
            <Field name="phone" placeholder="شماره تماس" />

            <span>
              <ErrorMessage name="email" />
            </span>
            <Field name="email" placeholder="ایمیل شما" />

            <span>
              <ErrorMessage name="province" />
            </span>
            <Field as="select" name="province">
              <option value="">... استان ...</option>
              <option value="maz">مازندران</option>
              <option value="sem">سمنان</option>
              <option value="teh">تهران</option>
            </Field>

            <span>
              <ErrorMessage name="city" />
            </span>
            <Field as="select" name="city">
              <option value="">... شهر ...</option>
              <option value="sari">ساری</option>
              <option value="damghan">دامغان</option>
              <option value="tehran">کرج</option>
            </Field>
            <span><ErrorMessage name="address" /></span>
            <Field as="textarea" name="address" rows="4" />

            <Button type="submit" value="ویرایش" exists="true" />
          </Form>
        </Formik>
      </div>
      <div className={styles.passwordEdit}>
        <PasswordEdit />
      </div>
    </div>
  );
};

export default PersonalData;
