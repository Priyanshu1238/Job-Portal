package com.jobportal.service;

import java.util.List;

import com.jobportal.dto.ApplicantDTO;
import com.jobportal.dto.Application;
import com.jobportal.dto.JobDTO;
import com.jobportal.exception.JobPortalException;

import jakarta.validation.Valid;

public interface JobService {

	public JobDTO postJob( JobDTO jobDTO) throws JobPortalException;

	public List<JobDTO> getAllJobs();

	public JobDTO getJob(Long id) throws JobPortalException;

	public void applyJob(Long id, ApplicantDTO applicantDTO) throws JobPortalException;

	public List<JobDTO> getJobPostedBy(Long id);

	public void changeApplication(Application application) throws JobPortalException;

	public JobDTO postJobwithId( JobDTO jobDTO) throws JobPortalException;

	
}
