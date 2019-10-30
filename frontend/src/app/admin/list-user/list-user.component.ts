import { Component, OnInit } from "@angular/core";
import { UserService } from "../../service/user.service";

@Component({
  selector: "app-list-user",
  templateUrl: "./list-user.component.html",
  styleUrls: ["./list-user.component.css"]
})
export class ListUserComponent implements OnInit {
  name = "";
  password = "";
  rule = "";
  role;
  id;
  feedbackname = "";
  feedbackrule = "";
  feedbackpassword = "";
  arrPerson;
  user;
  searchKey;
  restore() {
    console.log(this.searchKey);

    this.userService.search("%" + this.searchKey + "%").subscribe((data) => {
      this.arrPerson = data;
    });
  }
  addPerson() {
    if (this.id) {
      this.user = { name: this.name, rule: this.rule, password: this.password };
      this.userService.editUser(this.id, this.user).subscribe((res) => {
        this.userService.getUsers().subscribe((data) => {
          this.arrPerson = data;
          this.id = 0;
          this.name = "";
          this.password = "";
          this.rule = "";
        });
      });
    } else {
      if (this.rule == "" || this.name == "" || this.password == "") {
        console.log("1");
        if (this.rule == "") {
          this.feedbackrule = "Please choose here";
        }
        if (this.name == "") {
          this.feedbackname = "Please insert here";
        }
        if (this.password == "") {
          this.feedbackpassword = "Please insert here";
        }
      } else {
        //add
        this.feedbackpassword = "";
        this.feedbackrule = "";
        this.feedbackname = "";
        this.user = {
          name: this.name,
          rule: this.rule,
          password: this.password
        };
        console.log(this.user);
        this.userService.addUser(this.user).subscribe((data) => {
          this.userService.getUsers().subscribe((data) => {
            this.arrPerson = data;
          });
        });
        this.name = "";
        this.password = "";
        this.rule = "";
      }
    }
  }
  removePersonByName(id: number) {
    this.userService.removeUser(id).subscribe((res) => {
      this.userService.getUsers().subscribe((data) => {
        this.arrPerson = data;
      });
    });
  }
  editPersonById(id: number) {
    this.user = { name: this.name, rule: this.rule, password: this.password };
    this.userService.getUserById(id).subscribe((data) => {
      this.name = data[0].name;
      this.rule = data[0].rule;
      this.password = data[0].password;
      this.id = data[0].id;
    });
  }
  searchUser() {
    
  }
  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.getUsers().subscribe((data) => {
    
      this.arrPerson = data;
    });
  }
}
