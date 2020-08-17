import React from "react";
import { Link } from 'react-router-dom';

const UserTile = ({userData, currentUser}) => {

  let imageClass = "card-image default"
  let image = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNDY5LjgwMyA0NjkuODAzIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0NjkuODAzIDQ2OS44MDM7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxwYXRoIHN0eWxlPSJmaWxsOiM0Q0FGNTA7IiBkPSJNMTg4Ljg2NCw2Ny4zNDlDMTQ3LjgxOSwyNi4zMjUsNjcuNDk5LDIxLjU2OCwxMC42NjcsMjEuNTY4QzQuNzc2LDIxLjU2OCwwLDI2LjM0NCwwLDMyLjIzNQ0KCQljMCw1Ni44NTMsNC43NTcsMTM3LjE3Myw0NS43ODEsMTc4LjIxOWMxOS4yNjEsMTcuMTU0LDQ0LjQzOCwyNi4xNDMsNzAuMjA4LDI1LjA2N2MyNi41NzEsMS4wNDcsNTIuNTctNy44OTYsNzIuODc1LTI1LjA2Nw0KCQlDMjE5LjQzNSwxNzkuODYxLDIyNS4wNDUsMTAzLjUzMSwxODguODY0LDY3LjM0OXoiLz4NCgk8cGF0aCBzdHlsZT0iZmlsbDojNENBRjUwOyIgZD0iTTQ1OS4xMzYsNjMuNzY1Yy01Ni44NTMsMC0xMzcuMTczLDQuNzU3LTE3OC4yMTksNDUuNzgxYy0zNi4yNjcsMzYuMjY3LTMwLjU3MSwxMTIuNDkxLDAsMTQzLjA4Mw0KCQljMjAuMzExLDE3LjE3NCw0Ni4zMTgsMjYuMTE3LDcyLjg5NiwyNS4wNjdjMjUuNzY5LDEuMDc0LDUwLjk0Ni03LjkxNSw3MC4yMDgtMjUuMDY3YzQxLjA0NS00MS4wNDUsNDUuNzgxLTEyMS4zNjUsNDUuNzgxLTE3OC4yMTkNCgkJQzQ2OS43OTEsNjguNTI4LDQ2NS4wMTksNjMuNzY1LDQ1OS4xMzYsNjMuNzY1eiIvPg0KPC9nPg0KPHBhdGggc3R5bGU9ImZpbGw6IzM4OEUzQzsiIGQ9Ik0yMjQsNDQ4LjIzNWMtNS44OTEsMC0xMC42NjctNC43NzYtMTAuNjY3LTEwLjY2N2MwLTIyNi4yNC04Mi45NjUtMjgzLjAwOC0xMTQuMTk3LTMwNC4zNjMNCgljLTMuNzY3LTIuNDA1LTcuMzM0LTUuMTA5LTEwLjY2Ny04LjA4NWMtNC4wOTMtNC4yMzctMy45NzUtMTAuOTksMC4yNjItMTUuMDgzYzQuMTM0LTMuOTkzLDEwLjY4Ny0zLjk5MywxNC44MjEsMA0KCWMyLjQwOSwyLjAzNyw0Ljk2MSwzLjg5OCw3LjYzNyw1LjU2OGMyNy43MzMsMTguOTY1LDkzLjA1Niw2My42NTksMTE1LjY0OCwyMTAuMjYxYzE3LjQ1OS03Ni42NDUsNjkuMjEzLTE0MC45OTUsMTQwLjMzMS0xNzQuNDg1DQoJYzUuNDQ2LTIuNTYyLDExLjk0Ni0wLjUxLDE0LjkzMyw0LjcxNWMyLjY5OCw0Ljc1NSwxLjAzMiwxMC43OTYtMy43MjMsMTMuNDk1Yy0wLjE3OCwwLjEwMS0wLjM2LDAuMTk3LTAuNTQ0LDAuMjg3bC0xLjcyOCwwLjgxMQ0KCWMtMTE2Ljk0OSw1NC45NzYtMTQxLjUwNCwxNzUuNDY3LTE0MS41MDQsMjY2Ljg4QzIzNC42MDMsNDQzLjQzNCwyMjkuODY2LDQ0OC4xOTksMjI0LDQ0OC4yMzV6Ii8+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg==";
  if (userData.img_url !== null) {
    image = userData.img_url;
    imageClass = "card-image"
  }

  return (
    <>
      <div className="column is-3">
        <div className="card">
          <div className={imageClass}>
            <figure className="image is-4by3">
              <img src={image} className="user-image" alt="Placeholder image" />
            </figure>
          </div>

          <div className="card-content">
            <div className="overlay">
              <div className="text">
                <Link to={{
                  pathname: `/users/${userData.id}`,
                  state: {
                    userData: userData,
                    currentUser: currentUser
                  }
                }}>View Profile</Link>
              </div>
            </div>

            <div className="media">
              <div className="media-content">
                <p className="title is-4">{userData.first_name}</p>
              </div>
            </div>

            <div className="content">
              <strong>Programming Language(s):</strong> {userData.programming_lang}
              <br />
              <strong>Technologies:</strong> {userData.technology}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserTile;