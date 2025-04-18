package com.jobportal.service;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.jobportal.dto.JobDTO;
import com.jobportal.exception.JobPortalException;
import com.jobportal.repository.JobRepository;

@Service("jobService")
public class JobServiceImpl implements JobService {

	@Autowired
	private JobRepository jobRepo;

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
}
