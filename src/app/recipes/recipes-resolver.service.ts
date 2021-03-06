import { Injectable } from "@angular/core";
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from "@angular/router";
import { DataStorageService } from "../shared/data-storage.service";
import { Recipes } from "./recipes.model";
import { RecipesService } from "./recipes.service";

@Injectable({ providedIn: "root" })
export class RecipesResolverService implements Resolve<Recipes[]> {
  constructor(
    private dataStorageService: DataStorageService,
    private recipesService: RecipesService
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const recipes = this.recipesService.getRecipes();

    if (recipes.length === 0) {
      return this.dataStorageService.fetchRecipe();
    } else {
      return recipes;
    }
  }
}
