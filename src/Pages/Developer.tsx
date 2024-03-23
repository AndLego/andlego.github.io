import React from 'react';
import style from "./developer.module.css"

const Developer = () => {
    return (
        <div className={style.Container}>
            <form action="submit">
                <label htmlFor="name">Name</label>
                <input type="text" id='name' name="name" />

                <label htmlFor="live">Live</label>
                <input type="url" id='live' />

                <label htmlFor="repository">Repository</label>
                <input type="url" id='repository' />

                <label htmlFor="image">Image</label>
                <input type="url" id='image' />

                <label htmlFor="description">Description</label>
                <textarea name="description" id="description" cols={40} rows={5}></textarea>

                <label htmlFor="category">Category</label>
                <select name="" id="category">
                    <option value="-">-</option>
                    <option value="Misc">Misc</option>
                    <option value="Front End">Front End</option>
                    <option value="Back End">Back End</option>
                    <option value="Full Stack">Full Stack</option>
                </select>

                <button type='submit'>Upload</button>
            </form>
        </div>
    );
}

export default Developer;