import { Component } from '@angular/core';
import { OnInit} from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import {startWith,map} from 'rxjs/operators';
import { LoginComponent } from './login/login.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'CMS';
  notificationCount = 12;
  opened = true;
  selectedValue :string ="";
  options: string[] = ['Angular','react','view']
  objectOption = [
    {name : 'Angular'},
    {name : 'React'},
    {name : 'Vue'},
    {name : 'Bootstrap'}
  ]
  myControl = new FormControl();
  filteredOption : Observable<string[]> =  new Observable<string[]>();


  constructor(private snackBar:MatSnackBar,private dialog:MatDialog){}
  ngOnInit(){
   this.filteredOption  = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    )
this.reload();
  }

private _filter(value:string): string[]{
  const filterValue = value.toLowerCase();
  return this.options.filter(value => value.toLowerCase().includes(filterValue))
}
   reload(): any{
  }
  tabChange(index:any){
    console.log(index)
  }
  displayFn(subject:any){
    return subject?subject.name:undefined;
  }
  openSnackBar(value:any,action: any){
    let snackBarRef = this.snackBar.open(value,action,{duration:2000});
    snackBarRef.afterDismissed().subscribe(() =>{
      console.log("This snack bar was dismissed.")
    })
    snackBarRef.onAction().subscribe(() =>{
      console.log("The snack bar actiono was triggered")
    })

  }
  openDialog(){
    let dialogRef = this.dialog.open(LoginComponent, {data:{name: 'Bibhuti'}})
    dialogRef.afterClosed().subscribe(result =>{
      console.log(`Dialog result : ${result}`)
    })
  }

}
