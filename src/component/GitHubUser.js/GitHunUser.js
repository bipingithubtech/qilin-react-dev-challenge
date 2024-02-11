import React, { useEffect } from "react";

const GitHunUser = () => {
  const accessToken = "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";
  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await fetch(`https://api.github.com/users/bipin`);
        const result = await response.json();
        console.log(result);
      } catch (error) {
        console.log(error);
      }
    };
    fetchdata();
  });
  return (
    <div className="github-user-card">
      <img src="" className="user-avatar" />
      <div className="user-info">
        <h2>name</h2>
        <p>Username: </p>
        <p>Number of Repositories: </p>
      </div>
    </div>
  );
};

export default GitHunUser;
