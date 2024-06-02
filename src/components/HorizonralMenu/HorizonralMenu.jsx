import collectionListsKeys from '@/utils/scripts/collectionListsKeys';
import React, { memo } from 'react';

import './styles.scss';
import { SidebarCard } from '../Sidebar/SidebarCard';

const defaultData = Object.entries(collectionListsKeys);

export const HorizonralMenu = memo(({ 
  activeList = '',
  handleChangeActiveList = () => {},
  data = defaultData,
}) => {
  return (
    <div className="horizontal-menu">
      <ul className="horizontal-menu__list">
        {Object.entries(data).map(([key, { name, quantity }]) => (
          <li className="horizontal-menu__item" key={key}>
            <SidebarCard
              name={name}
              quantity={quantity}
              handleOnClick={() => handleChangeActiveList(key)}
              isActive={activeList === key}
            />
          </li>
        ))}
      </ul>
    </div>
  );
});

HorizonralMenu.displayName = 'HorizonralMenu';