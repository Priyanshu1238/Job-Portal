package com.jobportal.entity;

import java.util.Base64;
import java.util.List;

import com.jobportal.dto.AccountType;
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
import jakarta.persistence.Lob;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "profiles")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Profile {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private String email;
    private String name;
    private String jobTitle;
    private String company;
    private String location;

    @Column(length = 1000)
    private String about;
    @Lob
    @Column(name = "picture", columnDefinition = "LONGBLOB")
    private byte[] picture;
    

    private Long totalExp;
    @ElementCollection
    @CollectionTable(name = "profile_skills", joinColumns = @JoinColumn(name = "profile_id"))
    @Column(name = "skill", length = 255)
    private List<String> skills;

    @ElementCollection
    @CollectionTable(name = "profile_experiences", joinColumns = @JoinColumn(name = "profile_id"))
    @Column(name = "experience", length = 1000)
    private List<Experience> experiences;

    @ElementCollection
    @CollectionTable(name = "profile_certifications", joinColumns = @JoinColumn(name = "profile_id"))
    @Column(name = "certification", length = 255)
    private List<Certification> certifications;

    @ElementCollection
    @CollectionTable(name = "profile_savedJobs", joinColumns = @JoinColumn(name = "profile_id"))
    @Column(name = "savedJobs", length = 255)
    private List<Long>savedJobs;
    private AccountType accountType;
    public ProfileDTO toDTO() {
        return new ProfileDTO(this.id, this.name,this.email, this.jobTitle, this.company, this.location, this.about,this.picture!=null?Base64.getEncoder().encodeToString(this.picture):null,this.totalExp, this.skills, this.experiences, this.certifications,this.savedJobs,this.accountType);
    }
}
