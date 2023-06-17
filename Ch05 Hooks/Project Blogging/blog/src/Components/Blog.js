import React, { useRef, useState, useEffect, useReducer } from 'react';
import { db } from '../firebaseInit'

import { collection, addDoc, getDocs, doc } from "firebase/firestore";


// function blogsReducer(state, action) {
//     switch (action.type) {
//         case "ADD":
//             return [action.blog, ...state];
//         case "REMOVE":
//             return state.filter((blog, index) => index !== action.index);
//         default:
//             return [];
//     }
// }


export default function Blog() {
    const [formData, setFormData] = useState({ title: '', content: '' });
    const [blogs, setBlogs] = useState([]);
    // const [blogs, dispatch] = useReducer(blogsReducer, [])
    //holding the reffeernce
    const inputRef = useRef(null);

    // console.log('************************');



    //this is for putting focus when the website is loaded first
    // this is equivalent to componentDidMount() - when we use empty array in 2nd argument
    useEffect(() => {
        inputRef.current.focus();
        console.log('uaeEffet- only render at starting and focus is made ');

    }, []);
    //!   why we are using the useEffect to set the focus on input field
    //   Using the useEffect hook to set focus on an input field is a common approach because it ensures that the focus is set after the component has rendered and the input field is available in the DOM.
    // useEffect(()=>{
    //     let timer=setTimeout(()=>{

    //         console.log('window width', window.innerWidth);

    //     },2000)
    //     console.log('timer khatam hoga');
    //     return (clearInterval(timer))


    // })
    //! title should be changed when we Add a blog - uwe use useEffect as componentDidUpdate()--so we need to put blogs in array so when array is updated is works
    // useEffect(() => {
    //     if(blogs.length && blogs[0].title)
    //     document.title=blogs[0].title
    //     else
    //     document.title="NO blogs"
    // }, [blogs]);

    useEffect(() => {

        async function getBlogs() {
            const snapshot = await getDocs(collection(db, "blogs"));
            //The id property of the new object is set to doc.id, which represents the document ID of the current snapshot.

            // The spread operator (...doc.data()) is used to expand the data() method of the QueryDocumentSnapshot object. The data() method retrieves the field-value pairs of the document's data.

            // By using the spread operator, all the field-value pairs of the document are included as properties in the new object. This allows you to access the data using dot notation (e.g., blog.title, blog.author, etc.), where blog represents an element in the blogs array.
            const blogs = snapshot.docs.map((doc) => {
                return {
                    id: doc.id,
                    ...doc.data()
                }
            })
            console.log('****', blogs);

            setBlogs(blogs)


        }
        getBlogs()

    }, [blogs])
    const handleSubmit = async (e) => {
        e.preventDefault();
        // setBlogs([{ title: formData.title, content: formData.content }, ...blogs]);
        // useReducer -- despatch define here 


        // sending data to firebase collection 
        const docRef = await addDoc(collection(db, "blogs"), {
            title: formData.title,
            content: formData.content
        });
        console.log("Document written with ID: ", docRef.id);



        // dispatch({ type: "ADD", blog: { title: formData.title, content: formData.content } })
        // setBlogs({title: formData.title, content: formData.content})
        setFormData({ title: '', content: '' });
        //inputRef k current m jo store hai use hoga
        inputRef.current.focus();






    };

    const removeBlog = (i) => {
        // setBlogs(blogs.filter((blog, index) => i !== index));
        // dispatch({ type: "REMOVE", index: i })
    };

    return (
        <>
            <h1>Write a Blog!</h1>
            <div className="section">
                <form onSubmit={handleSubmit}>
                    <Row label="Title">
                        <input
                            className="input"
                            value={formData.title}
                            ref={inputRef}

                            onChange={(e) =>
                                setFormData({ ...formData, title: e.target.value })


                            }
                            placeholder="Enter the Title of the Blog here.."
                        />
                    </Row>
                    <Row label="Content">
                        <textarea
                            className="input content"
                            value={formData.content}
                            onChange={(e) =>
                                setFormData({ ...formData, content: e.target.value })
                            }
                            placeholder="Content of the Blog goes here.."
                            required
                        />
                    </Row>
                    <button className="btn">ADD</button>
                </form>
            </div>
            <hr />
            <h2>Blogs</h2>
            {blogs.map((blog, i) => (
                <div className="blog" key={i}>
                    <h3>{blog.title}</h3>
                    <p>{blog.content}</p>
                    <div className="blog-btn">
                        <button onClick={() => removeBlog(i)} className="btn remove">
                            Delete
                        </button>
                    </div>
                </div>
            ))}
        </>
    );
}

function Row(props) {
    const { label } = props;
    return (
        <>
            <label>{label}<br /></label>
            {props.children}
            <hr />
        </>
    );
}
