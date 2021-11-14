import React, { useState } from 'react'
import { db, firebase } from '../firebase/db.js'
import axios from 'axios';
import Select from 'react-select'
import '../style/Editor.css'

const options = [
    { value: 'communism', label: 'Communism' },
    { value: 'usa', label: 'USA' },
    { value: 'top10brutal', label: 'Top10brutal' }
]

function Editor() {
    const [posts, setPosts] = useState([])

    const [edited, setEdited] = useState(false)

    const [title, setTitle] = useState("")
    const [filter, setFilter] = useState("")
    const [imgURL, setImg] = useState("")
    const [filteredImg, setFilteredImg] = useState("")

    const [bytCode, setByteCode] = useState()

    async function postForm(e) {
        e.preventDefault()

        setEdited(true)

        const postsRef = db.collection('posts')

        await postsRef.add({
            title: title,
            filter: filter,
            imgURL: imgURL,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        })

        setTitle('')
        setFilter('')
        setImg('')
    }

    const fileChange = async (e) => {
        const file = e.target.files[0];
        const storageRef = firebase.storage().ref();
        const fileRef = storageRef.child(file.name);
        await fileRef.put(file);
        setImg(await fileRef.getDownloadURL());

        axios.get(`https://api.alexflipnote.dev/shame?image=https://cdn.discordapp.com/attachments/855028223603245081/909433730286891038/unknown.png`, { headers: { 'Authorization': 'D8BjnkfdiTXQ2FpOeTuJqX7O6sLzeGj2zUs0PUgK', 'Access-Control-Allow-Origin': '*' }, })
            .then(res => {
                res.json()
                console.log(res.content);
            })

        // try {

        //     const res = await fetch(`https://api.alexflipnote.dev/shame?image=https://cdn.discordapp.com/attachments/855028223603245081/909433730286891038/unknown.png`, {
        //         headers: {
        //             'Authorization': 'D8BjnkfdiTXQ2FpOeTuJqX7O6sLzeGj2zUs0PUgK',
        //             'Access-Control-Allow-Origin': '*'
        //         }
        //     })
        //     res.header("Access-Control-Allow-Origin", "*");
        //     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        //     setByteCode(res.headers.get("content-type") === "application/json" ? await res.json() : await res.buffer())
        //     console.log(bytCode)
        // }
        // catch (e) {
        //     console.log(e.message)
        // }

        console.log(imgURL)

        e.target.value = null
    }

    return (
        <div className="editor-container">
            <form onSubmit={postForm} className="editor-form">
                <div className="form-filter">
                    <h4>Chose the filter: </h4>
                    <div className="filter-section">
                        <Select value={filter} onChange={(e) => setFilter(e)} options={options} />
                    </div>
                </div>
                <div className="form-title">
                    <h4>Write a title: </h4>
                    <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" placeholder="Come up with a funny title" />
                </div>
                <div className="form-dnd">
                    <h4>Select a photo: </h4>
                    <input type="file" onChange={fileChange} />
                </div>
                <div className="btn-container">
                    {edited
                        ? <div className="result">
                            <button className="form-btn" type="submit">Submit</button>
                            <img src={filteredImg} />
                        </div>
                        : <button className="form-btn" type="submit">Submit</button>
                    }
                </div>
            </form>
        </div>
    )
}

export default Editor