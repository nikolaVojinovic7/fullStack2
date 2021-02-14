package com.capstone.project.model;

import javax.persistence.*;

@Entity
public class Recipe {

    //properties
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @Column(nullable = false, name="name")
    private String name;

    @Column(nullable = false, name="password")
    private String password;

    public Recipe(long id, String name, String password) {
        this.id = id;
        this.name = name;
        this.password = password;
    }

    public Recipe() {

    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
