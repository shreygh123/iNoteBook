import React, { useState, useContext } from 'react';
import noteContext from '../Context/Notes/noteContext';

const Addnote = (props) => {
    const a = useContext(noteContext)
    const { addNote } = a;
    const [note, setnote] = useState({ title: "", description: "", tag: "Todo" });
    const handleClick = (e) => {
        e.preventDefault();
        addNote(note.title,note.description,note.tag)
        setnote({ title: "", description: "", tag: "" })
        props.showAlert("Added Successfully","success")
    }
    const onChange = (e) => {
        setnote({ ...note, [e.target.name]: e.target.value })
    }
    return(  
    <div className="container my-3">
        <h2 >✍🏻 Add a note</h2>
        <form>
        <div className="mb-3 my-4">
                    <label htmlFor="tag" className="form-label">Tags</label>
                    <select className="form-select" aria-label="Default select example" id="tag" value={note.tag} onChange={onChange}  name="tag">

                        <option value="Todo">Todo</option>
                        <option value="Important">Important</option>
                        <option value="Academic">Academic</option>
                        <option value="Personal">Personal</option>
                        <option value="Others">Others</option>
                    </select>
                </div>
            <div className="mb-3">
                <label htmlFor="title" className="form-label">Title</label>
                <input type="text" className="form-control" id="title" name="title" minLength={5} required onChange={onChange} value={note.title} aria-describedby="emailHelp" />      </div>
            <div className="mb-3">
                <label htmlFor="description" className="form-label">Description</label>
                <input type="text" className="form-control" onChange={onChange}  minLength={5} required value={note.description} id="description" name="description" />
            </div>
            {/* <div className="mb-3">
                <label htmlFor="tag" className="form-label">Tags</label>
                <input type="text" className="form-control" onChange={onChange} value={note.tag} id="tag" name="tag" />
            </div> */}
            <button disabled={note.title.length<5 || note.description.length<5} type="Submit" className="btn btn-primary" onClick={handleClick}>Add Note</button>
        </form>
        {/* <a href="/notes"><p className='text-center'>View your notes &gt;</p></a> */}
    </div>
    )
}

export default Addnote
