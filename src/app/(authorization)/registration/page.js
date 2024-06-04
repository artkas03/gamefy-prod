import React from 'react';
import { FormSlider } from '@/components/FormSlider/FormSlider';
import { RegistrationForm } from './components/RegistrationForm';

import './styles.scss';

export default function Registration() {
  return (
    <div className="reg__wrapper grid">
      <div className="reg__slider">
        <FormSlider />
      </div>

      <RegistrationForm />
    </div>
  );
}
