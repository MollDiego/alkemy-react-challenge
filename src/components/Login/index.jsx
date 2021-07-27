import React from "react";
import { useAuthDispatch } from "../../service/Auth";
import axios from "axios";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";

export default function Login() {
  const SignupSchema = Yup.object().shape({
    mail: Yup.string().email("Email Invalido").required("Email requerido"),
    password: Yup.string()
      .min(2, "Muy corta")
      .max(50, "Muy larga")
      .required("Password requerida"),
  });
  const dispatch = useAuthDispatch();

  async function userLog(values) {
    try {
      let response = await axios.post("http://challenge-react.alkemy.org/", {
        email: values.mail,
        password: values.password,
      });
      if (response.status !== 200) {
        throw new Error(`Ocurrio un error`);
      }
      if (!response.data) {
        throw new Error("Empty Token");
      }

      let base64Results = response.data.token.split(".");
      if (base64Results.length !== 3) {
        throw new Error("Malformed Token");
      }
      var token = response.data.token;
      dispatch({ type: "LOGIN", payload: { token: token } });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <h1>Superhero</h1>
      <Formik
        initialValues={{ mail: "", password: "" }}
        validationSchema={SignupSchema}
        onSubmit={(values) => userLog(values)}
      >
        {({ errors, touched }) => (
          <Form>
            <Field name="mail" type="email" placeholder="Email" />
            {errors.mail && touched.mail ? <div>{errors.mail}</div> : null}
            <Field name="password" type="password" placeholder="Password" />
            {errors.password && touched.password ? (
              <div>{errors.password}</div>
            ) : null}
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
