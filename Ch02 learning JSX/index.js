//! Rendering Array and Objects
function App() {
    // student data
    const students = [
        {
            name: "Priyanshu",
            class: 12,
            marks: 90,
             image:"./images/bg.jpg"
        },
        {
            name: "Priya",
            class: 120,
            marks: 900,
            image:"./images/bg.jpg"
        },
        {
            name: "anshu",
            class: 12,
            marks: 980,
            image:"./images/bg.jpg"
        },
        {
            name: "Priy88anshu",
            class: 12,
            marks: 908,
            image:"./images/bg.jpg"
        }
    ];

    return (
        // returning JSX to UI
        <>
            <table border="1px">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Class</th>
                        <th>Marks</th>
                        <th>Picture</th>
                    </tr>
                </thead>

                <tbody>
                    {/* Concept:: returning JSX to JS and then Js is imbeded into JSX  */}
                    {students.map((student) => (
                        <tr key={student.name}>
                            <td>{student.name}</td>
                            <td>{student.class}</td>
                            <td>{student.marks}</td>
                            <td >  <img src={student.image} alt="Girl in a jacket" width="100" height="100" />   </td>
                        </tr>
                    ))}
                </tbody>

            </table>
        </>
    );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
