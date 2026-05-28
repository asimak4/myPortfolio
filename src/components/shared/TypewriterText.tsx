import React from 'react';
import { Box, Typography, TypographyProps } from '@mui/material';
import { keyframes } from '@mui/system';
import { useTypewriter } from '../../hooks/useTypewriter';

const blink = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
`;

interface TypewriterTextProps extends TypographyProps {
  phrases: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
}

const TypewriterText: React.FC<TypewriterTextProps> = ({
  phrases,
  typingSpeed,
  deletingSpeed,
  pauseDuration,
  sx,
  ...typographyProps
}) => {
  const { text, reducedMotion } = useTypewriter({
    phrases,
    typingSpeed,
    deletingSpeed,
    pauseDuration,
  });

  const longestPhrase = phrases.reduce(
    (longest, phrase) => (phrase.length > longest.length ? phrase : longest),
    ''
  );

  return (
    <Typography
      component="span"
      sx={{
        display: 'inline-block',
        position: 'relative',
        minWidth: `${longestPhrase.length}ch`,
        ...sx,
      }}
      {...typographyProps}
    >
      {text}
      {!reducedMotion && (
        <Box
          component="span"
          aria-hidden="true"
          sx={{
            display: 'inline-block',
            width: '2px',
            height: '0.85em',
            ml: '2px',
            verticalAlign: 'baseline',
            bgcolor: 'secondary.light',
            animation: `${blink} 1s step-end infinite`,
          }}
        />
      )}
    </Typography>
  );
};

export default TypewriterText;
