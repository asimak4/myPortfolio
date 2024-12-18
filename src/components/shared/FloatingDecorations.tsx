import React from 'react';
import { Box } from '@mui/material';
import { keyframes } from '@mui/system';
import ComputerIcon from '@mui/icons-material/Computer';
import KeyboardIcon from '@mui/icons-material/Keyboard';
import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';
import BugReportIcon from '@mui/icons-material/BugReport';
import DataObjectIcon from '@mui/icons-material/DataObject';
import CloudIcon from '@mui/icons-material/Cloud';
import TerminalIcon from '@mui/icons-material/Terminal';
import SchemaIcon from '@mui/icons-material/Schema';
import MemoryIcon from '@mui/icons-material/Memory';
import HubIcon from '@mui/icons-material/Hub';
import LayersIcon from '@mui/icons-material/Layers';
import WebhookIcon from '@mui/icons-material/Webhook';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';

const float = keyframes`
  0% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(5deg); }
  100% { transform: translateY(0px) rotate(0deg); }
`;

const floatReverse = keyframes`
  0% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(20px) rotate(-5deg); }
  100% { transform: translateY(0px) rotate(0deg); }
`;

interface FloatingDecorationsProps {
  variant?: 'primary' | 'secondary' | 'tertiary' | 'quaternary';
}

const variants = {
  primary: [
    { Icon: ComputerIcon, left: '5%', top: '20%', delay: '0s', size: '4rem', opacity: 0.2 },
    { Icon: KeyboardIcon, left: '15%', top: '50%', delay: '1s', size: '3rem', opacity: 0.15 },
    { Icon: CodeIcon, left: '7%', bottom: '20%', delay: '2s', size: '3.5rem', opacity: 0.1 },
    { Icon: StorageIcon, right: '8%', top: '30%', delay: '1.5s', size: '3.5rem', opacity: 0.15 },
    { Icon: DeveloperModeIcon, right: '12%', bottom: '40%', delay: '0.5s', size: '4rem', opacity: 0.2 },
    { Icon: MemoryIcon, left: '25%', top: '35%', delay: '1.2s', size: '2.5rem', opacity: 0.1 },
    { Icon: HubIcon, right: '25%', bottom: '25%', delay: '1.8s', size: '2.5rem', opacity: 0.1 },
    { Icon: LayersIcon, left: '18%', bottom: '45%', delay: '0.8s', size: '2rem', opacity: 0.15 },
  ],
  secondary: [
    { Icon: BugReportIcon, left: '8%', top: '25%', delay: '0.5s', size: '3.5rem', opacity: 0.2 },
    { Icon: DataObjectIcon, left: '20%', top: '60%', delay: '1.2s', size: '3rem', opacity: 0.15 },
    { Icon: CloudIcon, left: '6%', bottom: '30%', delay: '1.8s', size: '4rem', opacity: 0.1 },
    { Icon: TerminalIcon, right: '10%', top: '40%', delay: '1s', size: '3.5rem', opacity: 0.15 },
    { Icon: SchemaIcon, right: '7%', bottom: '35%', delay: '0.8s', size: '3rem', opacity: 0.2 },
    { Icon: WebhookIcon, left: '30%', top: '40%', delay: '1.5s', size: '2.5rem', opacity: 0.1 },
    { Icon: IntegrationInstructionsIcon, right: '22%', top: '25%', delay: '2s', size: '2.5rem', opacity: 0.1 },
    { Icon: LayersIcon, right: '15%', bottom: '45%', delay: '0.7s', size: '2rem', opacity: 0.15 },
  ],
  tertiary: [
    { Icon: CodeIcon, left: '6%', top: '30%', delay: '0.7s', size: '4rem', opacity: 0.2 },
    { Icon: StorageIcon, left: '22%', top: '55%', delay: '1.4s', size: '3rem', opacity: 0.15 },
    { Icon: CloudIcon, left: '5%', bottom: '25%', delay: '2.1s', size: '3.5rem', opacity: 0.1 },
    { Icon: BugReportIcon, right: '9%', top: '35%', delay: '1.2s', size: '3.5rem', opacity: 0.15 },
    { Icon: TerminalIcon, right: '11%', bottom: '45%', delay: '0.6s', size: '4rem', opacity: 0.2 },
    { Icon: HubIcon, left: '28%', top: '25%', delay: '1.6s', size: '2.5rem', opacity: 0.1 },
    { Icon: MemoryIcon, right: '25%', top: '50%', delay: '1.9s', size: '2.5rem', opacity: 0.1 },
    { Icon: WebhookIcon, left: '15%', bottom: '40%', delay: '0.9s', size: '2rem', opacity: 0.15 },
  ],
  quaternary: [
    { Icon: DeveloperModeIcon, left: '7%', top: '35%', delay: '0.9s', size: '4rem', opacity: 0.2 },
    { Icon: DataObjectIcon, left: '25%', top: '45%', delay: '1.6s', size: '3rem', opacity: 0.15 },
    { Icon: SchemaIcon, left: '8%', bottom: '35%', delay: '1.9s', size: '3.5rem', opacity: 0.1 },
    { Icon: KeyboardIcon, right: '7%', top: '25%', delay: '1.3s', size: '3.5rem', opacity: 0.15 },
    { Icon: ComputerIcon, right: '10%', bottom: '30%', delay: '0.4s', size: '4rem', opacity: 0.2 },
    { Icon: IntegrationInstructionsIcon, left: '20%', top: '20%', delay: '1.1s', size: '2.5rem', opacity: 0.1 },
    { Icon: LayersIcon, right: '20%', top: '45%', delay: '1.7s', size: '2.5rem', opacity: 0.1 },
    { Icon: HubIcon, right: '15%', bottom: '50%', delay: '0.8s', size: '2rem', opacity: 0.15 },
  ],
};

const FloatingDecorations: React.FC<FloatingDecorationsProps> = ({ variant = 'primary' }) => {
  const decorations = variants[variant];

  return (
    <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, pointerEvents: 'none' }}>
      {decorations.map(({ Icon, left, right, top, bottom, delay, size, opacity }, index) => (
        <Box
          key={index}
          sx={{
            position: 'absolute',
            left,
            right,
            top,
            bottom,
            color: `rgba(9,132,227,${opacity})`,
            animation: `${index % 2 === 0 ? float : floatReverse} ${6 + index}s ease-in-out infinite`,
            animationDelay: delay,
          }}
        >
          <Icon sx={{ fontSize: size }} />
        </Box>
      ))}

      {/* Code snippets with varying sizes and opacities */}
      <Box
        sx={{
          position: 'absolute',
          left: '3%',
          top: '40%',
          color: 'rgba(9,132,227,0.1)',
          fontFamily: 'monospace',
          fontSize: '1.4rem',
          animation: `${float} 8s ease-in-out infinite`,
          animationDelay: '1s',
          transform: 'rotate(-15deg)',
        }}
      >
        {"</>"}
      </Box>
      <Box
        sx={{
          position: 'absolute',
          right: '5%',
          top: '60%',
          color: 'rgba(9,132,227,0.15)',
          fontFamily: 'monospace',
          fontSize: '1.2rem',
          animation: `${floatReverse} 10s ease-in-out infinite`,
          animationDelay: '2s',
          transform: 'rotate(15deg)',
        }}
      >
        {"{code}"}
      </Box>
      <Box
        sx={{
          position: 'absolute',
          left: '28%',
          bottom: '15%',
          color: 'rgba(9,132,227,0.08)',
          fontFamily: 'monospace',
          fontSize: '1.6rem',
          animation: `${float} 9s ease-in-out infinite`,
          animationDelay: '1.5s',
          transform: 'rotate(-8deg)',
        }}
      >
        {"{ }"}
      </Box>
    </Box>
  );
};

export default FloatingDecorations; 