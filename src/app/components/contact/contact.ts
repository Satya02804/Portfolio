import { Component, inject } from '@angular/core';
import { Portfolio } from '../../services/portfolio';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  portfolio = inject(Portfolio);
  http = inject(HttpClient);
  fb = inject(FormBuilder);

  contactForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    subject: ['', [Validators.required]],
    message: ['', [Validators.required, Validators.minLength(10)]],
  });

  isSubmitting = false;
  successMessage = '';
  errorMessage = '';
  showToast = false;

  onSubmit() {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    this.isSubmitting = true;
    this.successMessage = '';
    this.errorMessage = '';

    this.http.post<{success: boolean, message: string}>('/api/contact', this.contactForm.value)
      .subscribe({
        next: (res) => {
          this.isSubmitting = false;
          if (res.success) {
            this.successMessage = 'Your message has been sent successfully!';
            this.showToast = true;
            setTimeout(() => this.showToast = false, 5000);
            this.contactForm.reset();
          } else {
            this.errorMessage = res.message || 'Something went wrong. Please try again.';
          }
        },
        error: (err) => {
          this.isSubmitting = false;
          console.error('Contact Form Error:', err);
          this.errorMessage = 'Failed to send message. Please try again later.';
        }
      });
  }
}
