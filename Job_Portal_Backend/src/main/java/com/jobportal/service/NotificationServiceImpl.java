package com.jobportal.service;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.jobportal.dto.NotificationDTO;
import com.jobportal.dto.NotificationStatus;
import com.jobportal.entity.Notification;
import com.jobportal.exception.JobPortalException;
import com.jobportal.repository.NotificationRepository;

@Service("notificationService")

public class NotificationServiceImpl implements NotificationService {

	@Autowired
	private NotificationRepository notificationRepo;

	@Override
	public void sendNotification(NotificationDTO notificationDTO) {
		// TODO Auto-generated method stub
	
		notificationDTO.setTimeStamp(LocalDateTime.now());
		notificationDTO.setStatus(NotificationStatus.UNREAD);
		notificationRepo.save(notificationDTO.toEntity());
		
		
	}

	@Override
	public List<Notification> getUnreadNotifications(Long userId) {
		// TODO Auto-generated method stub
		
		return notificationRepo.findByUserIdAndStatus(userId, NotificationStatus.UNREAD);
	}

	@Override
	public void readNotifications(Long id) throws JobPortalException {
		// TODO Auto-generated method stub
		Notification notificationObj=notificationRepo.findById(id).orElseThrow(()->new JobPortalException("No notification found"));
		notificationObj.setStatus(NotificationStatus.READ);
		notificationRepo.save(notificationObj);
		
	}
}
