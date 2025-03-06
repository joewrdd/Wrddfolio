"use client";

import { motion, AnimatePresence } from "framer-motion";
import { IoClose } from "react-icons/io5";
import { useEffect, useState, useCallback } from "react";

interface TetrisDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

const BOARD_WIDTH = 10;
const BOARD_HEIGHT = 20;
const SHAPES = [
  [[1, 1, 1, 1]], // I
  [
    [1, 1],
    [1, 1],
  ], // O
  [
    [1, 1, 1],
    [0, 1, 0],
  ], // T
  [
    [1, 1, 1],
    [1, 0, 0],
  ], // L
  [
    [1, 1, 1],
    [0, 0, 1],
  ], // J
  [
    [1, 1, 0],
    [0, 1, 1],
  ], // S
  [
    [0, 1, 1],
    [1, 1, 0],
  ], // Z
];

const TetrisDialog = ({ isOpen, onClose }: TetrisDialogProps) => {
  const [board, setBoard] = useState<number[][]>([]);
  const [currentPiece, setCurrentPiece] = useState<number[][]>([]);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);

  const initBoard = () => {
    const newBoard = Array(BOARD_HEIGHT)
      .fill(0)
      .map(() => Array(BOARD_WIDTH).fill(0));
    setBoard(newBoard);
    spawnNewPiece();
  };

  const spawnNewPiece = () => {
    const newPiece = SHAPES[Math.floor(Math.random() * SHAPES.length)];
    setCurrentPiece(newPiece);
    setPosition({ x: Math.floor(BOARD_WIDTH / 2) - 1, y: 0 });
  };

  const checkCollision = (piece: number[][], pos: { x: number; y: number }) => {
    for (let y = 0; y < piece.length; y++) {
      for (let x = 0; x < piece[y].length; x++) {
        if (piece[y][x]) {
          const newX = pos.x + x;
          const newY = pos.y + y;
          if (
            newX < 0 ||
            newX >= BOARD_WIDTH ||
            newY >= BOARD_HEIGHT ||
            (newY >= 0 && board[newY][newX])
          ) {
            return true;
          }
        }
      }
    }
    return false;
  };

  const mergePiece = () => {
    const newBoard = [...board];
    for (let y = 0; y < currentPiece.length; y++) {
      for (let x = 0; x < currentPiece[y].length; x++) {
        if (currentPiece[y][x]) {
          if (position.y + y < 0) {
            setGameOver(true);
            return;
          }
          newBoard[position.y + y][position.x + x] = currentPiece[y][x];
        }
      }
    }
    setBoard(newBoard);
    checkLines();
    spawnNewPiece();
  };

  const checkLines = () => {
    let lines = 0;
    const newBoard = board.filter((row) => {
      if (row.every((cell) => cell)) {
        lines++;
        return false;
      }
      return true;
    });

    while (newBoard.length < BOARD_HEIGHT) {
      newBoard.unshift(Array(BOARD_WIDTH).fill(0));
    }

    if (lines > 0) {
      setScore(score + lines * 100);
      setBoard(newBoard);
    }
  };

  const moveDown = useCallback(() => {
    if (!checkCollision(currentPiece, { ...position, y: position.y + 1 })) {
      setPosition({ ...position, y: position.y + 1 });
    } else {
      mergePiece();
    }
  }, [currentPiece, position, board]);

  const moveLeft = () => {
    if (!checkCollision(currentPiece, { ...position, x: position.x - 1 })) {
      setPosition({ ...position, x: position.x - 1 });
    }
  };

  const moveRight = () => {
    if (!checkCollision(currentPiece, { ...position, x: position.x + 1 })) {
      setPosition({ ...position, x: position.x + 1 });
    }
  };

  const rotate = () => {
    const rotated = currentPiece[0].map((_, i) =>
      currentPiece.map((row) => row[row.length - 1 - i])
    );
    if (!checkCollision(rotated, position)) {
      setCurrentPiece(rotated);
    }
  };

  useEffect(() => {
    if (isOpen && !gameOver) {
      initBoard();
      const interval = setInterval(moveDown, 1000);
      return () => clearInterval(interval);
    }
  }, [isOpen, gameOver]);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (!isOpen || gameOver) return;

      switch (e.key) {
        case "ArrowLeft":
          moveLeft();
          break;
        case "ArrowRight":
          moveRight();
          break;
        case "ArrowDown":
          moveDown();
          break;
        case "ArrowUp":
          rotate();
          break;
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [isOpen, gameOver, currentPiece, position, board]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
          />
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-[400px] max-h-[90vh] z-50"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-[#0A0A0A] border border-[#2A0E61] rounded-xl shadow-xl p-6 relative overflow-y-auto h-full">
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
              >
                <IoClose size={24} />
              </button>

              <div className="text-center mb-4">
                <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-white">
                  Tetris
                </h2>
                <p className="text-xl text-purple-400 mt-2">Score: {score}</p>
                {gameOver && (
                  <div className="text-red-500 mt-2 text-lg font-semibold">
                    Game Over!
                  </div>
                )}
              </div>

              <div className="flex justify-center">
                <div className="grid gap-[1px] bg-gray-800/50 p-3 rounded-lg border border-[#2A0E61]">
                  {board.map((row, y) => (
                    <div key={y} className="flex gap-[1px]">
                      {row.map((cell, x) => {
                        const isCurrent = currentPiece.some((row, pieceY) =>
                          row.some(
                            (value, pieceX) =>
                              value &&
                              x === position.x + pieceX &&
                              y === position.y + pieceY
                          )
                        );
                        return (
                          <div
                            key={x}
                            className={`w-5 h-5 rounded-sm ${
                              cell || isCurrent
                                ? "bg-gradient-to-br from-purple-500 to-purple-700 border border-purple-400/30"
                                : "bg-gray-900/80 border border-gray-800/50"
                            }`}
                          />
                        );
                      })}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-4 text-gray-300 text-center space-y-2">
                <p className="font-medium text-purple-400">Controls:</p>
                <div className="grid grid-cols-2 gap-2 max-w-xs mx-auto text-sm">
                  <div>← Left</div>
                  <div>→ Right</div>
                  <div>↑ Rotate</div>
                  <div>↓ Drop</div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default TetrisDialog;
