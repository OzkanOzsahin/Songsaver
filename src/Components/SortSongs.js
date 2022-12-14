import React from 'react'

function SortSongs(props) {
    return (
        <div className="sort-songs">
            <span>
                <input name="sort-songs" id="sort-AZ" type="radio" onClick={props.sortByAscending} />
                <label htmlFor="sort-AZ">Sort songs from A-Z</label>
            </span>
            <span>
                <input name="sort-songs" id="sort-ZA" type="radio" onClick={props.sortByDescending} />
                <label htmlFor="sort-ZA">Sort songs from Z-A</label>
            </span>
            <span>
                <input name="sort-genre" id="sort-genre" type="radio" onClick={props.sortByAscending} />
                <label htmlFor="sort-genre">Sort songs per Genre</label>
            </span>
        </div>
    )
}

export default SortSongs