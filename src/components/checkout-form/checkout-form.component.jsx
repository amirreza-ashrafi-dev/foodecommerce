import React from 'react';
import { useFormik } from 'formik';
import validate from './checkout-form-validation';
import './checkout-form.styles.sass';
import ErrorInout from '../error-input/error-input.component';


const CheckoutForm = () => {
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            address: '',
            postCode: '',
            note: '',
            phone: '',
        },
        validate,
        onSubmit: (values) => {
            return alert(JSON.stringify(values, null, 2))
        }
    })

    return (
        <div className='form'>
            <form onSubmit={formik.handleSubmit}>

                <div className="form-group">
                    <label htmlFor="firstName">نام</label>
                    <input
                        type="firstName"
                        className="form-control"
                        id="firstName"
                        aria-describedby="emailHelp"
                        placeholder="نام  خود را وارد نمایید"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.firstName}
                    />
                    <ErrorInout touched={formik.touched.firstName} error={formik.errors.firstName} />
                </div>

                <div className="form-group">
                    <label htmlFor="lastName">نام خانوادگی</label>
                    <input
                        type="text"
                        className="form-control"
                        id="lastName"
                        placeholder="نام خانوادگی خود را وارد کنید"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.lastName}
                    />
                    <ErrorInout touched={formik.touched.lastName} error={formik.errors.lastName} />
                </div>

                <div className="form-group">
                    <label htmlFor="email">ایمیل</label>
                    <input
                        type="text"
                        className="form-control"
                        id="email"
                        placeholder="ایمیل خود را وارد نمایید"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                    />
                    <ErrorInout touched={formik.touched.email} error={formik.errors.email} />
                </div>

                <div className="form-group">
                    <label htmlFor="address">آدرس</label>
                    <input
                        type="text"
                        className="form-control"
                        id="address"
                        placeholder="آدرس خود را وارد نمایید"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.address}
                    />
                    <ErrorInout touched={formik.touched.address} error={formik.errors.address} />
                </div>

                <div className="form-group">
                    <label htmlFor="postCode">کد پستی</label>
                    <input
                        type="text"
                        className="form-control"
                        name="postCode"
                        id="postCode"
                        placeholder="کد پستی خود را وارد نمایید"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.postCode}
                    />
                    <ErrorInout touched={formik.touched.postCode} error={formik.errors.postCode} />
                </div>

                <div className="form-group">
                    <label htmlFor="phone">شماره تلفن</label>
                    <input
                        type="text"
                        className="form-control"
                        id="phone"
                        name="phone"
                        placeholder="شماره تلفن"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.phone}
                    />
                    <ErrorInout touched={formik.touched.phone} error={formik.errors.phone} />
                </div>

                <div className="form-group">
                    <label htmlFor="note">یادداشت سفارش</label>
                    <textarea
                        className="form-control"
                        id="note"
                        rows="3"
                        name="note"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.note}></textarea>
                </div>

                <button type="submit reset" className="btn btn-primary" disabled={formik.isSubmitting}>Submit</button>
            </form>
        </div>
    )
}

export default CheckoutForm;