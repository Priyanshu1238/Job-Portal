

package com.jobportal.dto;

import java.time.LocalDateTime;
import java.util.List;

import com.jobportal.dto.ApplicantDTO;
import com.jobportal.entity.Job;

import jakarta.persistence.CollectionTable;
import jakarta.persistence.Column;
import jakarta.persistence.ElementCollection;
import jakarta.persistence.JoinColumn;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class JobDTO {

	private Long id;
	private String jobTitle;
	private String company;
	private List<ApplicantDTO> applicants;
	private String about;
	private String experience;
	private String jobType;
	private String location;
	private Long packageOffered;
	private LocalDateTime postTime;
	private String description;
	private List<String> skillsRequired;
	private JobStatus jobStatus;
	private Long postedBy;
	
	public Job toEntity()
	{
		return new Job(this.id,this.jobTitle,this.company,this.applicants!=null?this.applicants.stream().map(e->e.toEntity()).toList():null,this.about,this.experience,this.jobType,this.location,this.packageOffered,this.postTime,this.description,this.skillsRequired,this.jobStatus,this.postedBy);
	}
}


