import { AuthService } from './../../auth/auth.service';
import { DataStorageService } from './../../shared/data-storage.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Response } from '@angular/http'; 
import 'rxjs';
 
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private dataStorage: DataStorageService,
              private authService: AuthService){}

  onSaveData(){
    this.dataStorage.storeRecipes()
      .subscribe(
        (response: Response) => {
          console.log(response);
        }
      );
  }

  onGetData(){
    this.dataStorage.getRecipes();
  }
  onLogout(){
    this.authService.logout();
  }


}
