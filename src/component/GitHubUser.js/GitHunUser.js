import React, { useEffect, useState } from "react";

const GitHunUser = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const getusers = async () => {
    try {
      const response = await fetch(" https://api.github.com/users");
      setUsers(await response.json());
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getusers();
  });

  if (loading) {
    return <h1>loading.....</h1>;
  }
  if (error) {
    return <p>ERROR:{error}</p>;
  }

  return (
    <>
      {users.map((curreelm) => {
        return (
          <div
            key={curreelm.id}
            className="card mx-3 my-3 flex"
            style={{ width: "18rem" }}
          >
            <img
              src={curreelm.avatar_url}
              className="card-img-top"
              alt="User Image"
            />
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">{curreelm.name}</h5>
              <p className="card-text">No of Repos: {curreelm.repos_url}</p>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default GitHunUser;
