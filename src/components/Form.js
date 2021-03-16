import React from "react";

const Form = () => {
  return (
    <form>
      <input type="text" className={}/>
      <button type={submit}>
        <i className={fas fa-plus-square}></i>
      </button>
      <div className={select}>
        <select name="todos" className="filter-todo">
          <option value="all">all</option>
          <option value="completed">completed</option>
          <option value="unfinished">unfinished</option>
        </select>
      </div>
    </form>
  );
}