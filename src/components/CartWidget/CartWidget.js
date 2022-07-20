import * as React from 'react';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useCartContext } from "../../contexts/cartContext"

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));

export default function CartWidget() {
  const { cartList } = useCartContext()
  let totalItems = 0;

  cartList.forEach((item) => {
    totalItems = totalItems + item.quantity;
  });
  return (
    <IconButton aria-label="cart">
    {totalItems ?
     (<StyledBadge badgeContent={totalItems} color="secondary"> <ShoppingCartIcon />
      </StyledBadge>
    ) : ( <StyledBadge color="secondary"> <ShoppingCartIcon />
      </StyledBadge>)
     }
    </IconButton>
  );
}