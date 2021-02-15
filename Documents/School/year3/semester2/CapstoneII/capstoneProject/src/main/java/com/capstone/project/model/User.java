package com.capstone.project.model;

import javax.persistence.*;

@Entity
public class User {

    //properties
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @Column(nullable = false, name="username")
    private String username;

    @Column(nullable = false, name="password")
    private String password;

    //no arg constructor
    public User(){
    }

    //constructor
    public User(long id, String username, String password) {
        this.id = id;
        this.username = username;
        this.password = password;
    }

    //getters and setters
    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public void setId(long id) {
        this.id = id;
    }

    public long getId() {
        return id;
    }
}
