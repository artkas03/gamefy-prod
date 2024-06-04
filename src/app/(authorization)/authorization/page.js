import React from 'react';
import { FormSlider } from '@/components/FormSlider/FormSlider';
import { AuthorizationForm } from './components/AuthorizationForm';

import './styles.scss';

export default async function Authorization() {
  return (
    <div className="auth__wrapper grid">
      <div className="auth__slider">
        <FormSlider />
      </div>

      <AuthorizationForm />
    </div>
  );
}
