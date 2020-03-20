import { NgModule } from "@angular/core";

import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { UserProfileComponent } from "./components/user-profile/user-profile.component";
import { CommonModule } from "@angular/common";

const components = [UserProfileComponent];

const modules = [CommonModule, FormsModule, ReactiveFormsModule];

@NgModule({
  declarations: [...components],
  imports: [...modules],
  exports: [...components]
})
export class SharedModule {}
