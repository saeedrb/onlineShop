import { ErrorMessage, Field, Form, Formik } from "formik";
import styles from "./tickets.module.css";
import * as Yup from "yup";
import { Button } from "../../components/elements";
const Tickets = () => {
  const initialValues = {
    title: "",
    content: "",
  };
  const validation = Yup.object().shape({
    title: Yup.string().required("وارد کردن موضوع تیکت الزامی است."),
    content: Yup.string().required("وارد کردن متن تیکت الزامی است."),
  });
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2>ایجاد تیکت</h2>
        <span>
          لطفا موضوع تیکت را جهت افزایش سرعت پاسخگویی دقیقا موضوعی مربوط به
          محتوا وارد نمایید.
        </span>
      </div>
      <div className={styles.form}>
        <Formik
          initialValues={initialValues}
          validationSchema={validation}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          <Form>
            <span>
              <ErrorMessage name="title" />
            </span>
            <Field name="title" placeholder="موضوع" />

            <span>
              <ErrorMessage name="content" />
            </span>
            <Field component="textarea" name="content" placeholder="متن تیکت" />

            <Button value="ارسال" type="submit" exists={true} />
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default Tickets;
