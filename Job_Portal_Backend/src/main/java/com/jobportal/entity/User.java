package com.jobportal.entity;



import com.jobportal.dto.AccountType;
import com.jobportal.dto.UserDTO;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name="users")
public class User {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private long id;
	private String name;
	@Column(unique=true)
	private String email;
	private String password;
	private AccountType accountType;
	private Long profileId;
	
	public UserDTO toDTO()
	{
		return new UserDTO(this.id,this.name,this.email,this.password,this.accountType,this.profileId);
	}
}
