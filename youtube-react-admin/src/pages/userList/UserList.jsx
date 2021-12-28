import "./userList.css";
import { DataGrid } from "@material-ui/data-grid";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import dateFormat from "dateformat";
import Moment from "moment";
import { Link } from "react-router-dom";

//import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
//import BootstrapTable from "react-bootstrap-table-next";
//import * as ReactBootstrap from "ReactBootstrap";

export default function UserList() {
  const url = "https://anftracker.herokuapp.com/getResources";
  // const columns = [
  //   { field: "_id", headerName: "_id" },
  //   { field: "name", headerName: "name" },
  //   { field: "location", headerName: "location" },
  //   { field: "claimHrs", headerName: "clainHrs" },
  //   { field: "role", headerName: "role" },
  //   { field: "startDate", headerName: "startDate" },
  //   { field: "endDate", headerName: "endDate" },
  //   { field: "createdOn", headerName: "createdOn" },
  //   { field: "updatedOn", headerName: "updatedOn" },
  //   { field: "isActive", headerName: "isActive" },
  //   { field: "uniqueId", headerName: "uniqueId" },
  // ];
  // const getDate = (date) => {
  //   return date.split(" ")[];
  // };
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get(url).then((json) => setData(json.data));
  }, []);
  console.log(data);
  const renderTable = () => {
    return data.map((user) => {
      return (
        <tr>
          <td>{user.name}</td>
          <td>{user.location}</td>
          <td>{user.claimHrs}</td>
          <td>{user.role}</td>
          <td>{Moment(user.startDate).format("DD-MM-YYYY")}</td>
          <td>{dateFormat(user.endDate)}</td>
          {/* <td>{user.createdOn}</td> */}
          {/* <td>{user.updatedOn}</td> */}
          {/* <td>{user.isActive}</td> */}
          {/* <td>{user.uniqueId}</td> */}
        </tr>
      );
    });
  };
  //   return (
  //     // return (
  //     <div className="userList">
  //       <BootstrapTable data={data} columns={columns} />
  //     </div>
  //   );
  // }
  return (
    <div class="userList">


      <div className="userTitleContainer">
        <h1 className="userTitle">Resources</h1>
        <Link to="/newUser">
          <button className="userAddButton">Create</button>
        </Link>
      </div>
      <br />

      <Table stripped bordered hover size="sm">
        {/* {" "} */}
        <thead>
          <tr>
            <th width="170">Name</th>
            <th width="170">Location</th>
            <th width="170">ClaimHrs</th>
            <th width="170">Role</th>
            <th width="170">StartDate</th>
            <th width="170">EndDate</th>
            {/* <th width="170"> createdOn</th> */}
            {/* <th width="170">updatedOn</th> */}
            {/* <th>isActive</th> */}
            {/* <th>uniqueId</th> */}
          </tr>
        </thead>
        <tbody>{renderTable()}</tbody>
      </Table>
    </div>
  );
}
// return (
//   <div className="userList">
//     <DataGrid rows={data} columns={columns} pageSize={10} checkboxSelection />
//   </div>
// );
// }