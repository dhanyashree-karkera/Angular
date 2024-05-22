import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { FileUploadEvent } from 'primeng/fileupload';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrl: './email.component.css'
})
export class EmailComponent {
onUpload($event: FileUploadEvent) {
throw new Error('Method not implemented.');
}
  toEmail: string = '';
  ccEmail: string = '';
  subject: string = '';
  body: string = '';
  attachment: File | null = null;
  toEmails: string[] = [];

  constructor() { }

  save() {
    // Implement saving logic here
    if (this.toEmails.length === 0) {
      console.error('please complete the field');
      return;
    }
}
cancel() {
  // Implement canceling logic here
  console.log('Email canceled');
}

onFileSelected(event: any) {
  this.attachment = event.target.files[0];
}

}