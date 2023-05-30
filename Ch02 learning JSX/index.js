//! Rendering Array and Objects
function App() {
    // student data
    const students = [
      {
        name: "Priyanshu",
        class: 12,
        marks: 90
      },
      {
        name: "Priya",
        class: 120,
        marks: 900
      },
      {
        name: "anshu",
        class: 12,
        marks: 980
      },
      {
        name: "Priy88anshu",
        class: 12,
        marks: 908
      }
    ];
  
    return (
      // returning JSX to UI
      <>
        <table>
          <tr>
            <th>Name</th>
            <th>Class</th>
            <th>Marks</th>
          </tr>
     
        {/* Concept:: returning JSX to JS and then Js is imbeded into JSX  */}
          {students.map((student) => (
            <tr key={student.name}>
              <td>{student.name}</td>
              <td>{student.class}</td>
              <td>{student.marks}</td>
            </tr>
          ))}
        </table>
      </>
    );
  }
  
  ReactDOM.createRoot(document.getElementById("root")).render(<App />);
  