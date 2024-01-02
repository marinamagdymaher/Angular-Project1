import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ApiProductComponent } from './api-product.component';

describe('ApiProductComponent', () => {
  let component: ApiProductComponent;
  let fixture: ComponentFixture<ApiProductComponent>;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      declarations: [ApiProductComponent]
    })
    fixture = TestBed.createComponent(ApiProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
