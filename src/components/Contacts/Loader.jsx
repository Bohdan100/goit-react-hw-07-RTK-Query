import { Watch } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <div role="alert">
      <div>
        <Watch
          height="50"
          width="50"
          radius="48"
          color="#4fa94d"
          ariaLabel="watch-loading"
          wrapperStyle={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '10px',
          }}
          wrapperClassName=""
          visible={true}
        />
        Loading...
      </div>
    </div>
  );
};
