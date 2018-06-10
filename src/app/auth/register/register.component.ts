import { Component, OnInit } from "@angular/core";;
import { RegisterModel } from "@app/auth/model/register-model";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent implements OnInit {

  public registerModel: RegisterModel = new RegisterModel();

  constructor() { }

  ngOnInit() {
  }

  register() {
    // this.accountService.register(this.registerModel);
  }
}
