import { useState } from "react";
import * as api from '../utils/api';

export const Voter = ({votes, id}) => {
    const [votesDiff, setVotesDiff] = useState(0);
    const [errorMsg, setErrorMsg] = useState(false);

    const updateVotes = (value) => {
        setVotesDiff ((currentVotes) => {
            return currentVotes + value;
        })
    
    api.updateVotes(id, value).catch(() => {
        setVotesDiff ((currentVotes) => {
            return currentVotes - value;
        })
    })
};

    return (
        <div>
            <button
            disabled={votesDiff === 1}
            onClick={() => updateVotes(1)}
            >+</button>
            <p>{errorMsg ? "Sorry, there is an issue loading votes.." : votes + votesDiff}</p>
            <button
            disabled={votesDiff === -1}
            onClick={() => updateVotes(-1)}
            >-</button>
        </div>
    )
}