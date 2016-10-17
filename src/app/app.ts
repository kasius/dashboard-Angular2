import {Component} from '@angular/core';

@Component({
  selector   : 'app',
  styleUrls: ['./app.css'],
  templateUrl: './app.html',
})
export class AppComponent {
  changeItemMenu(position: number): void{
    var items = document.getElementsByClassName("sidebar-list-item");
    for (var _i = 0; _i < items.length; _i++) {
      var num = items[_i];
      if (num.classList.contains('active-li')) {
          num.classList.remove('active-li');
      }
    }
    items[position].classList.add('active-li');
  }
}
