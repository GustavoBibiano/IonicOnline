import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab3PageRoutingModule } from './tab3-routing.module';
import { PesoIdealTab } from './tab3.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    Tab3PageRoutingModule,
  ],
  declarations: [PesoIdealTab]
})
export class Tab3PageModule {}
