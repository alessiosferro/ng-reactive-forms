import { UserService } from './core/services/user.service';
import { Component, OnInit } from "@angular/core";
import { Observable } from 'rxjs';
import { User } from './core/model/user.interface';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { map } from 'rxjs/operators';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  form: FormGroup;
  usersForm$: Observable<FormGroup[]>
  users$: Observable<User[]>

  constructor(
    private User: UserService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.users$ = this.User.getUsers();

    this.form = this.fb.group({
      users: this.fb.array([])
    });

    const usersForm = this.getUsersForm();

    this.usersForm$ = usersForm
      .valueChanges.pipe(
        map(() => usersForm.controls as FormGroup[])
      );

    this.patchUsersForm();
  }

  patchUsersForm() {
    this.users$.subscribe(users => {
      const usersForm = this.getUsersForm();

      users.forEach(user => {
        const userForm =
          this.getUserForm(user);

        usersForm.push(userForm);
      });
    });
  }

  getUsersForm(): FormArray {
    return this.form.get('users') as FormArray;
  }

  getUserForm(user: User = null): FormGroup {
    if (user) {
      const {
        name,
        email,
        description,
        gender
      } = user;

      return this.fb.group({
        name,
        email,
        description,
        gender: gender.id
      });
    }

    return this.fb.group({
      name: null,
      email: null,
      description: null,
      gender: null
    });
  }
}
