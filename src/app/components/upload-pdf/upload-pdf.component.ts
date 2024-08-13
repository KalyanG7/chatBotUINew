import { Component } from "@angular/core";
import { UploadPdfService } from "src/app/services/upload-pdf.service";

@Component({
    selector: 'app-upload-pdf',
    templateUrl: './upload-pdf.component.html',
    styleUrls: ['./upload-pdf.component.scss']
  })

export class UploadPdfComponent{
    uploadPath: string = '';
  selectedFiles: File[] = [];
  message: string = '';
  extractedText: string = '';

  constructor(private uploadPdfService: UploadPdfService) {}

  onFileSelect(event: any) {
    this.selectedFiles = Array.from(event.target.files);
  }

  onSubmit() {
    if (this.uploadPath && this.selectedFiles.length > 0) {
      this.uploadPdfService.uploadFiles(this.uploadPath, this.selectedFiles)
        .subscribe(
          (response: any) => {
            this.message = "Files uploaded successfully!";
            this.extractedText = response;
          },
          (error: any) => {
            this.message = "An error occurred: " + error.message;
          }
        );
    } else {
      this.message = "Please provide a path and select files to upload.";
    }
  }
}