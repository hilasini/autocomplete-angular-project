import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { AutocompleteComponent } from './autocomplete.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

describe('AutocompleteComponent', () => {
  let component: AutocompleteComponent;
  let fixture: ComponentFixture<AutocompleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutocompleteComponent ],
      imports: [ HttpClientTestingModule, ReactiveFormsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutocompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should hide autocomplete list when no cities are available', () => {
    component.cities = [];
    expect(component.shouldDisplayList()).toBeFalsy();
  });

  it('should hide autocomplete list when input value matches the only city in the list', () => {
    component.cities = ['New York'];
    component.searchControl.setValue('new york');
    expect(component.shouldDisplayList()).toBeFalsy();
  });

  it('should show autocomplete list when input value does not match the only city in the list', () => {
    component.cities = ['New York'];
    component.searchControl.setValue('Los Angeles');
    expect(component.shouldDisplayList()).toBeTruthy();
  });

  it('should show autocomplete list when there are multiple cities in the list', () => {
    component.cities = ['New York', 'Los Angeles'];
    component.searchControl.setValue('');
    expect(component.shouldDisplayList()).toBeTruthy();
  });

  // Additional tests for other methods can be added here

});
