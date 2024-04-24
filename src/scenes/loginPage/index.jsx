import { useTheme } from '@emotion/react'
import { Box, Typography, useMediaQuery } from '@mui/material';
import React from 'react'
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const theme= useTheme();
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
  const dark = theme.palette.dark;
  const background = theme.palette.background.default;
  const primaryLight = theme.palette.primary.light;
  const navigate = useNavigate();

  return <Box>
    <Box width='100%' backgroundColor= {theme.palette.background.alt} p="1rem 6%" textAlign="center">
    <Typography
      fontWeight="bold"
      fontSize= "32px"
      color= "primary"
      onClick={()=> navigate("/home")}
      sx={{
        "&:hover": {
          color: primaryLight,
          cursor: "pointer"
        }
      }}
      >
      Sociopedia
    </Typography>
    </Box>
    
  </Box>
}

export default LoginPage