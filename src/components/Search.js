import React from "react";
import { MdSearch } from "react-icons/md";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const Search = () => {

    return (
        <div className='search'>
            <InputGroup className="mb-3 search-input">
            <InputGroup.Text id='search-input'><MdSearch /></InputGroup.Text>
            <Form.Control
            placeholder="Search..."
            aria-label='search-input'
            aria-describedby='search-input'
            />
            </InputGroup>
        
        </div>
    );

}

export default Search;