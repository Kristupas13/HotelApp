import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { RoomsModule } from '../rooms.module';
import { RoomsService } from '../rooms.service';
import { RoomDetailsComponent } from './room-details.component';

describe('RoomDetailsComponent', () => {
  let component: RoomDetailsComponent;
  let fixture: ComponentFixture<RoomDetailsComponent>;
  let activatedRouteSpy: jasmine.SpyObj<ActivatedRoute>;

  beforeEach(async () => {
    const spy = jasmine.createSpyObj('ActivatedRoute', {}, {snapshot: { params: { roomId: 0 }}})
    await TestBed.configureTestingModule({
      declarations: [ RoomDetailsComponent ],
      imports: [ RoomsModule ],
      providers: [
        RoomsService,
        { provide: ActivatedRoute, useValue: spy }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
