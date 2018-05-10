import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MaterialModule } from '../material/material.module';
import { GridComponent } from './grid.component';

const MockGridData = [
  {
    id: 'music-11233123123',
    name: 'Top 15 of 2018'
  },
  {
    id: 'music-23423453245',
    name: `Best of 90's`
  },
  {
    id: 'music-1233123123',
    name: 'Punjabi'
  },
  {
    id: 'music-546464564',
    name: 'Telugu'
  },
  {
    id: 'music-23423423423',
    name: 'Wedding Songs'
  },
  {
    id: 'music-23423423423',
    name: 'Devotional'
  },
  {
    id: 'music-23423423424',
    name: 'Bollywood Blockbuster'
  },
  {
    id: 'music-23423423425',
    name: 'Romantic Songs'
  },
  {
    id: 'music-23423423426',
    name: 'Hindi'
  },
  {
    id: 'music-23423423427',
    name: 'Dance Hits'
  },
  {
    id: 'music-23423423428',
    name: 'Folk'
  },
  {
    id: 'music-23423423429',
    name: 'Party'
  }
];
const MockGridColumnms = ['id', 'name'];

describe('GridComponent', () => {
  let component: GridComponent;
  let fixture: ComponentFixture<GridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MaterialModule],
      declarations: [GridComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridComponent);
    component = fixture.componentInstance;
    component.gridData = MockGridData;
    component.gridColumns = MockGridColumnms;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
