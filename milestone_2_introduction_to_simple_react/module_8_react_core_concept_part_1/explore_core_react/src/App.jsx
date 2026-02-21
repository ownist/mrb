import "./App.css";

function App() {
  return (
    <>
      <h1>React Core Concepts</h1>
      <Student />
      <Student />

      <Person />
      <Developer name="Shahed" tech="JavaScript" />
      <Developer name="Ownist" tech="React.js" />
    </>
  );
}

// student
function Student() {
  return (
    <div className="student">
      <p>Name:</p>
      <p>Dept:</p>
    </div>
  );
}

function Person() {
  const name = "Ownist";

  // style
  const personStyle = {
    color: "green",
    textAlign: "left",
  };

  return (
    <div style={personStyle}>
      <h3>I'm {name}</h3>
    </div>
  );
}

function Developer(props) {
  console.log(props);

  return (
    <div>
      <h2>Developer: {props.name}</h2>
      <h3>Technology: {props.tech}</h3>
    </div>
  );
}

export default App;
