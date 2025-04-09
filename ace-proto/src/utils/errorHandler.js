import toast from 'react-hot-toast';

/**
 * Centralized error handling utility
 * @param {Error} error - The error object
 * @param {string} context - Where the error occurred
 * @param {boolean} showToast - Whether to show a toast notification
 * @returns {string} - User-friendly error message
 */
export const handleError = (error, context = 'application', showToast = true) => {
  // Log error for debugging
  console.error(`Error in ${context}:`, error);
  
  // Determine user-friendly message
  let message = 'Something went wrong. Please try again later.';
  
  if (error.message) {
    if (error.message.includes('network') || error.message.includes('fetch')) {
      message = 'Network error. Please check your connection.';
    } else if (error.message.includes('not found')) {
      message = 'The requested resource was not found.';
    } else if (error.message.includes('permission')) {
      message = 'You do not have permission to perform this action.';
    }
  }
  
  // Show toast notification if requested
  if (showToast) {
    toast.error(message);
  }
  
  return message;
};

/**
 * Async error handler for use with try/catch
 * @param {Function} asyncFn - Async function to execute
 * @param {Object} options - Options for error handling
 * @returns {Promise} - Result of the async function or null on error
 */
export const withErrorHandling = async (asyncFn, options = {}) => {
  const { context = 'async operation', showToast = true, fallbackValue = null } = options;
  
  try {
    return await asyncFn();
  } catch (error) {
    handleError(error, context, showToast);
    return fallbackValue;
  }
};
