import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondComponent } from './second.component';
import { PostsService } from '../posts.service';
import { of } from 'rxjs';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('SecondComponent', () => {
  let component: SecondComponent;
  let fixture: ComponentFixture<SecondComponent>;
  let httpTestingController: HttpTestingController;
  let postsService: PostsService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SecondComponent],
      imports: [HttpClientTestingModule],
      providers: [PostsService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    httpTestingController = TestBed.inject(HttpTestingController);
    postsService = TestBed.inject(PostsService);

    fixture = TestBed.createComponent(SecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    const req = httpTestingController.expectOne('https://pokeapi.co/api/v2/pokemon/');
    req.flush({
      results: [
        { name: 'Bulbasaur' },
        { name: 'Charmander' },
        { name: 'Squirtle' }
      ]
    });
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
