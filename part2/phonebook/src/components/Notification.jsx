import PropTypes from 'prop-types';

function Notification({ message }) {
  if (message === null) return null;

  return (
    <div className={`message ${message.isError ? 'error' : ''}`}>
      {message.content}
    </div>
  );
}

// An ugly way to know if the notification is an error
Notification.propTypes = {
  message: PropTypes.shape({
    content: PropTypes.string.isRequired,
    isError: PropTypes.bool,
  }),
};

export default Notification;
