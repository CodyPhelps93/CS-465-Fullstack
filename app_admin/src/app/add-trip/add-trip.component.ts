import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms"
import { Router } from '@angular/router';
import { TripDataService } from '../services/trip-data.service';


@Component({
  selector: 'app-add-trip',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-trip.component.html',
  styleUrl: './add-trip.component.css'
})

export class AddTripComponent implements OnInit {
 public addForm!: FormGroup;
  submitted = false;

  constructor(
    private FormBuilder: FormBuilder,
    private router: Router,
    private TripService: TripDataService
  ){}

  ngOnInit(): void {
      this.addForm= this.FormBuilder.group({
        _id: [],
        code: ['', Validators.required],
        name: ['', Validators.required],
        length: ['', Validators.required],
        start: ['', Validators.required],
        resort: ['', Validators.required],
        perPerson: ['', Validators.required],
        image: ['', Validators.required],
        description: ['', Validators.required],
      })
  }
  
  public onSubmit() {
    this.submitted = true;
    if(this.addForm.valid){
      this.TripService.addTrip(this.addForm.value)
      .subscribe( {
        next: (data:any) => {
          console.log(data);
          this.router.navigate(['']);
        },
        error: (error: any) => {
          console.log('Error: ' + error);
        }});
    }
  }
  // get the form short name to access the form fields
  get f() {return this.addForm.controls;}
}
