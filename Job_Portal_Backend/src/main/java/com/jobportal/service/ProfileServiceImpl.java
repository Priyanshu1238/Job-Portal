package com.jobportal.service;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.jobportal.dto.ProfileDTO;
import com.jobportal.entity.Profile;
import com.jobportal.exception.JobPortalException;
import com.jobportal.repository.ProfileRepository;

@Service("profileService")
public class ProfileServiceImpl implements ProfileService{

	@Autowired
	private ProfileRepository profileRepo;
	@Override
	public Long createProfile(String email) {
		// TODO Auto-generated method stub
		Profile profile=new Profile();
		profile.setEmail(email);
		profile.setSkills(new ArrayList<>());
		profile.setExperiences(new ArrayList<>());
		profile.setCertifications(new ArrayList<>());
		profileRepo.save(profile);
		return profile.getId();
	}
	@Override
	public ProfileDTO getProfile(Long id) throws JobPortalException {
		// TODO Auto-generated method stub
		return profileRepo.findById(id).orElseThrow(()->new JobPortalException("PROFILE_NOT_FOUND")).toDTO();
		
	}
	@Override
	public ProfileDTO updateProfile(ProfileDTO profileDTO) throws JobPortalException {
		// TODO Auto-generated method stub
		profileRepo.findById(profileDTO.getId()).orElseThrow(()->new JobPortalException("PROFILE_NOT_FOUND"));
		profileRepo.save(profileDTO.toEntity());
		
		return profileDTO;
	}
	

}
