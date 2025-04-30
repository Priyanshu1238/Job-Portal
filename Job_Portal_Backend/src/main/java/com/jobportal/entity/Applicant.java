
package com.jobportal.entity;

import java.time.LocalDateTime;
import java.util.Base64;

import com.jobportal.dto.ApplicantDTO;
import com.jobportal.dto.ApplicationStatus;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;
import jakarta.persistence.ManyToOne;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Embeddable
//@Entity
public class Applicant {

//	@Id
//	@GeneratedValue(strategy = GenerationType.IDENTITY)
//	private Long sNo;
	
	private Long applicantId;
//	@ManyToOne(fetch = FetchType.LAZY)
////    @JoinColumn(name = "job_id", insertable = false, updatable = false)
//	private Job job;
	
	private String name;
	private String email;
	private Long phone;
	private String website;
	@Lob
    @Column(name = "resume", columnDefinition = "LONGBLOB")
	private  byte[] resume;
	private String github;
	private String linkedIn;
	private String coverLetter;
	private LocalDateTime timestamp;
	private ApplicationStatus applicationStatus;
//	private Long jobid;
	
//	private Long job_id;
	
	
	
	
	
//	public Applicant(Long applicantId, String name, String email, Long phone, String website, byte[] resume,
//            String github, String linkedIn, String coverLetter, LocalDateTime timestamp,
//            ApplicationStatus applicationStatus) {
//this.applicantId = applicantId;
//this.name = name;
//this.email = email;
//this.phone = phone;
//this.website = website;
//this.resume = resume;
//this.github = github;
//this.linkedIn = linkedIn;
//this.coverLetter = coverLetter;
//this.timestamp = timestamp;
//this.applicationStatus = applicationStatus;
//
//
//}
	
	
	public ApplicantDTO toDTO() {
		return new ApplicantDTO(this.applicantId,this.name,this.email,this.phone,this.website,this.resume!=null?Base64.getEncoder().encodeToString(this.resume):null,this.github,this.linkedIn,this.coverLetter,this.timestamp,this.applicationStatus);
	}

//	public Applicant(Long applicantId, String name, String email, Long phone, String website, byte[] resume,
//			String github, String linkedIn, String coverLetter, LocalDateTime timestamp,
//			ApplicationStatus applicationStatus) {
//		super();
//		this.applicantId = applicantId;
//		this.name = name;
//		this.email = email;
//		this.phone = phone;
//		this.website = website;
//		this.resume = resume;
//		this.github = github;
//		this.linkedIn = linkedIn;
//		this.coverLetter = coverLetter;
//		this.timestamp = timestamp;
//		this.applicationStatus = applicationStatus;
//	}

//	public Applicant(Long jobid,Long applicantId, String name, String email, Long phone, String website, byte[] resume,
//			String github, String linkedIn, String coverLetter, LocalDateTime timestamp,
//			ApplicationStatus applicationStatus) {
//		super();
//		this.applicantId = applicantId;
//		this.name = name;
//		this.email = email;
//		this.phone = phone;
//		this.website = website;
//		this.resume = resume;
//		this.github = github;
//		this.linkedIn = linkedIn;
//		this.coverLetter = coverLetter;
//		this.timestamp = timestamp;
//		this.applicationStatus = applicationStatus;
//		
//	}
	
}