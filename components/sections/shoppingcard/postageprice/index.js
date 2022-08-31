import { Field, Formik, Form, ErrorMessage } from 'formik'
import styles from './postageprice.module.css'
import * as Yup from 'yup';
import { Button } from '../../../elements';


const PostagePrice = () => {
    const initialValues = {
        province: "",
        city: "",
        postalCode: "",
        address: ""
    };
    const validation = Yup.object().shape({
        province: Yup.string().required("استان را انتخاب کنید..."),
        city: Yup.string().required("شهر را انتخاب کنید"),
        postalCode: Yup.string().required("لطفا کد پستی را وارد کنید"),
        address: Yup.string().required("لطفا آدرس را وارد کنید.")
    });
  return (
    <div className={styles.container}>
        <h3>محاسبه هزینه ارسال</h3>
        <Formik initialValues={initialValues} validationSchema={validation} >
            <Form className={styles.form}>
                <label for="province">استان <span><ErrorMessage name='province'/></span></label>
                
                <Field name="province" as="select" >
                    <option>-- انتخاب کنید --</option>
                    <option value="مازندران">مازندران</option>
                    <option value="تهران">تهران</option>
                </Field>

                <label for="city">شهر <span><ErrorMessage name='city'/></span></label>
                
                <Field name="city" as="select" >
                    <option>-- انتخاب کنید --</option>
                    <option value="ساری">ساری</option>
                    <option value="تهران">تهران</option>
                </Field>

                <label for="postalCode">کد پستی <span><ErrorMessage name='postalCode'/></span></label>
                
                <Field name="postalCode" placeholder="کدپستی" />

                <label for="address">آدرس پستی <span><ErrorMessage name='address'/></span></label>
                
                <Field name="address" as="textarea" placeholder="آدرس پستی" />
    ‍            <Button value="محاسبه" exists={true} type="submit" />
            </Form>
        </Formik>
    </div>
  )
}

export default PostagePrice