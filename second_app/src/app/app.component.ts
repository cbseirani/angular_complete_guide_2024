import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { UserComponent } from "./user/user.component";
import { TasksComponent } from './tasks/tasks.component';
import { DUMMY_USERS } from './dummy-users';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = DUMMY_USERS;
  selectedUser = DUMMY_USERS[0];

  onSelectUser(id: string){
    console.log('selected user: ' + id);
    var user = DUMMY_USERS.find(user => user.id === id);
    if(user){
      this.selectedUser = user;
    }
    else{
      console.log('User not found!');
    }
  }
}
