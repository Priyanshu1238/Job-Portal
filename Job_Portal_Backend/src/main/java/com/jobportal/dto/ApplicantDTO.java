package com.jobportal.dto;

import java.time.LocalDateTime;
import java.util.Base64;

import com.jobportal.entity.Applicant;
import com.jobportal.entity.Job;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
//@Embeddable
public class ApplicantDTO {

	
	private Long applicantId;
	private String name;
	private String email;
	private Long phone;
	private String website;
	private String resume;
	private String github;
	private String linkedIn;
	private String coverLetter;
	private LocalDateTime timestamp;
	private ApplicationStatus applicationStatus;
//	private Long job_id;
	public Applicant toEntity() {
		// TODO Auto-generated method stub
		return new Applicant(this.applicantId,this.name,this.email,this.phone,this.website,this.resume!=null?Base64.getDecoder().decode(this.resume):null,this.github,this.linkedIn,this.coverLetter,this.timestamp,this.applicationStatus);
	}
//	public applicantdto(long applicantid, string name, string email, long phone, string website, string resume,
//			string github, string linkedin, string coverletter, localdatetime timestamp,
//			applicationstatus applicationstatus) {
//		super();
//		this.applicantid = applicantid;
//		this.name = name;
//		this.email = email;
//		this.phone = phone;
//		this.website = website;
//		this.resume = resume;
//		this.github = github;
//		this.linkedin = linkedin;
//		this.coverletter = coverletter;
//		this.timestamp = timestamp;
//		this.applicationstatus = applicationstatus;
//	}
//	
}



