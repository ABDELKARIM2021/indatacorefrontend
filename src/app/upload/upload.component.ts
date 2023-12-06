import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent {



    selectedFile: File | null = null;
  
    constructor(private http: HttpClient,public authService: AuthService) {}
  
    onFileSelected(event: any) {
      this.selectedFile = event.target.files[0] as File;
    }
  
    onSubmit() {
      if (this.selectedFile) {
        const formData = new FormData();
        formData.append('file', this.selectedFile);
  
        // Replace 'YOUR_BACKEND_API_URL' with the actual URL of your backend endpoint
        this.http.post('http://localhost:8080/objects', formData,{ responseType: 'text' })
          .subscribe(response => {
            alert('fichier uplooadé avec succées');
            console.log('File uploaded successfully:', response);
            // Handle success
          }, error => {
            console.error('Error uploading file:', error);
            
        if (error instanceof HttpErrorResponse) {
          console.error('Server error status:', error.status);
          console.error('Server error body:', error.error);
        }
          });
      }
    }
  }
  



