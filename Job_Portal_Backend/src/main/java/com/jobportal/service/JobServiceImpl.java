package com.jobportal.service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.jobportal.dto.ApplicantDTO;
import com.jobportal.dto.Application;
import com.jobportal.dto.ApplicationStatus;
import com.jobportal.dto.JobDTO;
import com.jobportal.entity.Applicant;
import com.jobportal.entity.Job;
import com.jobportal.exception.JobPortalException;
//import com.jobportal.repository.ApplicantRepository;
//import com.jobportal.repository.ApplicantRepository;
import com.jobportal.repository.JobRepository;

@Service("jobService")
public class JobServiceImpl implements JobService {

	@Autowired
	private JobRepository jobRepo;
	
//	@Autowired
//	private ApplicantRepository applicantRepo;
	

	@Override
	public JobDTO postJob(JobDTO jobDTO) throws JobPortalException{
		// TODO Auto-generated method stub
		jobDTO.setPostTime(LocalDateTime.now());
		
		return jobRepo.save(jobDTO.toEntity()).toDTO();
	}

	@Override
	public List<JobDTO> getAllJobs() {
		// TODO Auto-generated method stub
		return jobRepo.findAll().stream().map(x->x.toDTO()).toList();
	}

	@Override
	public JobDTO getJob(Long id) throws JobPortalException {
		// TODO Auto-generated method stub
		return jobRepo.findById(id).orElseThrow(()->new JobPortalException("JOB_NOT_FOUND")).toDTO();
	}

	@Override
	public void applyJob(Long id, ApplicantDTO applicantDTO) throws JobPortalException {
		// TODO Auto-generated method stub
		
		Job job=jobRepo.findById(id).orElseThrow(()->new JobPortalException("JOB_NOT_FOUND"));
		
		List<Applicant> applicant=job.getApplicants();
		
		if(applicant==null) applicant= new ArrayList<>();
		if(applicant.stream().filter(x->x.getApplicantId()==applicantDTO.getApplicantId()).toList().size()>0) throw new JobPortalException("JOB_ALREADY_APPLIED");
		applicantDTO.setApplicationStatus(ApplicationStatus.APPLIED);

		applicant.add(applicantDTO.toEntity());
		job.setApplicants(applicant);
////	System.out.println(job);
    	jobRepo.save(job);
		
		
		
		
		
		
		
	}

	@Override
	public List<JobDTO> getJobPostedBy(Long id) {
		// TODO Auto-generated method stub
		return jobRepo.findByPostedBy(id).stream().map(x->x.toDTO()).toList();
	}

	@Override
	public void changeApplication(Application application) throws JobPortalException {
		// TODO Auto-generated method stub
Job job=jobRepo.findById(application.getId()).orElseThrow(()->new JobPortalException("JOB_NOT_FOUND"));
		
		List<Applicant> applicant=job.getApplicants().stream().map((x)->{
			if(application.getApplicantId()==x.getApplicantId())
			{
				x.setApplicationStatus(application.getApplicationStatus());
				if(application.getApplicationStatus().equals(ApplicationStatus.INTERVIEWING))x.setInterviewTime(application.getInterviewTime());
			}
			return x;
		}).collect(Collectors.toList());
		job.setApplicants(applicant);
		jobRepo.save(job);
		
		
	}
}
