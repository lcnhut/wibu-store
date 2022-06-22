import { CloseOutlined, SearchOutlined } from '@ant-design/icons';
import React from 'react';

export default function SearchField({
  onSearchActive,
  onActive,
  SetOnActive,
  setOnSearchActive,
}) {
  return (
    <div
      className="search-field"
      style={{
        visibility: onSearchActive ? 'visible' : 'hidden',
        opacity: onSearchActive ? '1' : '0',
        height: onSearchActive ? '400px ' : '0',
        zIndex: onSearchActive ? '101' : '0',
        position: onSearchActive ? 'fixed' : 'relative',
      }}
    >
      <h1>Start typing and hit Enter</h1>
      <div className="search-field__inputContent">
        <input
          className="search-field__inputContent__input"
          placeholder="Search anything"
        />
        <SearchOutlined style={{ fontSize: '18px' }} />
      </div>
      <div className="search-field__closeModal">
        <CloseOutlined
          style={{ fontSize: '18px' }}
          onClick={() => {
            SetOnActive(!onActive);
            setOnSearchActive(!onSearchActive);
          }}
        />
      </div>
    </div>
  );
}
