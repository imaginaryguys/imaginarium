import React from 'react'
import Select from 'react-select'
import '../style/Editor.css'

const options = [
    { value: 'Communism', label: 'Communism' },
    { value: 'usa', label: 'USA' },
    { value: 'top10brutal', label: 'Top10brutal' }
]

function Editor() {
    return (
        <div className="editor-container">
            <h1>Edit your photos</h1>
            <form className="editor-form">
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
            </form>
        </div>
    )
}

export default Editor