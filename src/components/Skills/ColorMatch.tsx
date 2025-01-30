import React, { useState, useEffect } from 'react';
import { Box, Typography, Button } from '@mui/material';

const GRID_SIZE = 3;
const TILE_COUNT = GRID_SIZE * GRID_SIZE - 1;

const SlidingPuzzle: React.FC = () => {
  const [tiles, setTiles] = useState<number[]>([]);
  const [isComplete, setIsComplete] = useState(false);
  const [moves, setMoves] = useState(0);
  const [bestScore, setBestScore] = useState<number | null>(null);

  const initializePuzzle = () => {
    let numbers = Array.from({ length: TILE_COUNT }, (_, i) => i + 1);
    numbers.push(0); // Empty tile
    
    // Shuffle until we get a solvable puzzle
    do {
      numbers.sort(() => Math.random() - 0.5);
    } while (!isSolvable(numbers));

    setTiles(numbers);
    setIsComplete(false);
    setMoves(0);
  };

  // Check if the puzzle is solvable
  const isSolvable = (numbers: number[]) => {
    let inversions = 0;
    for (let i = 0; i < numbers.length - 1; i++) {
      for (let j = i + 1; j < numbers.length; j++) {
        if (numbers[i] && numbers[j] && numbers[i] > numbers[j]) {
          inversions++;
        }
      }
    }
    return inversions % 2 === 0;
  };

  const canMove = (index: number) => {
    const emptyIndex = tiles.indexOf(0);
    const row = Math.floor(index / GRID_SIZE);
    const emptyRow = Math.floor(emptyIndex / GRID_SIZE);
    const col = index % GRID_SIZE;
    const emptyCol = emptyIndex % GRID_SIZE;

    return (
      (Math.abs(row - emptyRow) === 1 && col === emptyCol) ||
      (Math.abs(col - emptyCol) === 1 && row === emptyRow)
    );
  };

  const moveTile = (index: number) => {
    if (!canMove(index) || isComplete) return;

    const newTiles = [...tiles];
    const emptyIndex = tiles.indexOf(0);
    newTiles[emptyIndex] = tiles[index];
    newTiles[index] = 0;
    
    setTiles(newTiles);
    setMoves(moves + 1);

    // Check if puzzle is complete
    const isWon = newTiles.every((tile, index) => 
      tile === 0 ? index === newTiles.length - 1 : tile === index + 1
    );
    
    if (isWon) {
      setIsComplete(true);
      if (!bestScore || moves + 1 < bestScore) {
        setBestScore(moves + 1);
      }
    }
  };

  useEffect(() => {
    initializePuzzle();
  }, []);

  return (
    <Box sx={{ 
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 2,
      p: 2
    }}>
      <Box sx={{ 
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
        alignItems: 'center'
      }}>
        <Typography variant="body2" sx={{ color: 'white' }}>
          Moves: {moves}
        </Typography>
        {bestScore && (
          <Typography variant="body2" sx={{ color: 'white' }}>
            Best: {bestScore}
          </Typography>
        )}
      </Box>

      <Box sx={{
        display: 'grid',
        gridTemplateColumns: `repeat(${GRID_SIZE}, 1fr)`,
        gap: 1,
        width: '100%',
        aspectRatio: '1',
        maxWidth: '300px'
      }}>
        {tiles.map((tile, index) => (
          <Button
            key={index}
            onClick={() => moveTile(index)}
            disabled={!canMove(index) || tile === 0}
            sx={{
              aspectRatio: '1',
              minWidth: 0,
              p: 0,
              bgcolor: tile === 0 ? 'transparent' : 'rgba(255,255,255,0.1)',
              color: 'white',
              fontSize: '1.2rem',
              fontWeight: 'bold',
              border: '2px solid rgba(255,255,255,0.1)',
              '&:hover': {
                bgcolor: tile === 0 ? 'transparent' : 'rgba(255,255,255,0.2)',
              },
              '&.Mui-disabled': {
                bgcolor: tile === 0 ? 'transparent' : 'rgba(255,255,255,0.1)',
                color: 'white',
              }
            }}
          >
            {tile !== 0 && tile}
          </Button>
        ))}
      </Box>

      {isComplete && (
        <Typography variant="h6" sx={{ color: 'white', mt: 2 }}>
          Puzzle Complete! 🎉
        </Typography>
      )}

      <Button
        variant="contained"
        color="secondary"
        onClick={initializePuzzle}
        sx={{ mt: 'auto' }}
      >
        New Game
      </Button>
    </Box>
  );
};

export default SlidingPuzzle; 
