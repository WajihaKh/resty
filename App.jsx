import React, { useState } from 'react';
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
    setLoading(true);
    setRequestParams(params);
    console.log('API call parameters: ', params);

    try {
      let url = params.url;
      let options = {
        method: params.method,
        headers: {
          'Content-Type': 'application/json'
        },
      };

      if (params.method !== 'GET' && params.body) {
        options.body = JSON.stringify(params.body);
        // Redirect non-GET methods to JSONPlaceholder for testing
        url = 'https://jsonplaceholder.typicode.com/posts';
      }

      const response = await fetch(url, options);
      console.log('API response: ', response);
      const data = await response.json();
      setData(data);
      setHeaders(Object.fromEntries(response.headers.entries()));
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
