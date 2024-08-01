const App = () => {
    return (
      <div>
        <Tweet username="user1" name="John Doe" date={new Date().toDateString()} message="This is my first tweet!" />
        <Tweet username="user2" name="Jane Smith" date={new Date().toDateString()} message="Hello, world!" />
        <Tweet username="user3" name="Alice Johnson" date={new Date().toDateString()} message="React is awesome!" />
      </div>
    );
  };