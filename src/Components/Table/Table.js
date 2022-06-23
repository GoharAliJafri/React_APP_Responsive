import React from "react";
import { useState, useEffect } from "react";
import "./Table.css";

const Table = () => {
  const [name, setName] = useState([]);

  useEffect(() => {
    names();
  }, []);

  const names = async () => {
    const responce = await fetch("https://jsonplaceholder.typicode.com/todos/");

    // console.log(responce.json());
    setName(await responce.json());
    // console.log(await responce.json());
  };

  return (
    <div className="conta">
      <h1>Fetching Data From Json Placeholder API</h1>
      {/* <table className="tablee">
      <thead class="thead-dark">
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Title</th>
        </tr>
        </thead>
        {name.map((data) => {
          return (
            // <li className="list-group-item" key={data.id}> {data.title}</li>
            <tr>
              <td>{data.id}</td>
              <td>{data.title}</td>
            </tr>
          );
        })}
      </table> */}

      <table class="table table-dark table-hover table-cos rounded">
        <thead>
          <tr>
          <th scope="col">Id</th>
          <th scope="col">Title</th>
          </tr>
        </thead>
        <tbody>
        {name.map((data) => {
          return (
            // <li className="list-group-item" key={data.id}> {data.title}</li>
            <tr>
              <td scope="row" className="id-col">{data.id}</td>
              <td>{data.title}</td>
            </tr>
          );
        })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
