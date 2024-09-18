import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import "../App.css";

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

function CardComponent({
  title,
  subtitle,
  fields,
  buttonLabel,
  buttonAction,
  countryOptions,
}) {
  return (
    <Card sx={{ minWidth: 275 }} className="CardComponent">
      <CardContent>
        <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
          {title}
        </Typography>
        <Typography variant="h5" component="div">
          {subtitle}
        </Typography>
        {fields.map((field, index) => (
          <React.Fragment key={index}>
            {field.type === 'text' ? (
              <TextField
                label={field.label}
                type="text"
                margin="normal"
                variant="outlined"
                fullWidth
              />
            ) : field.type === 'password' ? (
              <TextField
                label={field.label}
                type="password"
                margin="normal"
                variant="outlined"
                fullWidth
              />
            ) : field.type === 'select' ? (
              <Select
                labelId="country-select-label"
                id="country-select"
                label={field.label}
                fullWidth
              >
                {countryOptions.map((option, index) => (
                  <MenuItem key={index} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </Select>
            ) : null}
          </React.Fragment>
        ))}
      </CardContent>
      <CardActions>
        <Button size="small" onClick={buttonAction}>
          {buttonLabel}
        </Button>
      </CardActions>
    </Card>
  );
}

export default CardComponent;