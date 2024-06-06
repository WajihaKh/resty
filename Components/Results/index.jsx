import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { prism } from 'react-syntax-highlighter/dist/esm/styles/prism';

const Results = ({ data, headers, loading }) => {
  return (
    <section>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <div>
            <h3>Response Headers:</h3>
            <SyntaxHighlighter language="json" style={prism}>
              {headers && JSON.stringify(headers, null, 2)}
            </SyntaxHighlighter>
          </div>
          <div>
            <h3>Response Data:</h3>
            <SyntaxHighlighter language="json" style={prism} data-testid="json-display">
              {data && JSON.stringify(data, null, 2)}
            </SyntaxHighlighter>
          </div>
        </>
      )}
    </section>
  );
};

export default Results;
