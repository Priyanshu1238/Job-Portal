package com.jobportal.service;

import com.jobportal.dto.ProfileDTO;
import com.jobportal.exception.JobPortalException;

public interface ProfileService {

	public Long createProfile(String email);
	public ProfileDTO getProfile(Long id) throws JobPortalException;
	public ProfileDTO updateProfile(ProfileDTO profileDTO)throws JobPortalException;
}
