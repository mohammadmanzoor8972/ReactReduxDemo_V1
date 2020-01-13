import React from "react";
import "./styles.css";

const noteList = [];

class App extends React.Component {
  state = {
    noteitem: "",
    noteId: new Date().getTime(),
    noteList: ["test", "ram"]
  };

  element = React.createRef();

  render() {
    return (
      <div className="App">
        <h1>Sticky Notes</h1>
        <h4>Start adding notes!</h4>
        <div>
          <label>Notes</label>
          <input
            type="text"
            value={this.state.noteitem}
            ref={this.element}
            onChange={({ target }) => {
              this.setState({ noteitem: target.value });
            }}
          />
          <button
            onClick={() => {
              debugger;
              this.setState({
                noteList: [...this.state.noteList, this.state.noteitem],
                noteitem: ""
              });
              this.element.current.focus();
            }}
          >
            Add
          </button>
          <ul>
            {this.state.noteList.map(note => {
              return <li>{note}</li>;
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
const notesItem = ({ note }) => <li>{note}</li>;
