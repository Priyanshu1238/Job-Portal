package com.jobportal.entity;

import java.time.LocalDateTime;
import java.util.List;

import com.jobportal.dto.JobDTO;
import com.jobportal.dto.JobStatus;

import jakarta.persistence.CascadeType;
import jakarta.persistence.CollectionTable;
import jakarta.persistence.Column;
import jakarta.persistence.ElementCollection;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name="jobs")
@Entity
public class Job {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String jobTitle;
	private String company;
	@ElementCollection
    @CollectionTable(name = "job_applicants", joinColumns = @JoinColumn(name = "job_id"))
    @Column(name = "applicants", length = 255)
//	 @OneToMany(mappedBy = "job", cascade = CascadeType.ALL, orphanRemoval = true)
	private List<Applicant> applicants;
	@Column(length = 1000)
	private String about;
	private String experience;
	private String jobType;
	private String location;
	private Long packageOffered;
	private LocalDateTime postTime;
	@Column(length = 1000)
	private String description;
	@ElementCollection
    @CollectionTable(name = "job_skillsRequired", joinColumns = @JoinColumn(name = "job_id"))
    @Column(name = "skillsRequired", length = 255)
	private List<String> skillsRequired;
	private JobStatus jobStatus;
	
	public JobDTO toDTO()
	{
		return new JobDTO(this.id,this.jobTitle,this.company,this.applicants!=null?this.applicants.stream().map(e->e.toDTO()).toList():null,this.about,this.experience,this.jobType,this.location,this.packageOffered,this.postTime,this.description,this.skillsRequired,this.jobStatus);
	}
}      



