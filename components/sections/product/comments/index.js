import styles from "./comments.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "Yup";
import { Button } from "../../../elements";

const Comments = () => {
  const validation = Yup.object().shape({
    comment: Yup.string().required("لطفا نظر خود را وارد کنید"),
    name: Yup.string().required("لطفا نام خود را وارد کنید")
  });
  return (
    <div className={styles.container}>
      <Formik
        initialValues={{ comment: "", name: "" }}
        onSubmit={(values) => {
          console.log(values)
        }}
        validationSchema={validation}
      >
        <Form className={styles.form}>
          <h3>دیدگاه خود در مورد این محصول را به اشتراک بگذارید.</h3>
          <span className={styles.error}><ErrorMessage name="name" /></span>
          <Field name="name" placeholder="نام شما" />
          <span className={styles.error}><ErrorMessage name="comment" /></span>
          
          <Field name="comment" component="textarea" placeholder="دیدگاه شما" />
          <Button type="submit" value="ارسال" exists="true" />
        </Form>
      </Formik>
    </div>
  );
};

export default Comments;
