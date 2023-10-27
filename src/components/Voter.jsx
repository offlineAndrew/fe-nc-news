import { useState } from "react";
import * as api from "../utils/api";

export const Voter = ({ votes, id }) => {
  const [votesDiff, setVotesDiff] = useState(0);
  const [errorMsg, setErrorMsg] = useState(false);

  const updateVotes = (value) => {
    setVotesDiff((currentVotes) => {
      return currentVotes + value;
    });

    api
      .updateVotes(id, value)
      .then(() => {
        setErrorMsg("");
      })
      .catch((err) => {
        console.dir(err, 'err');
        setVotesDiff((currentVotes) => {
          return currentVotes - value;
        });
        setErrorMsg("Sorry, there was an issue loading votes..");
      });
  };

  return (
    <div>
      <button disabled={votesDiff === 1} onClick={() => updateVotes(1)}>
        +
      </button>
      <p>{errorMsg ? errorMsg : votes + votesDiff}</p>
      <button disabled={votesDiff === -1} onClick={() => updateVotes(-1)}>
        -
      </button>
    </div>
  );
};
