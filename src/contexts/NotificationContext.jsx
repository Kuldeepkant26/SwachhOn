import React, { createContext, useContext, useState, useCallback } from 'react';

const NotificationContext = createContext();

export const useNotification = () => {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error('useNotification must be used within a NotificationProvider');
  }
  return context;
};

export const NotificationProvider = ({ children }) => {
  const [notifications, setNotifications] = useState([]);

  const addNotification = useCallback((notification) => {
    const id = Date.now() + Math.random();
    const newNotification = { ...notification, id };
    
    setNotifications(prev => [...prev, newNotification]);

    // Auto remove after duration (except loading)
    if (notification.type !== 'loading') {
      const duration = notification.duration || 5000;
      setTimeout(() => {
        removeNotification(id);
      }, duration);
    }

    return id;
  }, []);

  const removeNotification = useCallback((id) => {
    setNotifications(prev => prev.filter(notification => notification.id !== id));
  }, []);

  const updateNotification = useCallback((id, updates) => {
    setNotifications(prev => 
      prev.map(notification => 
        notification.id === id 
          ? { ...notification, ...updates }
          : notification
      )
    );
  }, []);

  const clearAll = useCallback(() => {
    setNotifications([]);
  }, []);

  // Convenience methods
  const showSuccess = useCallback((title, message, duration) => {
    return addNotification({ type: 'success', title, message, duration });
  }, [addNotification]);

  const showError = useCallback((title, message, duration) => {
    return addNotification({ type: 'error', title, message, duration });
  }, [addNotification]);

  const showWarning = useCallback((title, message, duration) => {
    return addNotification({ type: 'warning', title, message, duration });
  }, [addNotification]);

  const showInfo = useCallback((title, message, duration) => {
    return addNotification({ type: 'info', title, message, duration });
  }, [addNotification]);

  const showLoading = useCallback((title, message) => {
    return addNotification({ type: 'loading', title, message });
  }, [addNotification]);

  const value = {
    notifications,
    addNotification,
    removeNotification,
    updateNotification,
    clearAll,
    showSuccess,
    showError,
    showWarning,
    showInfo,
    showLoading
  };

  return (
    <NotificationContext.Provider value={value}>
      {children}
    </NotificationContext.Provider>
  );
};
