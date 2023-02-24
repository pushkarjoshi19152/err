import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SampleComponent } from './sample.component';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [SampleComponent],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild([{
      path: '',
      component: SampleComponent
    }])
  ],
  // exports: [
  //   SampleComponent
  // ]
})
export class SampleModule { }
