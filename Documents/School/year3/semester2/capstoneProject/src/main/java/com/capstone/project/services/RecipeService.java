package com.capstone.project.services;

import com.capstone.project.model.Recipe;
import org.springframework.stereotype.Service;

import java.util.Set;

@Service
public class RecipeService implements RecipeServiceAbs{
    @Override
    public Set<Recipe> findAll() {
        return null;
    }

    @Override
    public Recipe findById(Long aLong) {
        return null;
    }

    @Override
    public void delete(Recipe object) {

    }

    @Override
    public void deleteById(Long aLong) {

    }
}
