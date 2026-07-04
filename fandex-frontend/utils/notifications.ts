import * as Notifications from 'expo-notifications';

export const scheduleNotification = async (content: Notifications.NotificationContentInput, trigger: Notifications.NotificationTriggerInput) => {
  await Notifications.scheduleNotificationAsync({
    content,
    trigger,
  });
};
