import Notification from '../models/Notification.js';

const getNotificationsByUser = async (req, res) => {
  try {
    const userId = req.params.userId;

    const notifications = await Notification.find({ $or: [{ recipient: userId }, { sender: userId }] });

    res.json(notifications);
  } catch (error) {
    console.error('Error fetching notifications:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export default {
  getNotificationsByUser,
};
