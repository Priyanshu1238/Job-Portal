package com.jobportal.utility;

import java.security.SecureRandom;

public class Utilities {

//	@Autowired
//	private UserRepository userRepository;
//	public static Long getextSequence(String key)
//	{
//		
//	}
	public static String generateOTP()
	{
		StringBuilder otp=new StringBuilder();
		SecureRandom random=new SecureRandom();
		for(int i=0;i<6;i++)
		{
			otp.append(random.nextInt(10));
			
		}
		return otp.toString();
	}
	
	
}
