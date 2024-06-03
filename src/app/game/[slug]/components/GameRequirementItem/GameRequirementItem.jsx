import React from 'react';

import './styles.scss';

export const GameRequirementItem = ({
  title,
  requirements
}) => {
  return (
    <div className="requirements">
      <h4 className="requirements__title">{title}</h4>

      <p className="requirements__subtitle">
        {requirements?.preInfo || ''}
      </p>

      <ul className="requirements__list">
        <li className="requirements__item">
          <p className="requirements__name">OS:</p>
          
          <p className="requirements__value">{requirements?.os || ''}</p>
        </li>

        <li className="requirements__item">
          <p className="requirements__name">Processor:</p>
          
          <p className="requirements__value">{requirements?.processor || ''}</p>
        </li>

        <li className="requirements__item">
          <p className="requirements__name">Graphics:</p>
          
          <p className="requirements__value">{requirements?.gpu || ''}</p>
        </li>

        <li className="requirements__item">
          <p className="requirements__name">Storage:</p>
          
          <p className="requirements__value">{requirements?.storage || ''}</p>
        </li>

        <li className="requirements__item">
          <p className="requirements__name">Aditional notes:</p>
          
          <p className="requirements__value">{requirements?.additionalNotes || ''}</p>
        </li>
      </ul>
    </div>
  )
}
