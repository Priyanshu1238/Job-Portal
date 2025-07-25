package com.jobportal.service;

import com.jobportal.dto.LoginDTO;
import com.jobportal.dto.ResponseDTO;
import com.jobportal.dto.UserDTO;
import com.jobportal.exception.JobPortalException;

import jakarta.validation.Valid;

public interface UserService {

	public UserDTO registerUser(UserDTO UserDTO) throws Exception;

	public UserDTO loginUser( LoginDTO loginDTO) throws JobPortalException;

	public Boolean sendOtp(String email) throws Exception ;

	public Boolean verifyOtp(String email,String otp) throws JobPortalException;

	public ResponseDTO changePassword(LoginDTO loginDTO) throws JobPortalException;
	
	public UserDTO getUserByEmail(String email) throws JobPortalException;
	
	
}
