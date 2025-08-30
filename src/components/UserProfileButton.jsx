import React from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '../contexts/AuthContext';
import { useSidebar } from '../contexts/SidebarContext';
import './UserProfileButton.css';

const UserProfileButton = () => {
  const { user } = useAuth();
  const { openSidebar } = useSidebar();

  const getInitials = (name) => {
    return name
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <motion.button
      className="user-profile-btn"
      onClick={openSidebar}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="user-avatar">
        <span>{getInitials(user?.name || 'U')}</span>
      </div>
      <div className="user-info">
        <span className="user-name">{user?.name}</span>
        {user?.isAdmin && <span className="admin-badge">Admin</span>}
      </div>
    </motion.button>
  );
};

export default UserProfileButton;
