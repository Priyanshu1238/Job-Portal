package com.jobportal.service;

import java.util.List;

import com.jobportal.dto.AccountType;
import com.jobportal.dto.ProfileDTO;
import com.jobportal.exception.JobPortalException;

public interface ProfileService {

	public Long createProfile(String email,String name,AccountType type);
	public ProfileDTO getProfile(Long id) throws JobPortalException;
	public ProfileDTO updateProfile(ProfileDTO profileDTO)throws JobPortalException;
	public List<ProfileDTO> getAllProfiles();
}
