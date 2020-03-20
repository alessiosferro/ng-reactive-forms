import { StaticDataService } from './../../../core/services/static-data.service';
import { Component, OnInit, Input } from '@angular/core';
import { Gender } from 'src/app/core/model/gender.interface';
import { Observable } from 'rxjs';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  @Input()
  userForm: FormGroup;

  genders$: Observable<Gender[]>

  constructor(
    private StaticData: StaticDataService
  ) { }

  ngOnInit() {
    this.genders$ = this.StaticData.getGender();

    console.log(this.userForm.value);
  }

}
