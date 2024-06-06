import React, { useState, useEffect } from 'react';
import './App.scss';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Form from './Components/Form';
import Results from './Components/Results';

const App = () => {
  const [data, setData] = useState(null);
  const [headers, setHeaders] = useState(null);
  const [loading, setLoading] = useState(false);
  const [requestParams, setRequestParams] = useState({});

  useEffect(() => {
    const callApi = async () => {
      setLoading(true);
      console.log('API call parameters: ', requestParams);

      try {
        const { url, method, body } = requestParams;
        const options = {
          method,
          headers: {
            'Content-Type': 'application/json'
          },
          body: method !== 'GET' && body ? JSON.stringify(body) : undefined,
        };

        const response = await fetch(url, options);
        console.log('API response: ', response);
        const responseData = await response.json();
        setData(responseData);
        setHeaders(Object.fromEntries(response.headers.entries()));
      } catch (error) {
        console.error('Error calling API:', error);
        setData({ error: 'Failed to fetch data' });
      } finally {
        setLoading(false);
      }
    };

    if (Object.keys(requestParams).length !== 0) {
      callApi();
    }
  }, [requestParams]);

  const handleApiCall = (params) => {
    setRequestParams(params);
  };

  return (
    <React.Fragment>
      <Header />
      <Form handleApiCall={handleApiCall} />
      <Results data={data} headers={headers} loading={loading} />
      <Footer />
    </React.Fragment>
  );
};

export default App;
