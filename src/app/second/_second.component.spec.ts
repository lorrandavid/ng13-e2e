// import { ComponentFixture, TestBed } from '@angular/core/testing';

// import { SecondComponent } from './second.component';
// import { PostsService } from '../posts.service';
// import { of } from 'rxjs';
// import { HttpClientTestingModule } from '@angular/common/http/testing';

// describe('SecondComponent', () => {
//   let component: SecondComponent;
//   let fixture: ComponentFixture<SecondComponent>;
//   let postsServiceSpy: jasmine.SpyObj<PostsService>;

//   beforeEach(async () => {
//     postsServiceSpy = jasmine.createSpyObj('PostsService', ['getPosts']);
//     await TestBed.configureTestingModule({
//       declarations: [ SecondComponent ],
//       imports: [HttpClientTestingModule],
//       providers: [
//         { provide: PostsService, useValue: postsServiceSpy }
//       ]
//     })
//     .compileComponents();
//   });

//   beforeEach(() => {
//     postsServiceSpy.getPosts.and.returnValue(of({
//       results: [
//         { name: 'Bulbasaur' },
//         { name: 'Charmander' },
//         { name: 'Squirtle' }
//       ]
//     }));

//     fixture = TestBed.createComponent(SecondComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });
