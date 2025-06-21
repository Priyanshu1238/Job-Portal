package com.jobportal.entity;

import java.time.LocalDateTime;

import com.jobportal.dto.NotificationDTO;
import com.jobportal.dto.NotificationStatus;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name="Notification")
@Entity
public class Notification {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private Long userId;
	private String message;
	private String action;
	private String route;
	private LocalDateTime timeStamp;
	@Enumerated(EnumType.STRING)
	@Column(name = "notification_status")
	private NotificationStatus status;
	public NotificationDTO toDTO()
	{
		return new NotificationDTO(this.id,this.userId,this.message,this.action,this.route,this.timeStamp,this.status);
	}
	
}
