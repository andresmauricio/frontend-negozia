import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UsersService } from 'src/app/core/users.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {
  public form: FormGroup;
  constructor(private build: FormBuilder, private userService: UsersService) {
    this.builderForm();
   }

  private builderForm(): void {
    this.form = this.build.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      phoneType: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      gender: ['', [Validators.required]],

    })
  }

  public sendData() {
    const isValid = this.form.valid;
    if (isValid) {
      Swal.showLoading();
      this.userService.saveUser(this.form.value).subscribe((response: any) => {
        Swal.close();
        Swal.fire({
          icon: 'success',
          allowOutsideClick: false,
          text: 'Usuario creado exitosamente'
        }).then(() => {
          this.form.reset();
        })
      }, error => { 
        Swal.close();
        Swal.fire({icon: 'error', text: 'El correo ya se encuentra en uso.'}) 
      });
    } else {
      this.form.markAllAsTouched();
    }
  }

  public isInvalid(control){
    return !this.form.controls[control].valid && (this.form.controls[control].dirty || this.form.controls[control].touched)
  }
  public isValid(control){
    return this.form.controls[control].valid
  }

  ngOnInit(): void {
  }

}
