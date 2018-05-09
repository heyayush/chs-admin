import { NgModule } from '@angular/core';
import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { SharedModule } from '../../shared/shared.module';
import { MAT_DIALOG_DATA, MatDialog, MatDialogModule } from '@angular/material';
import { VideoEditorComponent } from './video-editor.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OverlayContainer } from '@angular/cdk/overlay';
import { FormsModule } from '@angular/forms';

const MockDialogData = {
	id: '1231238823133',
	title: 'Tiger Zinda Hai',
	categories: ['23423423423'],
	thumbnails: {
		'400x207': 'http://via.placeholder.com/400x207',
		'293x293': 'http://via.placeholder.com/293x293',
		'295x144': 'https://image.ibb.co/iamSGc/tiger.jpg',
		'640x333': 'https://preview.ibb.co/k4STNH/tiger.jpg',
		'341x307': 'https://image.ibb.co/m5Qtpx/tiger_details.jpg'
	},
	synopsis: 'Inspired by real events, Tiger Zinda Hai action, music and drama.',
	abridged_cast: [
		{
			name: 'Salman Khan',
			id: '162654049',
			characters: ['Tiger']
		},
		{
			name: 'Katrina Kaif',
			id: '162669130',
			characters: ['Zoya']
		}
	],
	links: {
		download: 'https://ia800201.us.archive.org/12/items/BigBuckBunny_328/BigBuckBunny_512kb.mp4'
	}
};

@NgModule({
	imports: [MatDialogModule, BrowserAnimationsModule, FormsModule, SharedModule],
	declarations: [VideoEditorComponent],
	entryComponents: [VideoEditorComponent],
	exports: [VideoEditorComponent]
})
class DialogTestModule {}

fdescribe('VideoEditorComponent', () => {
	let component: VideoEditorComponent;
	let fixture: ComponentFixture<VideoEditorComponent>;
	let overlayContainerElement: HTMLElement;
	let dialog: MatDialog;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [DialogTestModule],
			providers: [
				{
					provide: OverlayContainer,
					useFactory: () => {
						overlayContainerElement = document.createElement('div');
						return { getContainerElement: () => overlayContainerElement };
					}
				}
			]
		}).compileComponents();
	}));

	beforeEach(async(
		inject([MAT_DIALOG_DATA], d => {
			d = MockDialogData;
		})
	));

	beforeEach(() => {
		dialog = TestBed.get(MatDialog);
		fixture = TestBed.createComponent(VideoEditorComponent);
		component = fixture.componentInstance;
		// component.video = MockDialogData;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
