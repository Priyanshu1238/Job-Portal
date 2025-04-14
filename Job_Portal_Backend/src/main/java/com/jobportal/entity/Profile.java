package com.jobportal.entity;

import java.util.List;

import com.jobportal.dto.Certification;
import com.jobportal.dto.Experience;
import com.jobportal.dto.ProfileDTO;

import jakarta.persistence.CollectionTable;
import jakarta.persistence.Column;
import jakarta.persistence.ElementCollection;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Entity
@Table(name="profiles")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Profile {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private long id;
	private String email;
	private String jobTitle;
	private String company;
	private String location;
	@Column(length = 1000)
	private String about;
	 @ElementCollection
	    @CollectionTable(name = "profile_skills", joinColumns = @JoinColumn(name = "profile_id"))
	    @Column(name = "skill", length = 255)
	private List<String> skills;
	@ElementCollection
	private List<Experience> experiences;
	@ElementCollection
	private List<Certification> certifications;
	public ProfileDTO toDTO()
	{
		return new ProfileDTO(this.id,this.email,this.jobTitle,this.company,this.location,this.about,this.skills,this.experiences,this.certifications);
	}
	
	
}
