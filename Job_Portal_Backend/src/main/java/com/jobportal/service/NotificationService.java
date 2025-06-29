package com.jobportal.service;

import java.util.List;

import com.jobportal.dto.NotificationDTO;
import com.jobportal.entity.Notification;
import com.jobportal.exception.JobPortalException;

public interface NotificationService {

	public void sendNotification(NotificationDTO notificationDTO);
	public List<Notification> getUnreadNotifications(Long userId);
	public void readNotifications(Long id) throws JobPortalException;
}
