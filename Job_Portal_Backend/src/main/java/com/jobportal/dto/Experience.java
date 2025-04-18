package com.jobportal.dto;

import java.time.LocalDateTime;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Embeddable
public class Experience {

	private String title;
	private String company;
	private String location;
	private LocalDateTime startDate;
	private LocalDateTime endDate;
	private Boolean working;
	@Column(length=1000)
	private String description;
}
