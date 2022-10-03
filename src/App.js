import { useFormik } from "formik";
import * as Yup from "yup";
import moment from "moment";

import Input from "./components/Input";
import { useState } from "react";

export const App = () => {
    const formik = useFormik({
        initialValues: {
            email: "",
            firstName: "",
            lastName: "",
            username: "",
            password: "",
            passwordConfirmation: "",
            birthDate: "",
            gitHub: "",
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .required("Your email is required")
                .email("Your email is invalid"),
            firstName: Yup.string().required("First Name required"),
            lastName: Yup.string().required("Last Name required"),
            username: Yup.string()
                .required("Username required")
                .min(4, "Username is too short"),
            password: Yup.string()
                .required("Password is required")
                .min(8, "password trop court")
                .matches(
                    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,
                    "password needs Uppercase, lowercase, number and special character"
                ),
            passwordConfirmation: Yup.string().oneOf(
                [Yup.ref("password"), null],
                "Passwords must match"
            ),
            birthDate: Yup.string()
                .required("Date of Birth required")
                .test("Date of Birth", "You need to be 18.", (value) => {
                    return moment().diff(moment(value), "years") >= 18;
                }),
            gitHub: Yup.string()
                .required("Github link required")
                .url("Not an Url"),
        }),

        validateOnChange: false,

        onSubmit: (values, { resetForm, setSubmitting }) => {
            setSubmitting(true);
            setTimeout(() => {
                setSubmitting(false);
                resetForm();
            }, 3000);
        },
    });
    console.log(formik);
    return (
        <>
            <form onSubmit={formik.handleSubmit}>
                <Input
                    type="email"
                    name="email"
                    placeholder="email"
                    value={formik.values.email}
                    handleChange={formik.handleChange}
                    error={formik.errors.email}
                    isDisabled={formik.isSubmitting}
                />
                <Input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formik.values.firstName}
                    handleChange={formik.handleChange}
                    error={formik.errors.firstName}
                    isDisabled={formik.isSubmitting}
                />
                <Input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formik.values.lastName}
                    handleChange={formik.handleChange}
                    error={formik.errors.lastName}
                    isDisabled={formik.isSubmitting}
                />
                <Input
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={formik.values.username}
                    handleChange={formik.handleChange}
                    error={formik.errors.username}
                    isDisabled={formik.isSubmitting}
                />
                <Input
                    type="password"
                    name="password"
                    placeholder="password"
                    value={formik.values.password}
                    handleChange={formik.handleChange}
                    error={formik.errors.password}
                    isDisabled={formik.isSubmitting}
                />
                <Input
                    type="password"
                    name="passwordConfirmation"
                    placeholder="password confirmation"
                    value={formik.values.passwordConfirmation}
                    handleChange={formik.handleChange}
                    error={formik.errors.passwordConfirmation}
                    isDisabled={formik.isSubmitting}
                />
                <Input
                    type="date"
                    name="birthDate"
                    placeholder="Birth date"
                    value={formik.values.birthDate}
                    handleChange={formik.handleChange}
                    error={formik.errors.birthDate}
                    isDisabled={formik.isSubmitting}
                />
                <Input
                    type="text"
                    name="gitHub"
                    placeholder="gitHub"
                    value={formik.values.gitHub}
                    handleChange={formik.handleChange}
                    error={formik.errors.gitHub}
                    isDisabled={formik.isSubmitting}
                />

                <button type="submit" disabled={formik.isSubmitting}>
                    Envoyer
                </button>
            </form>
            {formik.isSubmitting && <p>Success !</p>}
        </>
    );
};

export default App;
