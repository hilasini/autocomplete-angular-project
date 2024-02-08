import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl } from '@angular/forms';
import { debounceTime, switchMap, filter } from 'rxjs/operators';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.css'],
})

export class AutocompleteComponent implements OnInit {
  searchControl = new FormControl();
  cities: string[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.setupAutocomplete();
  }

  setupAutocomplete() {
    this.searchControl.valueChanges
      .pipe(
        debounceTime(300),
        switchMap(value => {
          if (value.trim() === '') {
            // If input value is empty, update cities list to be empty
            return Promise.resolve([]);
          } else {
            return this.fetchCities(value);
          }
        })
      )
      .subscribe((cities: string[]) => {
        this.cities = cities || [];
      });
  }

  fetchCities(query: string) {
    return this.http.get<string[]>(`http://localhost:5000/api/cities?prefix=${query}`);
  }

  shouldDisplayList(): boolean {
    return this.cities.length > 1 || (this.cities.length === 1 && this.searchControl.value.toLowerCase() !== this.cities[0].toLowerCase());
  }

  selectCity(city: string) {
    this.searchControl.setValue(city);
    this.cities = [];
  }
}
