import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { AuthService } from './auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule
  ],
  template: `
    <div class="auth-container">
      <mat-card class="auth-card">
        <mat-card-header>
          <mat-card-title>Login</mat-card-title>
        </mat-card-header>

        <form [formGroup]="loginForm" (ngSubmit)="onSubmit()">
          <mat-card-content>
            <mat-form-field appearance="outline">
              <mat-label>Email</mat-label>
              <input matInput type="email" formControlName="email" placeholder="seu@email.com">
              <mat-error *ngIf="loginForm.get('email')?.hasError('required')">
                Email é obrigatório
              </mat-error>
              <mat-error *ngIf="loginForm.get('email')?.hasError('email')">
                Email inválido
              </mat-error>
            </mat-form-field>

            <mat-form-field appearance="outline">
              <mat-label>Senha</mat-label>
              <input matInput [type]="hidePassword ? 'password' : 'text'" formControlName="password">
              <button mat-icon-button matSuffix (click)="hidePassword = !hidePassword" type="button">
                <mat-icon>{{hidePassword ? 'visibility_off' : 'visibility'}}</mat-icon>
              </button>
              <mat-error *ngIf="loginForm.get('password')?.hasError('required')">
                Senha é obrigatória
              </mat-error>
            </mat-form-field>
          </mat-card-content>

          <mat-card-actions>
            <button mat-raised-button color="primary" type="submit" [disabled]="loginForm.invalid || loading">
              <mat-spinner diameter="20" *ngIf="loading"></mat-spinner>
              <span *ngIf="!loading">Entrar</span>
            </button>
            <button mat-button type="button" routerLink="/auth/register">
              Criar conta
            </button>
          </mat-card-actions>
        </form>
      </mat-card>
    </div>
  `,
  styles: [`
    .auth-container {
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: calc(100vh - 64px);
      padding: 16px;
      background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
    }

    .auth-card {
      width: 100%;
      max-width: 400px;
      margin: 16px;
    }

    mat-card-header {
      margin-bottom: 16px;
    }

    mat-card-title {
      font-size: 24px;
      margin: 16px 0;
    }

    mat-card-content {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }

    mat-form-field {
      width: 100%;
    }

    mat-card-actions {
      display: flex;
      flex-direction: column;
      gap: 8px;
      padding: 16px;

      button {
        width: 100%;
        height: 40px;
      }
    }

    mat-spinner {
      margin: 0 auto;
    }

    @media (max-width: 599px) {
      .auth-container {
        padding: 0;
      }

      .auth-card {
        margin: 0;
        max-width: 100%;
        min-height: calc(100vh - 56px);
        border-radius: 0;
      }
    }
  `]
})
export class LoginComponent {
  loginForm: FormGroup;
  loading = false;
  hidePassword = true;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      this.loading = true;
      this.authService.login(this.loginForm.value).subscribe({
        next: () => {
          this.router.navigate(['/courses']);
          this.snackBar.open('Login realizado com sucesso!', 'OK', {
            duration: 3000,
            horizontalPosition: 'end',
            verticalPosition: 'top'
          });
        },
        error: (error) => {
          this.snackBar.open(error.message, 'OK', {
            duration: 5000,
            horizontalPosition: 'end',
            verticalPosition: 'top',
            panelClass: ['error-snackbar']
          });
          this.loading = false;
        },
        complete: () => {
          this.loading = false;
        }
      });
    }
  }
} 