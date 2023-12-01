import { Component, Input, OnInit, OnChanges, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Pet } from '../pet';

@Component({
  selector: 'app-pet-form',
  templateUrl: './pet-form.component.html',
  styleUrls: ['./pet-form.component.css']
})
export class PetFormComponent implements OnInit {

  @Input() pet = new Pet();
  @Output() onSave = new EventEmitter<Pet>();
  public petForm = this.fb.group({
    name: ['', [Validators.required]],
    species: ['', [Validators.required]],
    note: ['', [Validators.required,]],
    birth:  ['', [Validators.required,]],
    death:  [''],
  });

  get name() {
    return this.petForm.get('name')!;
  }
  get species() {
    return this.petForm.get('species')!;
  }
  get note() {
    return this.petForm.get('note')!;
  }
  get birth() {
    return this.petForm.get('birth')!;
  }
  get death() {
    return this.petForm.get('death')!;
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void { }

  ngOnChanges(): void {
    this.petForm.patchValue(this.pet);
  }
  handleSubmit() {
    this.onSave.emit(this.petForm.value);
  }
}