const Button = ({ type, label }) => {
    return (
      <button className={`btn btn-${type}`}>
        {label}
      </button>
    );
  };