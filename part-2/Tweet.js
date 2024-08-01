const Tweet = ({ username, name, date, message }) => {
    return (
      <div className="tweet">
        <h3>{name}</h3>
        <p>@{username}</p>
        <p>{date}</p>
        <p>{message}</p>
      </div>
    );
  };