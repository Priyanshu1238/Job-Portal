package com.jobportal.service;

import com.jobportal.dto.LoginDTO;
import com.jobportal.dto.UserDTO;
import com.jobportal.exception.JobPortalException;

public interface UserService {

	public UserDTO registerUser(UserDTO UserDTO) throws Exception;

	public UserDTO loginUser( LoginDTO loginDTO) throws JobPortalException;
}
