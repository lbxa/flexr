import React from "react";
import "./App.css";

const workoutTypes = ["chest", "shoulders", "biceps", "back"];

const database = [
    {
        workoutType: "chest",
        workoutName: "bench press",
    },
    {
        workoutType: "chest",
        workoutName: "incline bench",
    },
    {
        workoutType: "chest",
        workoutName: "Chest flies",
    },
    {
        workoutType: "biceps",
        workoutName: "Bicep curls",
    },
    {
        workoutType: "biceps",
        workoutName: "Hammer curls",
    },
    {
        workoutType: "biceps",
        workoutName: "Concentration curls",
    },
    {
        workoutType: "shoulders",
        workoutName: "Military press",
    },
    {
        workoutType: "shoulders",
        workoutName: "Lateral raises",
    },
    {
        workoutType: "shoulders",
        workoutName: "Incline press",
    },
    {
        workoutType: "shoulders",
        workoutName: "Dumbell Shoulders",
    },
    {
        workoutType: "shoulders",
        workoutName: "Front raises",
    },
    {
        workoutType: "back",
        workoutName: "Lat pull downs",
    },
    {
        workoutType: "back",
        workoutName: "Bent over row",
    },
];

function shuffle(array) {
    let currentIndex = array.length,
        randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex !== 0) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex],
            array[currentIndex],
        ];
    }

    return array;
}

const chooseWorkout = (workoutType) => {
    return database.filter((workout) => workout.workoutType === workoutType);
};

const chooseProgram = () => {
    const program = [];
    workoutTypes.forEach((workoutType) => {
        const allWorkouts = shuffle(chooseWorkout(workoutType));
        program.push(allWorkouts[0]);
        program.push(allWorkouts[1]);
    });
    return program;
};

function App() {
    const data = chooseProgram();
    const dataHTML = data.map((workout) => {
        return (
            <li>
                <strong>{workout.workoutType}</strong> {workout.workoutName}
            </li>
        );
    });

    return (
        <div>
            <h1>Today's workouts</h1>
            <ul>{dataHTML}</ul>
        </div>
    );
}

export default App;
