package com.capstone.project.services;

import com.capstone.project.model.Ingredient;
import com.capstone.project.model.User;


public interface IngredientServiceAbs extends CrudService<Ingredient, Long>{
    Ingredient findByName(String name);
    Ingredient save(Ingredient ingredient);
}
