import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material';

const MaterialsComponents = [
  MatButtonModule
];

@NgModule({
  imports: [MaterialsComponents],
  exports: [MaterialsComponents]
})
export class MaterialModule { }
