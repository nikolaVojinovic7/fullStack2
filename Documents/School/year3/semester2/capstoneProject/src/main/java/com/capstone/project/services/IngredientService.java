package com.capstone.project.services;

import com.capstone.project.model.Ingredient;
import org.springframework.stereotype.Service;

import java.util.Set;

@Service
public class IngredientService implements IngredientServiceAbs{
    @Override
    public Set<Ingredient> findAll() {
        return null;
    }

    @Override
    public Ingredient findById(Long aLong) {
        return null;
    }

    @Override
    public void delete(Ingredient object) {

    }

    @Override
    public void deleteById(Long aLong) {

    }
}
