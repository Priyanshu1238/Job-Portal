package com.jobportal.dto;

import java.time.LocalDateTime;

import jakarta.persistence.Embeddable;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Embeddable
public class Applicant {

	private Long applicantId;
	private LocalDateTime timestamp;
	private ApplicationStatus applicationStatus;
	
}
