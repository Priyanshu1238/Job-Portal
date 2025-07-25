package com.jobportal.api;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.jobportal.dto.ApplicantDTO;
import com.jobportal.dto.Application;
import com.jobportal.dto.JobDTO;
import com.jobportal.dto.ResponseDTO;
import com.jobportal.exception.JobPortalException;
import com.jobportal.service.JobService;

import jakarta.validation.Valid;

@RestController
@CrossOrigin
@Validated
@RequestMapping("/jobs")
public class JobAPI {
	@Autowired
	private JobService jobService;
	
	@PostMapping("/post")
	public ResponseEntity<JobDTO> postJob(@RequestBody @Valid JobDTO jobDTO) throws Exception
	{
		return new ResponseEntity<>(jobService.postJob(jobDTO),HttpStatus.CREATED);
		
	}
	@PostMapping("/postwithid")
	public ResponseEntity<JobDTO> postJobWithid(@RequestBody @Valid JobDTO jobDTO) throws Exception
	{
		return new ResponseEntity<>(jobService.postJobwithId(jobDTO),HttpStatus.CREATED);
		
	}
	
	@GetMapping("/getall")
	public ResponseEntity<List<JobDTO>> getAllJobs() throws JobPortalException
	{
		return new ResponseEntity<>(jobService.getAllJobs(),HttpStatus.OK);
	}
	@GetMapping("/get/{id}")
	public ResponseEntity<JobDTO> getJob(@PathVariable Long id) throws JobPortalException
	{
		return new ResponseEntity<>(jobService.getJob(id),HttpStatus.OK);
	}
	@PostMapping("/apply/{id}")
	public ResponseEntity<ResponseDTO> applyJob(@PathVariable Long id, @RequestBody ApplicantDTO applicantDTO ) throws Exception
	{
		jobService.applyJob(id,applicantDTO);
		return new ResponseEntity<>(new ResponseDTO("Applied successfully"),HttpStatus.OK);
		
	}
	
	@GetMapping("/postedby/{id}")
	public ResponseEntity<List<JobDTO>> getJobPostedBy(@PathVariable Long id) throws JobPortalException
	{
		return new ResponseEntity<>(jobService.getJobPostedBy(id),HttpStatus.OK);
	}
	@PostMapping("/changeAppStatus")
	public ResponseEntity<ResponseDTO> changeAppStatus( @RequestBody Application application ) throws Exception
	{
		jobService.changeApplication(application);
		return new ResponseEntity<>(new ResponseDTO("Application changed sucessfully"),HttpStatus.OK);
		
	}

}
