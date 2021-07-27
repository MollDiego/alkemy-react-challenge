import { Button } from "react-bootstrap";
import { Field, Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import axios from "axios";

export default function Searcher() {
  const SearchSchema = Yup.object().shape({
    search: Yup.string()
      .min(2, "Ingrese al menos 3 caracteres para la busqueda")
      .required("campo requerido para la Busqueda"),
  });

  async function searchHeroe(value) {
    let baseURL = "https://superheroapi.com/api/4912475925446355";
    let resp = await axios.get(`${baseURL}/search/${value.search}`);
    if (resp.status === 200) {
      console.log(resp);
    }
  }
  return (
    <div>
      es el Buscador
      <Formik
        validationSchema={SearchSchema}
        initialValues={{ search: "" }}
        onSubmit={(value) => {
          searchHeroe(value);
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <Field name="search" />
            <Button type="submit" size="sm" variant="primary">
              Buscar
            </Button>
            {errors.search && touched.search && (
              <div className="text-danger">{errors.search}</div>
            )}
          </Form>
        )}
      </Formik>
    </div>
  );
}
