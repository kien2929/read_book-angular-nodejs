import { UserService } from '../../service/user.service';
import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.css"]
})
export class UserComponent implements OnInit {
  @Input() id: number;
  @Input() name: string;
  @Input() rule: string;
  @Input() password: string;
  @Output() removePerson = new EventEmitter<number>();
  @Output() editPerson = new EventEmitter<number>();
  removeByClick() {
    this.removePerson.emit(this.id);
    this.userService.getUsers()
  }
  editByClick() {
    this.editPerson.emit(this.id);
  }
  constructor(private userService:UserService) {}

  ngOnInit() {}
}
