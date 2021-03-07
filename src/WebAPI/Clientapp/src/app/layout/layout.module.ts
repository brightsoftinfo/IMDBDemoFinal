import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SidenavbarComponent } from './sidenavbar/sidenavbar.component';
import { TopavbarComponent } from './topnavbar/topavbar.component';

@NgModule({
  declarations: [SidenavbarComponent, TopavbarComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [SidenavbarComponent, TopavbarComponent]
})
export class LayoutModule { }
