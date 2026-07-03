import React from 'react';
import AICoach from './AICoach';

/**
 * Wraps dashboard content and keeps the AI Coach available.
 * Place this around any page that should always show the floating coach.
 */
const DashboardWithAI = ({ userProfile, onSendMessage, children }) => {
  return (
    <>
      {children}
      <AICoach userProfile={userProfile} onSendMessage={onSendMessage} />
    </>
  );
};

export default DashboardWithAI;

