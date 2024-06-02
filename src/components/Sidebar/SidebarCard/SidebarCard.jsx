import React from 'react';
import cn from 'classnames';

import './styles.scss';
import { Button, Chip } from '@nextui-org/react';

export const SidebarCard = ({ name, quantity, isActive, handleOnClick}) => {
  return (
    <Button
      className={cn("sidebar-card", {
        "sidebar-card--active": isActive,
      })}
      onClick={handleOnClick}
    >
      <h4 className={cn("sidebar-card__name", {
        "sidebar-card__name--active": isActive,
      })}>
        {name}
      </h4>

      <Chip className={cn("sidebar-card__quantity", {
        "sidebar-card__quantity--active": isActive,
      })}>
        {quantity}
      </Chip>
    </Button>
  )
}
