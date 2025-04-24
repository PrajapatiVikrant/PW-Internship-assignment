import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { useDispatch } from 'react-redux';
import { changePriceFilter } from '../../State/Slice/FilterSlice';

function valuetext(value) {
  return `${value}°C`;
}

const minDistance = 10;

export default function PriceRangeFilter({priceFilter}) {
  const [value1, setValue1] = React.useState([0, 100]);
  const dispatch = useDispatch();

  const handleChange1 = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
      setValue1([Math.min(newValue[0], value1[1] - minDistance), value1[1]]);
    } else {
      setValue1([value1[0], Math.max(newValue[1], value1[0] + minDistance)]);
    }
    dispatch(changePriceFilter({min:value1[0],max:value1[1]}));
  };

  

  return (
    <Box className={priceFilter?"h-auto":"h-0 overflow-hidden"} sx={{ width: 300 }}>
      <Slider
        getAriaLabel={() => 'Minimum distance'}
        value={value1}
        onChange={handleChange1}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        disableSwap
      />
    <p className='flex justify-between'><span>{value1[0]}</span><span>{value1[1]}</span></p>
    </Box>
  );
}
