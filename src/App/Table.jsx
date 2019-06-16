import React, { useState, useRef } from 'react';
import './Table.css';
import Button from './components/Button';
import DeleteButton from './components/DeleteButton';

function Table({ initialValues }) {
  const [categories, updateCategories] = useState(initialValues);
  // Hooks for Categories
  const [categoryInputIsOpen, toggleCategoryInput] = useState(false);
  const [categoryInputValue, changeCategoryInputValue] = useState('');
  const categoryInput = useRef(null);
  // Hooks for Keywords
  const [openedKeywordInput, toggleKeyworInput] = useState(false);
  const [keywordInputValue, changeKeywordInputValue] = useState('');
  const keywordInput = useRef(null);

  // Category handles
  function handleCategoryAddButton() {
    toggleCategoryInput(true);
    setTimeout(() => categoryInput.current.focus(), 200);
  }
  function handleCategoryInputValueChange(e) {
    e.preventDefault();
    changeCategoryInputValue(e.target.value);
  }
  function handleCategoryCancelButton(e) {
    e.preventDefault();
    changeCategoryInputValue('');
    toggleCategoryInput(!categoryInputIsOpen);
  }
  function handleCategoryDeleteButton(e) {
    e.preventDefault();
    const categoryName = e.target.name;
    const updatedCategories = categories.filter(category => category.name !== categoryName);
    updateCategories(updatedCategories);
  }

  // Keyword handlers
  function handleKeywordAddButton(e) {
    toggleKeyworInput(e.target.name);
    setTimeout(() => keywordInput.current.focus(), 200);
  }
  function handleKeywordCancelButton(e) {
    e.preventDefault();
    changeKeywordInputValue('');
    toggleKeyworInput(null);
  }
  function handleKeywordInputValueChange(e) {
    e.preventDefault();
    changeKeywordInputValue(e.target.value);
  }
  function handleKeywordClick(e) {
    e.preventDefault();
    const keyword = e.target.innerText;
    const { name } = e.target;
    const newCategories = [...categories];
    const currentCategory = newCategories.filter(category => category.name === name);
    const keywords = currentCategory[0].keywords.filter(k => k !== keyword);
    currentCategory[0].keywords = keywords;
    updateCategories(newCategories);
  }

  // Form submit handler
  function handleSubmit(e) {
    e.preventDefault();
    if (openedKeywordInput) {
      const newCategories = [...categories];
      const currentCategory = newCategories
        .filter(category => category.name === openedKeywordInput);
      currentCategory[0].keywords.push(keywordInputValue);
      updateCategories(newCategories);
      changeKeywordInputValue('');
      toggleKeyworInput(null);
    }
    if (categoryInputIsOpen) {
      updateCategories([...categories, { name: categoryInputValue, keywords: [] }]);
      changeCategoryInputValue('');
      toggleCategoryInput(!categoryInputIsOpen);
    }
  }

  return (
    <div className="body">
      <form onSubmit={handleSubmit}>
        <table className="table">
          <thead>
            <tr>
              <th className="table__th__categories table__th__categories">Categories</th>
              <th className="table__th table__th__keywords">Keywords</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((category, index) => (
              <tr key={category.name + index}>
                <td className="table__td">
                  <div className="table__category_item">
                    <div className="table__category_item__title">{category.name}</div>
                    <DeleteButton
                      type="button"
                      name={category.name}
                      onClick={handleCategoryDeleteButton}
                    >
                      ✕
                    </DeleteButton>
                  </div>
                </td>
                <td className="table__td">
                  {Array.isArray(category.keywords) && category.keywords.map((keyword, index) => (
                    <Button
                      type="button"
                      key={index}
                      name={category.name}
                      onClick={handleKeywordClick}
                    >
                      {keyword}
                    </Button>
                  ))}
                  {openedKeywordInput === category.name ? (
                    <div className="table__add_keyword_input_group">
                      <input
                        className="table__input"
                        type="text"
                        maxLength="25"
                        ref={keywordInput}
                        value={keywordInputValue}
                        onChange={handleKeywordInputValueChange}
                      />
                      <Button
                        type="submit"
                        color="accept"
                        disabled={!keywordInputValue}
                      >
                        Save
                      </Button>
                      <Button
                        color="reject"
                        onClick={handleKeywordCancelButton}
                      >
                        Cancel
                      </Button>
                    </div>
                  ) : (
                      <Button
                        type="button"
                        onClick={handleKeywordAddButton}
                        name={category.name}
                      >
                        +
                    </Button>
                    )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="category_input">
          {categoryInputIsOpen ? (
            <>
              <input
                type="text"
                className="table__input"
                maxLength="25"
                ref={categoryInput}
                value={categoryInputValue}
                onChange={handleCategoryInputValueChange}
                placeholder="Type category name"
              />
              <Button
                name={null}
                type="submit"
                color="accept"
                disabled={!categoryInputValue}
              >
                Save
              </Button>
              <Button
                color="reject"
                onClick={handleCategoryCancelButton}
              >
                Cancel
              </Button>
            </>
          ) : (
              <Button
                onClick={handleCategoryAddButton}
              >
                Add category +
            </Button>
            )}
        </div>
      </form>
    </div>
  );
}

export default Table;
