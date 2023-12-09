'use client';

import React, { useEffect } from 'react';
import { redirect } from 'next/navigation';

const AuthStack: React.FC = () => {
  useEffect(() => {
    redirect('/auth-stack/dashboard');
  });

  return null;
};

export default AuthStack;
