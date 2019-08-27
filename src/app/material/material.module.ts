import { NgModule } from '@angular/core';
import { MatButtonModule, MatButtonToggleModule, MatProgressSpinnerModule, MatToolbarModule } from '@angular/material';

const MaterialsComponents = [
  MatButtonModule,
  MatButtonToggleModule,
  MatProgressSpinnerModule,
  MatToolbarModule
];

@NgModule({
  imports: [MaterialsComponents],
  exports: [MaterialsComponents]
})
export class MaterialModule { }
