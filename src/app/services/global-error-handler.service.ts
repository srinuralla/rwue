import { HttpErrorResponse } from '@angular/common/http';
import { ErrorHandler, Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class GlobalErrorHandlerService implements ErrorHandler {
  errorMessage = '';

  constructor(private router: Router) {}

  handleError(error: Error | HttpErrorResponse) {
    if (error instanceof HttpErrorResponse) {
      if (error.status === 401) {
        this.createServerErrorMessage(error);
        this.router.navigate(['/401']);
      } else if (error.status === 500) {
        this.createServerErrorMessage(error);
        this.router.navigate(['/500']);
      } else if (error.status === 404) {
        this.createServerErrorMessage(error);
        this.router.navigate(['/404']);
      } else {
        this.createServerErrorMessage(error);
        this.router.navigate(['/servererror']);
      }
    } else {
      // Client Error
      this.createClientErrorMessage(error);
      this.router.navigate(['/clienterror']);
    }
  }

  private createServerErrorMessage = (error: HttpErrorResponse) => {
    this.errorMessage = error.error ? error.error : error.statusText;
  };
  private createClientErrorMessage = (error: Error) => {
    this.errorMessage = error.stack ? error.name : error.message;
  };
}
