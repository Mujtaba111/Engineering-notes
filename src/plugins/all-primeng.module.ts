import { NgModule } from '@angular/core';
import {MenubarModule} from 'primeng/menubar';
import {AccordionModule} from 'primeng/accordion';

import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import {InputTextModule} from 'primeng/inputtext';
import {StepsModule} from 'primeng/steps';
import {DropdownModule} from 'primeng/dropdown';
import {AutoCompleteModule} from 'primeng/autocomplete';
import {TooltipModule} from 'primeng/tooltip';
import {InputSwitchModule} from 'primeng/inputswitch';
import {ToolbarModule} from 'primeng/toolbar';

import {DialogModule} from 'primeng/dialog';
import {ProgressBarModule} from 'primeng/progressbar';
import {FileUploadModule} from 'primeng/fileupload';
import {RatingModule} from 'primeng/rating';
import {RadioButtonModule} from 'primeng/radiobutton';
import {InputNumberModule} from 'primeng/inputnumber';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { InputTextareaModule } from 'primeng/inputtextarea';

import {TableModule} from 'primeng/table';

import { AvatarModule } from "primeng/avatar";
import {ToastModule} from 'primeng/toast';
import {CalendarModule} from 'primeng/calendar';
import {SliderModule} from 'primeng/slider';
import {MultiSelectModule} from 'primeng/multiselect';
import {ContextMenuModule} from 'primeng/contextmenu';
import { MenuModule } from 'primeng/menu';
import { CardModule } from 'primeng/card';




export const allPrimengModulesVrbl = [MenuModule,CardModule,ToastModule,AvatarModule,CalendarModule,SliderModule,MultiSelectModule,ContextMenuModule,TableModule,InputTextareaModule,ConfirmDialogModule,InputNumberModule,RadioButtonModule,RatingModule,ProgressBarModule,DialogModule,FileUploadModule,ToolbarModule,InputSwitchModule, TooltipModule,AutoCompleteModule, DropdownModule, MenubarModule, AccordionModule,ButtonModule,RippleModule,InputTextModule,StepsModule];


@NgModule({
  declarations: [],
  imports: allPrimengModulesVrbl,
  exports: allPrimengModulesVrbl
})
export class AllPrimeNGModule { }
