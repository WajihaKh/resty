
const Results = ({ data, headers, loading }) => {
        return (
            <section>
                {loading ? (
                    <p>Loading...</p>
                ) : (
                    <>
                        <pre>{headers ? JSON.stringify(headers, null, 2) : null}</pre>
                        <pre>{data ? JSON.stringify(data, null, 2) : null}</pre>
                    </>
                )}
            </section>
        );
    };


export default Results;