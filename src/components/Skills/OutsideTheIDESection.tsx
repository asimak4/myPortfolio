import React, { useState, useEffect, useCallback } from 'react';
import { Box, Typography, Collapse } from '@mui/material';
import { keyframes } from '@mui/system';
import { outsideTheIDE, outsideTheIDEIntro, HobbyItem } from './hobbiesData';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(8px); }
  to { opacity: 1; transform: translateY(0); }
`;

const pulseRing = keyframes`
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.04); }
`;

const HobbyIcon: React.FC<{
  src: string;
  alt: string;
  size?: number;
  light?: boolean;
  fill?: boolean;
  fillScale?: number;
}> = ({ src, alt, size = 32, light = false, fill = false, fillScale = 130 }) => (
  <Box
    component="img"
    src={src}
    alt={alt}
    sx={{
      width: fill ? `${fillScale}%` : size,
      height: fill ? `${fillScale}%` : size,
      objectFit: fill ? 'cover' : 'contain',
      flexShrink: 0,
      ...(light
        ? { mixBlendMode: 'lighten' }
        : { filter: 'brightness(0) invert(1)', opacity: 0.92 }),
    }}
  />
);

const IconBadge: React.FC<{
  hobby: HobbyItem;
  iconSize: number;
  active?: boolean;
  large?: boolean;
  animate?: boolean;
  fillScale?: number;
  coverIcon?: boolean;
}> = ({
  hobby,
  iconSize,
  active = true,
  large = false,
  animate = false,
  fillScale = 130,
  coverIcon = true,
}) => (
  <Box
    sx={{
      width: large ? { xs: 56, md: 60 } : { xs: 72, md: 84 },
      height: large ? { xs: 56, md: 60 } : { xs: 72, md: 84 },
      borderRadius: '50%',
      p: '3px',
      background: active
        ? `linear-gradient(135deg, ${hobby.accentColor}, ${hobby.accentColor}88, #fff)`
        : `linear-gradient(135deg, ${hobby.accentColor}aa, ${hobby.accentColor}44)`,
      ...(animate && active && { animation: `${pulseRing} 2.5s ease-in-out infinite` }),
    }}
  >
    <Box
      sx={{
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        bgcolor: '#151C20',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        isolation: 'isolate',
      }}
    >
      <HobbyIcon
        src={hobby.icon}
        alt={hobby.iconAlt}
        size={iconSize}
        light={hobby.lightIcon}
        fill={hobby.lightIcon && coverIcon}
        fillScale={fillScale}
      />
    </Box>
  </Box>
);

const InterestRing: React.FC<{
  hobby: HobbyItem;
  active: boolean;
  onSelect: () => void;
}> = ({ hobby, active, onSelect }) => (
  <Box
    onClick={onSelect}
    role="button"
    tabIndex={0}
    onKeyDown={(e) => e.key === 'Enter' && onSelect()}
    sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 1,
      cursor: 'pointer',
      flex: '0 0 auto',
      scrollSnapAlign: 'center',
      opacity: active ? 1 : 0.55,
      transform: active ? 'scale(1.05)' : 'scale(1)',
      transition: 'opacity 0.3s, transform 0.3s',
      '&:hover': { opacity: 1 },
    }}
  >
    <IconBadge
      hobby={hobby}
      iconSize={hobby.lightIcon ? 48 : 48}
      coverIcon={!hobby.lightIcon}
      active={active}
      animate={active}
    />
    <Typography
      sx={{
        fontSize: '0.7rem',
        fontWeight: active ? 700 : 500,
        color: active ? '#fff' : 'rgba(255,255,255,0.6)',
        textAlign: 'center',
        maxWidth: 80,
        lineHeight: 1.2,
        transition: 'color 0.3s',
      }}
    >
      {hobby.label}
    </Typography>
  </Box>
);

const OutsideTheIDESection: React.FC = () => {
  const [expanded, setExpanded] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const active = outsideTheIDE[activeIndex];

  const selectHobby = useCallback((index: number) => {
    setActiveIndex(index);
    setPaused(true);
  }, []);

  useEffect(() => {
    if (!expanded || paused) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % outsideTheIDE.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [expanded, paused]);

  return (
    <Box
      sx={{
        mt: { xs: 8, md: 12 },
        pt: { xs: 4, md: 6 },
        pb: { xs: 6, md: 8 },
      }}
    >
      <Box
        onClick={() => !expanded && setExpanded(true)}
        role={expanded ? undefined : 'button'}
        tabIndex={expanded ? undefined : 0}
        aria-expanded={expanded}
        aria-label={expanded ? undefined : 'Expand Outside the IDE section'}
        onKeyDown={(e) => {
          if (!expanded && (e.key === 'Enter' || e.key === ' ')) {
            e.preventDefault();
            setExpanded(true);
          }
        }}
        sx={{
          textAlign: 'center',
          mb: expanded ? { xs: 5, md: 6 } : 0,
          cursor: expanded ? 'default' : 'pointer',
          borderRadius: 3,
          ...(!expanded && {
            '& .easter-egg-hint': {
              display: 'none',
            },
            '@media (hover: hover)': {
              '&:hover .easter-egg-hint': {
                display: 'block',
              },
            },
          }),
        }}
      >
        <Typography
          variant="overline"
          sx={{
            color: 'secondary.main',
            letterSpacing: 3,
            mb: 2,
            display: 'block',
            fontWeight: 600,
            fontSize: '0.875rem',
          }}
        >
          WHEN I&apos;M NOT CODING
        </Typography>
        <Typography
          variant="h2"
          gutterBottom
          sx={{
            fontWeight: 800,
            background: 'linear-gradient(135deg, #FFFFFF 0%, #74B9FF 100%)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontSize: { xs: '2rem', sm: '2.5rem', md: '2.75rem' },
            mb: 2,
          }}
        >
          Outside the IDE
        </Typography>

        {!expanded && (
          <Typography
            className="easter-egg-hint"
            sx={{
              color: 'rgba(255, 255, 255, 0.45)',
              fontSize: { xs: '0.8rem', md: '0.85rem' },
              letterSpacing: 0.3,
              mb: 1,
            }}
          >
            Want to learn more about me? Click here.
          </Typography>
        )}

        <Collapse in={expanded} unmountOnExit>
          <Typography
            variant="body1"
            sx={{
              color: 'rgba(255,255,255,0.8)',
              maxWidth: '620px',
              mx: 'auto',
              fontSize: { xs: '1rem', md: '1.1rem' },
              lineHeight: 1.8,
              animation: `${fadeIn} 0.5s ease-out`,
            }}
          >
            {outsideTheIDEIntro}
          </Typography>
        </Collapse>
      </Box>

      <Collapse in={expanded} unmountOnExit>
        <Box>
      {/* Interest highlights — scrollable row, not a list */}
      <Box
        sx={{ position: 'relative', mb: 4, mt: { xs: 4, md: 5 } }}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: { xs: 280, md: 420 },
            height: { xs: 120, md: 140 },
            borderRadius: '50%',
            background: `radial-gradient(ellipse, ${active.accentColor}18 0%, transparent 70%)`,
            transition: 'background 0.6s ease',
            pointerEvents: 'none',
          }}
        />

        <Box
          sx={{
            display: 'flex',
            gap: { xs: 2.5, md: 3.5 },
            overflowX: 'auto',
            scrollSnapType: 'x mandatory',
            px: { xs: 2, md: 4 },
            py: 2,
            justifyContent: { xs: 'flex-start', md: 'center' },
            scrollbarWidth: 'none',
            '&::-webkit-scrollbar': { display: 'none' },
          }}
        >
          {outsideTheIDE.map((hobby, index) => (
            <InterestRing
              key={hobby.label}
              hobby={hobby}
              active={index === activeIndex}
              onSelect={() => selectHobby(index)}
            />
          ))}
        </Box>
      </Box>

      {/* Single story panel — one voice, not nine list items */}
      <Box
        key={active.label}
        sx={{
          maxWidth: 540,
          mx: 'auto',
          textAlign: 'center',
          px: { xs: 2, md: 3 },
          animation: `${fadeIn} 0.5s ease-out`,
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
          <IconBadge hobby={active} iconSize={30} coverIcon={false} active large />
        </Box>
        <Typography
          sx={{
            color: active.accentColor,
            fontWeight: 700,
            fontSize: { xs: '1.2rem', md: '1.35rem' },
            mb: 1,
          }}
        >
          {active.label}
        </Typography>
        <Typography
          sx={{
            color: 'rgba(255,255,255,0.85)',
            fontSize: { xs: '1rem', md: '1.08rem' },
            lineHeight: 1.85,
          }}
        >
          {active.story}
        </Typography>
      </Box>
        </Box>
      </Collapse>
    </Box>
  );
};

export default OutsideTheIDESection;
