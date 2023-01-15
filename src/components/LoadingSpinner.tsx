import ClipLoader from "react-spinners/ClipLoader";

const LoadingSpinner = (props: { loading: boolean }) => {
  return (
    <div className="grid place-items-center min-h-screen">
      <ClipLoader
        color="secondry"
        loading={props.loading}
        // cssOverride={override}
        size={50}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default LoadingSpinner;
