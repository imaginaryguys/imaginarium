import React, { useState } from 'react'
import Select from 'react-select'
import '../style/Editor.css'

const options = [
    { value: 'Communism', label: 'Communism' },
    { value: 'usa', label: 'USA' },
    { value: 'top10brutal', label: 'Top10brutal' }
]

function Editor() {
    const [edited, setEdited] = useState(false)

    async function Edit(e) {
        e.preventDefault()

        setEdited(true)
    }

    const downloadFile = e => {
        e.preventDefault()
        window.location.href = "https://i.pinimg.com/474x/b3/0a/c9/b30ac9910685037a3982ec51c8d86348.jpg"
    }

    return (
        <div className="editor-container">
            <form onSubmit={Edit} className="editor-form">
                <div className="form-filter">
                    <h4>Chose the filter: </h4>
                    <div className="filter-section">
                        <Select options={options} />
                    </div>
                </div>
                <div className="form-title">
                    <h4>Write a title: </h4>
                    <input type="text" placeholder="Come up with a funny title" />
                </div>
                <div className="form-dnd">
                    <h4>Select a photo</h4>
                    <input type="file" />
                </div>
                <div className="btn-container">
                    {edited
                        ? <div>
                            <img src="https://i.pinimg.com/474x/b3/0a/c9/b30ac9910685037a3982ec51c8d86348.jpg" />
                            <button>Post</button>
                        </div>
                        : <button type="submit">Start editing</button>
                    }
                </div>
            </form>
        </div>
    )
}

export default Editor