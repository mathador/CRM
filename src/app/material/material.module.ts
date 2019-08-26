import { NgModule } from '@angular/core';
import { MatButtonModule, MatButtonToggleModule, MatProgressSpinnerModule } from '@angular/material';

const MaterialsComponents = [
  MatButtonModule,
  MatButtonToggleModule,
  MatProgressSpinnerModule
];

@NgModule({
  imports: [MaterialsComponents],
  exports: [MaterialsComponents]
})
export class MaterialModule { }
