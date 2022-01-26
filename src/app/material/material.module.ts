import { NgModule } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';


const Material = [
  MatGridListModule
]

@NgModule({
  imports: [Material],
  exports:[Material]
})
export class MaterialModule { }
