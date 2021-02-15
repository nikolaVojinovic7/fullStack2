package com.capstone.project.services;

import com.capstone.project.model.User;

public interface UserServiceAbs extends CrudService<User, Long>{
    User findByUsername(String username);
    User save(User user);
    User saveAdmin(User user);
    Boolean verifyLogin(String username, String password);
}
