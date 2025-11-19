import { Box, SxProps, Theme, Typography } from '@mui/material';
import { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { theme } from '@app/App';
import { useNavigate } from 'react-router-dom';

export const Header: FC = () => {
  const navigate = useNavigate();

  const handleBackToList = () => {
    navigate('/list');
  };

  return (
    <Box sx={{ mb: 3, display: 'flex', gap: 2, flexWrap: 'wrap', justifyContent: 'space-between' }}>
      <BackToList onClick={handleBackToList} />
    </Box>
  );
};

interface BackToListProps {
  onClick: () => void;
  sx?: SxProps<Theme>;
}

const BackToList: FC<BackToListProps> = ({ onClick, sx = {} }) => {
  return (
    <Box
      component="div"
      onClick={onClick}
      sx={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 1,
        cursor: 'pointer',
        color: theme.palette.primary.dark,
        transition: 'color 0.3s',
        '&:hover': {
          color: theme.palette.primary.main,
        },

        '&:active': {
          transform: 'translateY(0)',
        },
        ...sx,
      }}
    >
      <FontAwesomeIcon icon={faChevronLeft} style={{ fontSize: '14px' }} />
      <Typography variant="button" fontWeight={700} letterSpacing={0.9}>
        Назад к списку
      </Typography>
    </Box>
  );
};
