import React, { useState } from 'react';
import axios from 'axios';

import './App.scss';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Form from './Components/Form';
import Results from './Components/Results';

const App = () => {
  const [data, setData] = useState(null);
  const [headers, setHeaders] = useState(null);
  const [requestParams, setRequestParams] = useState({});
  const [loading, setLoading] = useState(false);

  const callApi = async (params) => {
    setLoading(true)
    setRequestParams(params);
    try {
      const response = await axios ({
        method: params.method,
        url: params.url,
        data: params.body,
      });
      setData(response.data);
      setHeaders(response.headers);
    } catch (error) {
      console.error('Error calling API:', error);
      setData({ error: 'Failed to fetch data' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <React.Fragment>
      <Header />
      <div>Request Method: {requestParams.method}</div>
      <div>URL: {requestParams.url}</div>
      <Form handleApiCall={callApi} />
      <Results data={data} headers={headers} loading={loading} />
      <Footer />
    </React.Fragment>
  );
};

export default App;
