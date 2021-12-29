import "./newUser.css";

export default function NewUser() {
  return (
    <div className="newUser">
      <h1 className="newUserTitle">New User</h1>
      <form className="newUserForm">
        
        <div className="newUserItem">
          <label>Full Name</label>
          <input type="text" placeholder="John Smith" />
        </div>
        <div className="newUserItem">
          <label>Employee ID</label>
          <input type="text" />
        </div>
        <div className="newUserItem">
          <label>Start Date</label>
          <input type="date" />
        </div>
        <div className="newUserItem">
          <label>End Date</label>
          <input type="date" />
        </div>
        <div className="newUserItem">
          <label>Location</label>
          <input type="text" placeholder="New York" />
        </div>
        <div className="newUserItem">
          <label>Country</label>
          <input type="text" placeholder="USA" />
        </div>
        <div className="newUserItem">
          <label>Claim Hours</label>
          <input type="number" placeholder="8 | 9" />
        </div>
        <div className="newUserItem">
          <label>Gender</label>
          <div className="newUserGender">
            <input type="radio" name="gender" id="male" value="male" />
            <label for="male">Male</label>
            <input type="radio" name="gender" id="female" value="female" />
            <label for="female">Female</label>
            <input type="radio" name="gender" id="other" value="other" />
            <label for="other">Other</label>
          </div>
        </div>
        <div className="newUserItem">
          <label>Active</label>
          <select className="newUserSelect" name="active" id="active">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <button className="newUserButton">Create</button>
      </form>
    </div>
  );
}
