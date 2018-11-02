import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";
import { Recipe } from "../../recipe.model";

@Component({
  selector: "app-recipe-item",
  templateUrl: "./recipe-item.component.html",
  styleUrls: ["./recipe-item.component.css"]
})
export class RecipeItemComponent implements OnInit {
  @Input()
  recipe: Recipe; //@input() allows this component property to be binded from outside
  @Output()
  recipeSelected = new EventEmitter<void>(); //void becuase this will contain no info
  ngOnInit() {}

  onSelected() {
    this.recipeSelected.emit();
  }
}
