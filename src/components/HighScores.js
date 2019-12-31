import React, {useEffect, useState} from "react";

export const HighScores = (props) => {
   
  return (
    <div className="high-scores">
      <h5>Scores</h5>
      <div className="score-table">
        <table className="table table-striped">
          <tbody>
            <tr>
              <th>Name</th>
              <th>Score</th>
              <th>User Id</th>
            </tr>
            {props.scores.map(x => (
              <tr key={`tr${x.userId}`}>
                <td key={`td_name${x.userId}`}><img className="profile" key={'img'+  x.userId} src="profile.png"/>{x.userName}</td>
                <td key={`td_score${x.userId}`}>{x.score}</td>
                <td key={`td_${x.userId}`}>{x.userId}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
