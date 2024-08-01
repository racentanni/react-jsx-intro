const Person = ({ name, age, hobbies }) => {
    const displayName = name.length > 8 ? name.slice(0, 6) : name;
    return (
      <div className="person">
        <p>Learn some information about this person</p>
        <h3>{age > 18 ? "please go vote!" : "you must be 18"}</h3>
        <p>Name: {displayName}</p>
        <p>Age: {age}</p>
        <ul>
          {hobbies.map((hobby, index) => (
            <li key={index}>{hobby}</li>
          ))}
        </ul>
      </div>
    );
  };