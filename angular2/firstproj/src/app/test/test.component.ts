import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
})
export class TestComponent implements OnInit {
  testvariable = 'hey you are in test component';
  obj = {
    name: 'pavi',
  };
  constructor() {}

  ngOnInit(): void {}
}
