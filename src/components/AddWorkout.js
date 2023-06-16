import React, { useState} from "react";
import axios from 'axios';

const AddWorkout = () => {
    const [user_id, setUser_id] = useState('');
    const [exercise, setExercise] = useState('');
    const [sets, setSets] = useState("");
    const [reps, setReps] = useState("");
    const handleSubmit = e => {
        e.preventDefault();

        if (exercise.trim() === '' || sets.trim() === '' || reps.trim() === '') {
            return;
        }

        const newWorkout = {
            exercise,
            sets: parseInt(sets),
            reps: parseInt(reps)
        };
        // Add the workout to the workout history 
        setExercise('');
        setSets('');
        setReps('');
    }
    return ( 
        <form onSubmit={handleSubmit}>
            <label>
                Exercise:
                <input type="text" value={exercise} onChange={e => setExercise(e.target.value)} />
            </label>
            <label>
                Sets:
                <input type="text" value={sets} onChange={e => setSets(e.target.value)} />
            </label>
            <label>
                Reps:
                <input type="text" value={reps} onChange={e => setReps(e.target.value)} />
            </label>
            <button type="submit">Add Workout</button>
        </form>
    )
};

export default AddWorkout;