package com.jobportal.dto;

import java.time.LocalDate;
import java.time.LocalDateTime;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Application {

	private Long id;
	private Long applicantId;
	private LocalDateTime interviewTime;
	private ApplicationStatus applicationStatus;
}
