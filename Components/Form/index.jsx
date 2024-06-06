import { useState } from 'react';
import './Form.scss';

const Form = ({ handleApiCall }) => {
  const [url, setUrl] = useState('');
  const [method, setMethod] = useState('GET');
  const [body, setBody] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      method: method,
      url: url,
      body: body ? JSON.parse(body) : undefined
    };
    handleApiCall(formData);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          <span>URL: </span>
          <input data-testid="url-input" name='url' type='text' value={url} onChange={(e) => setUrl(e.target.value)} />
        </label>
        <label className="methods">
          <span data-testid="get-input" className={method === 'GET' ? 'active' : ''} onClick={() => setMethod('GET')}>GET</span>
          <span className={method === 'POST' ? 'active' : ''} onClick={() => setMethod('POST')}>POST</span>
          <span className={method === 'PUT' ? 'active' : ''} onClick={() => setMethod('PUT')}>PUT</span>
          <span className={method === 'DELETE' ? 'active' : ''} onClick={() => setMethod('DELETE')}>DELETE</span>
        </label>
        {(method === 'POST' || method === 'PUT') && (
          <label>
            <span>Body: </span>
            <textarea data-testid="text-area" name='body' value={body} onChange={(e) => setBody(e.target.value)} />
          </label>
        )}
        <button data-testid="go-button" type='submit'>GO!</button>
      </form>
    </>
  );
};

export default Form;
