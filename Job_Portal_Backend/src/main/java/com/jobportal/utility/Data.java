package com.jobportal.utility;

public class Data {

	public static String getMessageBody(String OTP,String name)
	{
	return "<!DOCTYPE html>\n" +
				"<html>\n" +
				"<head>\n" +
				"  <meta charset=\\\"UTF-8\\\">\n" +
				"  <title>Your OTP Code</title>\n" +
				"  <style>\n" +
				"    body {\n" +
				"      font-family: Arial, sans-serif;\n" +
				"      background-color: #f4f4f4;\n" +
				"      margin: 0;\n" +
				"      padding: 0;\n" +
				"    }\n" +
				"    .container {\n" +
				"      max-width: 600px;\n" +
				"      margin: 40px auto;\n" +
				"      background-color: #ffffff;\n" +
				"      padding: 30px;\n" +
				"      border-radius: 8px;\n" +
				"      box-shadow: 0 2px 8px rgba(0,0,0,0.1);\n" +
				"    }\n" +
				"    .otp-code {\n" +
				"      font-size: 32px;\n" +
				"      font-weight: bold;\n" +
				"      color: #2b2b2b;\n" +
				"      letter-spacing: 4px;\n" +
				"      text-align: center;\n" +
				"      margin: 30px 0;\n" +
				"    }\n" +
				"    .footer {\n" +
				"      text-align: center;\n" +
				"      font-size: 12px;\n" +
				"      color: #888888;\n" +
				"      margin-top: 20px;\n" +
				"    }\n" +
				"  </style>\n" +
				"</head>\n" +
				"<body>\n" +
				"  <div class=\\\"container\\\">\n" +
				"    <h2>Hello "+name+",</h2>\n" +
				"    <p>Here is your one-time password (OTP). Use it to proceed with your verification:</p>\n" +
				"    <div class=\\\"otp-code\\\">"+ OTP +"</div>\n" +  // Replace 123456 dynamically
				"    <p>This OTP is valid for the next 10 minutes. Please do not share it with anyone.</p>\n" +
				"    <p>If you did not request this, please ignore this email or contact support.</p>\n" +
				"    <div class=\\\"footer\\\">\n" +
				"      &copy; 2025 Job~Matcher. All rights reserved.\n" +
				"    </div>\n" +
				"  </div>\n" +
				"</body>\n" +
				"</html>";


	}
}
