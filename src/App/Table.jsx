import React, { useState } from 'react';
import './Table.css';

function Table({ initialValue }) {
    const [categories, updateCategories] = useState(initialValue);
    const [categoryInputIsOpen, toggleCategoryInput] = useState(false);
    const [categoryInputValue, changeCategoryInputValue] = useState('');
    const [openedKeywordInput, toggleKeyworInput] = useState('');
    const [keywordInputValue, changeKeywordInputValue] = useState('');

    // Category handles
    const handleCategoryAddButton = () => toggleCategoryInput(!categoryInputIsOpen)
    const handleCategoryInputValueChange = (e) => {
        e.preventDefault();
        changeCategoryInputValue(e.target.value);
    }
    const handleCategoryCancelButton = (e) => {
        e.preventDefault();
        changeCategoryInputValue('')
        toggleCategoryInput(!categoryInputIsOpen)
    }
    const handleCategoryDeleteButton = (e) => {
        e.preventDefault();
        const categoryName = e.target.name;
        const updatedCategories = categories.filter(category => category.name !== categoryName);
        updateCategories(updatedCategories)
    }

    // Keyword handlers
    const handleKeywordAddButton = (e) => toggleKeyworInput(e.target.name)
    const handleKeywordCancelButton = (e) => {
        e.preventDefault();
        changeKeywordInputValue('')
        toggleKeyworInput(null)
    }
    const handleKeywordInputValueChange = (e) => {
        e.preventDefault();
        changeKeywordInputValue(e.target.value);
    }
    const handleKeywordClick = (e) => {
        e.preventDefault();
        const keyword = e.target.innerText
        const name = e.target.name
        const newCategories = [...categories];
        const currentCategory = newCategories.filter(category => category.name === name)
        const keywords = currentCategory[0].keywords.filter(k => k !== keyword);
        currentCategory[0].keywords = keywords;
        updateCategories(newCategories);
    }

    // Form submit handler
    const handleSubmit = (e) => {
        e.preventDefault();
        if (openedKeywordInput) {
            const newCategories = [...categories];
            const currentCategory = newCategories.filter(category => category.name === openedKeywordInput)
            currentCategory[0].keywords.push(keywordInputValue);
            updateCategories(newCategories);
            changeKeywordInputValue('');
            toggleKeyworInput(null)
        } else {
            updateCategories([...categories, { name: categoryInputValue, keywords: [] }])
            changeCategoryInputValue('')
        }
    }

    return (
        <div className='body'>
            <form onSubmit={handleSubmit}>
                <table className='table'>
                    <thead>
                        <tr>
                            <th className='table__th__categories table__th__categories'>Categories</th>
                            <th className='table__th table__th__keywords'>Keywords</th>
                        </tr>
                    </thead>
                    <tbody>
                        {categories.map((category, index) =>
                            <tr key={category.name + index}>
                                <td className='table__td'>
                                    <div className='table__category_item'>
                                        <div className='table__category_item__title'>{category.name}</div>
                                        <button
                                            type='button'
                                            className='table__delete_category_button'
                                            name={category.name}
                                            onClick={handleCategoryDeleteButton}
                                        >
                                            ✕
                                            </button>
                                    </div>
                                </td>
                                <td className='table__td'>
                                    {Array.isArray(category.keywords) && category.keywords.map((keyword, index) =>
                                        <button
                                            key={index}
                                            className='btn btn__category'
                                            type='button'
                                            name={category.name}
                                            onClick={handleKeywordClick}
                                        >
                                            {keyword}
                                        </button>
                                    )}
                                    {openedKeywordInput === category.name ? (
                                        <div className='table__add_keyword_input_group'>
                                            <input type="text" value={keywordInputValue} onChange={handleKeywordInputValueChange} />
                                            <button type="submit" name='category' disabled={!keywordInputValue}>Save</button>
                                            <button type='button' value="Cancel" onClick={handleKeywordCancelButton}>Cancel</button>
                                        </div>
                                    ) : (
                                            <button
                                                type='button'
                                                className='btn'
                                                name={category.name}
                                                onClick={handleKeywordAddButton}
                                            >
                                                +
                                                 </button>
                                        )}
                                </td>
                            </tr>)}
                    </tbody>
                </table>
                <div className='category_input'>
                    {categoryInputIsOpen ? (
                        <>
                            <input type="text" value={categoryInputValue} onChange={handleCategoryInputValueChange} />
                            <button type="submit" name='category' disabled={!categoryInputValue}>Save</button>
                            <button type='button' value="Cancel" onClick={handleCategoryCancelButton}>Cancel</button>
                        </>
                    ) : (
                            <button className='btn' onClick={handleCategoryAddButton} type='button'>Add category +</button>
                        )}
                </div>
            </form>
        </div>
    );
}

export default Table;