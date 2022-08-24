import { useHistory } from 'react-router-dom';
import { useState } from "react";

const Create = () => {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('mario');
    const [isPending, setIsPending] = useState(false)
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = {
            title: title,
            body: body,
            author: author
        }

        setIsPending(true);

        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: {"Content-Type": 'application/json'},
            body: JSON.stringify(blog)
        }).then(() => {
            console.log('new blog added');
            setIsPending(false);
        })

        history.push('/');
    }

    return (
        <div className="create">
            <h2>Add a new blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title</label>
                <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => {setTitle(e.target.value)}}
                />
                <label>Blog content</label>
                <textarea
                    required
                    value={body}
                    onChange={(e) => {setBody(e.target.value)}}
                >
                </textarea>
                <label>Blog author</label>
                <select
                    value={author}
                    onChange={(e) => {setAuthor(e.target.value)}}
                >
                    <option value="mario">Mario</option>
                    <option value="yoshi">Yoshi</option>
                </select>
                { !isPending && <button>Add blog</button> }
                { isPending && <button disabled>Adding new post...</button> }
            </form>
        </div>
     );
}

export default Create;