package com.jobportal.dto;

import java.time.LocalDateTime;

import com.jobportal.entity.Notification;

import jakarta.persistence.Column;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class NotificationDTO {

	private Long id;
	private Long userId;
	private String message;
	private String action;
	private String route;
	private LocalDateTime timeStamp;
	@Enumerated(EnumType.STRING)
	@Column(name = "notification_status")
	private NotificationStatus status;
	
	public Notification toEntity()
	{
		return new Notification(this.id,this.userId,this.message,this.action,this.route,this.timeStamp,this.status);
	}
}
