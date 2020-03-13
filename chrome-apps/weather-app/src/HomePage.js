import React from 'react';
import { Formik } from 'formik';
import { observer } from 'mobx-react';
import * as yup from "yup";
import { Button, Col, Form, Tab, Tabs } from 'react-bootstrap/Form';
import CurrentWeather from './CurrentWeather';
import Forecast from './Forecast';

const schema = yup.object({
  keyword: yup.string().required('Keyword is required')
});

function HomePage({ keywordStore }) {
  const [initialized, setInitialized] = React.useState(false);

  const handleSubmit = async evt => {
    const isValid = await schema.validate(evt);

    if (!isValid) {
      return;
    }

    localStorage.setItem('keyword', evt.keyword);
    keywordStore.setKeyword(evt.keyword);
  };

  React.useEffect(() => {
    if (!initialized) {
      keywordStore.setKeyword(localStorage.getItem("keyword") || "");
      setInitialized(true);
    }
  });

  return (
    <div className="page">
      <h1>Weather</h1>
      <Formik
        validationSchema={schema}
        onSubmit={handleSubmit}
        initialValues={{ keyword: localStorage.getItem("keyword") || "" }}
      >
        {({
          handleSubmit,
          handleChange,
          handleBlur,
          values,
          touched,
          isInvalid,
          errors
        }) => (
          <Form noValidate onSubmit={handleSubmit}>
            <Form.Row>
              <Form.Group as={Col} md="12" controlId="keyword">
                <Form.Label>City</Form.Label>
                <Form.Control
                  type="text"
                  name="keyword"
                  placeholder="City"
                  value={values.keyword || ""}
                  onChange={handleChange}
                  isInvalid={touched.keyword && errors.keyword}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.keyword}
                </Form.Control.Feedback>
              </Form.Group>
            </Form.Row>
            <Button type="submit" style={{ marginRight: "10px" }}>
              Search
            </Button>
          </Form>
        )}
      </Formik>
      <br />
      <Tabs defaultActiveKey="weather">
        <Tab eventKey="weather" title="Current Weather">
          <CurrentWeather keywordStore={keywordStore} />
        </Tab>
        <Tab eventKey="forecast" title="Forecast">
          <Forecast keywordStore={keywordStore} />
        </Tab>
      </Tabs>
    </div>
  );
}

export default observer(HomePage);
