import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, IonicModule],
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  registroForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.registroForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      telefono: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      fechaNacimiento: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.registroForm.valid) {
      alert('Registro exitoso ✅');
      this.registroForm.reset();
    }
  }

  get nombre() { return this.registroForm.get('nombre'); }
  get telefono() { return this.registroForm.get('telefono'); }
  get fechaNacimiento() { return this.registroForm.get('fechaNacimiento'); }
}
