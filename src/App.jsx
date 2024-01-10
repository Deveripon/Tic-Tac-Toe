import { useState } from "react";

/* eslint-disable react/prop-types */
function Square({ value = "X", handleChangeValue }) {
    return (
        <button
            onClick={handleChangeValue}
            className='rounded-sm font-bold text-2xl bg-white size-16 p-2 m-1 border border-gray-400'>
            {value}
        </button>
    );
}
function Board() {
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [isXset, setIsXset] = useState(true);

    const winner = calculateWinner(squares);
    let status = "";
    if (winner) {
        status = `${winner} is Winner`;
    } else {
        status = `Next Player : ${isXset ? "X" : "O"}`;
    }

    function handleChangeValue(i) {
        if (squares[i] || winner) {
            return;
        }
        const nextSquares = squares.slice();
        if (isXset) {
            nextSquares[i] = "X";
        } else {
            nextSquares[i] = "O";
        }
        setIsXset(!isXset);
        setSquares(nextSquares);
    }

    return (
        <>
            <div className='status text-teal-400 font-bold text-2xl my-5'>
                {status}
            </div>
            <div className='flex'>
                <Square
                    handleChangeValue={() => {
                        handleChangeValue(0);
                    }}
                    value={squares[0]}
                />
                <Square
                    handleChangeValue={() => {
                        handleChangeValue(1);
                    }}
                    value={squares[1]}
                />
                <Square
                    handleChangeValue={() => {
                        handleChangeValue(2);
                    }}
                    value={squares[2]}
                />
            </div>
            <div className='flex'>
                <Square
                    handleChangeValue={() => {
                        handleChangeValue(3);
                    }}
                    value={squares[3]}
                />
                <Square
                    handleChangeValue={() => {
                        handleChangeValue(4);
                    }}
                    value={squares[4]}
                />
                <Square
                    handleChangeValue={() => {
                        handleChangeValue(5);
                    }}
                    value={squares[5]}
                />
            </div>
            <div className='flex'>
                <Square
                    handleChangeValue={() => {
                        handleChangeValue(6);
                    }}
                    value={squares[6]}
                />
                <Square
                    handleChangeValue={() => {
                        handleChangeValue(7);
                    }}
                    value={squares[7]}
                />
                <Square
                    handleChangeValue={() => {
                        handleChangeValue(8);
                    }}
                    value={squares[8]}
                />
            </div>
        </>
    );
}

export default function Game() {
    return (
        <>
            <div className='game bg-gray-700 h-screen flex justify-center items-center'>
                <div className='wrapper'>
                    <Board />
                </div>
                <div className='history'>
                    <ol>{/*tbd*/}</ol>
                </div>
            </div>
        </>
    );
}

function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (
            squares[a] &&
            squares[a] === squares[b] &&
            squares[a] === squares[c]
        ) {
            return squares[a];
        }
    }
    return null;
}

