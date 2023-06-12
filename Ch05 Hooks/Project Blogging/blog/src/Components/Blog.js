import React, { useRef, useState, useEffect } from 'react';

export default function Blog() {
    const [formData, setFormData] = useState({ title: '', content: '' });
    const [blogs, setBlogs] = useState([]);
    //holding the reffeernce
    const inputRef = useRef(null);


    //this is for putting focus when the website is loaded first
    // this is equivalent to componentDidMount() - when we use empty array in 2nd argument
    useEffect(() => {
        inputRef.current.focus();
    }, []);
    //!   why we are using the useEffect to set the focus on input field
    //   Using the useEffect hook to set focus on an input field is a common approach because it ensures that the focus is set after the component has rendered and the input field is available in the DOM.

    //! title should be changed when we Add a blog - uwe use useEffect as componentDidUpdate()--so we need to put blogs in array so when array is updated is works
    useEffect(() => {
        if(blogs.length && blogs[0].title)
        document.title=blogs[0].title
        else
        document.title="NO blogs"
    }, [blogs]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setBlogs([{ title: formData.title, content: formData.content }, ...blogs]);
        setFormData({ title: '', content: '' });
        //inputRef k current m jo store hai use hoga
        inputRef.current.focus();



    };

    const removeBlog = (i) => {
        setBlogs(blogs.filter((blog, index) => i !== index));
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
