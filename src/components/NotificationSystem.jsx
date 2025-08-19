import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { createPortal } from 'react-dom';
import { useNotification } from '../contexts/NotificationContext';
import './NotificationSystem.css';

const NotificationSystem = () => {
  const { notifications, removeNotification } = useNotification();

  const getIcon = (type) => {
    switch (type) {
      case 'success':
        return (
          <svg className="notification-icon success-icon" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
        );
      case 'error':
        return (
          <svg className="notification-icon error-icon" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
          </svg>
        );
      case 'warning':
        return (
          <svg className="notification-icon warning-icon" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
        );
      case 'info':
        return (
          <svg className="notification-icon info-icon" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
          </svg>
        );
      case 'loading':
        return (
          <div className="notification-icon loading-icon">
            <div className="notification-spinner">
              <div className="spinner-ring"></div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  const getProgressColor = (type) => {
    switch (type) {
      case 'success': return '#22c55e';
      case 'error': return '#ef4444';
      case 'warning': return '#f59e0b';
      case 'info': return '#3b82f6';
      case 'loading': return '#8b5cf6';
      default: return '#6b7280';
    }
  };

  return createPortal(
    <div className="notification-container" style={{ zIndex: 2147483647 }}>
      <AnimatePresence mode="popLayout">
        {notifications.map((notification) => (
          <motion.div
            key={notification.id}
            className={`notification notification-${notification.type}`}
            layout
            initial={{ 
              opacity: 0, 
              x: 400, 
              scale: 0.8,
              rotateY: 90
            }}
            animate={{ 
              opacity: 1, 
              x: 0, 
              scale: 1,
              rotateY: 0
            }}
            exit={{ 
              opacity: 0, 
              x: 400, 
              scale: 0.8,
              rotateY: -90,
              transition: { duration: 0.3 }
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30,
              mass: 0.8
            }}
            whileHover={{ 
              scale: 1.02,
              transition: { duration: 0.2 }
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragEnd={(event, info) => {
              if (info.offset.x > 150) {
                removeNotification(notification.id);
              }
            }}
          >
            <div className="notification-content">
              <div className="notification-header">
                <div className="notification-icon-wrapper">
                  {getIcon(notification.type)}
                </div>
                <div className="notification-text">
                  <div className="notification-title">
                    {notification.title}
                  </div>
                  {notification.message && (
                    <div className="notification-message">
                      {notification.message}
                    </div>
                  )}
                </div>
                {notification.type !== 'loading' && (
                  <motion.button
                    className="notification-close"
                    onClick={() => removeNotification(notification.id)}
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <svg viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </motion.button>
                )}
              </div>
              
              {notification.type !== 'loading' && notification.duration && (
                <motion.div
                  className="notification-progress"
                  initial={{ width: '100%' }}
                  animate={{ width: '0%' }}
                  transition={{ 
                    duration: notification.duration / 1000,
                    ease: 'linear'
                  }}
                  style={{
                    backgroundColor: getProgressColor(notification.type)
                  }}
                />
              )}
            </div>

            <div 
              className="notification-glow"
              style={{
                background: `radial-gradient(circle at center, ${getProgressColor(notification.type)}20 0%, transparent 70%)`
              }}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>,
    document.body
  );
};

export default NotificationSystem;
