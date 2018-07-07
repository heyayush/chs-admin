(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: routes, AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _songs_songs_list_songs_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./songs/songs-list/songs-list.component */ "./src/app/songs/songs-list/songs-list.component.ts");
/* harmony import */ var _videos_videos_list_videos_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./videos/videos-list/videos-list.component */ "./src/app/videos/videos-list/videos-list.component.ts");
/* harmony import */ var _videos_video_categories_video_categories_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./videos/video-categories/video-categories.component */ "./src/app/videos/video-categories/video-categories.component.ts");
/* harmony import */ var _songs_song_categories_song_categories_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./songs/song-categories/song-categories.component */ "./src/app/songs/song-categories/song-categories.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: '', redirectTo: 'videos', pathMatch: 'full' },
    { path: 'videos', component: _videos_videos_list_videos_list_component__WEBPACK_IMPORTED_MODULE_3__["VideosListComponent"] },
    { path: 'songs', component: _songs_songs_list_songs_list_component__WEBPACK_IMPORTED_MODULE_2__["SongsListComponent"] },
    { path: 'video-categories', component: _videos_video_categories_video_categories_component__WEBPACK_IMPORTED_MODULE_4__["VideoCategoriesComponent"] },
    { path: 'song-categories', component: _songs_song_categories_song_categories_component__WEBPACK_IMPORTED_MODULE_5__["SongCategoriesComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-layout></app-layout>\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular-in-memory-web-api */ "./node_modules/angular-in-memory-web-api/index.js");
/* harmony import */ var _in_memory_data_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./in-memory-data-service */ "./src/app/in-memory-data-service.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _songs_songs_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./songs/songs.module */ "./src/app/songs/songs.module.ts");
/* harmony import */ var _videos_videos_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./videos/videos.module */ "./src/app/videos/videos.module.ts");
/* harmony import */ var _layout_layout_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./layout/layout.module */ "./src/app/layout/layout.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_14__["AppComponent"]],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                _environments_environment__WEBPACK_IMPORTED_MODULE_13__["environment"].production
                    ? null
                    : angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_7__["HttpClientInMemoryWebApiModule"].forRoot(_in_memory_data_service__WEBPACK_IMPORTED_MODULE_8__["InMemoryDataService"], _environments_environment__WEBPACK_IMPORTED_MODULE_13__["environment"].inMemoryDBServiceOptions),
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"],
                _layout_layout_module__WEBPACK_IMPORTED_MODULE_12__["LayoutModule"],
                _songs_songs_module__WEBPACK_IMPORTED_MODULE_10__["SongsModule"],
                _videos_videos_module__WEBPACK_IMPORTED_MODULE_11__["VideosModule"]
            ],
            providers: [_in_memory_data_service__WEBPACK_IMPORTED_MODULE_8__["InMemoryDataService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_14__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());

Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_4__["platformBrowserDynamic"])().bootstrapModule(AppModule);


/***/ }),

/***/ "./src/app/in-memory-data-service.ts":
/*!*******************************************!*\
  !*** ./src/app/in-memory-data-service.ts ***!
  \*******************************************/
/*! exports provided: InMemoryDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InMemoryDataService", function() { return InMemoryDataService; });
var InMemoryDataService = /** @class */ (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var videos = [
            {
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
                synopsis: 'Inspired by real events, Tiger Zinda Hai is a sequel to the blockbuster Ek Tha Tiger, and an espionage action drama that follows a daring rescue mission in Iraq. When a group of Indian and Pakistani nurses are held hostage in Iraq by the militant Abu Usman, Indian intelligence (RAW) tracks down the reclusive agent Tiger 8 years after he fled with former Pakistani intelligence (ISI) agent Zoya. Joining forces in the name of humanity, Tiger and Zoya lead a team of RAW and ISI agents to covertly enter the hospital where the nurses are trapped, and get the nurses to safety before an American airstrike blows up the hospital. Tiger Zinda Hai is an all out entertainer with gritty action, music and drama.',
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
            },
            {
                id: '127723123133',
                title: 'Fukrey Returns',
                categories: ['23423423423'],
                thumbnails: {
                    '400x207': 'http://via.placeholder.com/400x207',
                    '293x293': 'http://via.placeholder.com/293x293',
                    '295x144': 'https://image.ibb.co/fzu8NH/fukrey_01.jpg',
                    '640x333': 'http://via.placeholder.com/640x333',
                    '341x307': 'http://via.placeholder.com/341x307'
                },
                synopsis: "After sending Bholi Punjaban in jail Fukrey Boys Hunny,Choocha,Zafar and Lali are doing well their success in life still depends on Choocha's dreams.A frustrated Bholi is in jail since a year and cant arrange for her bail as her criminal activities have stopped and there is no source of income.Bholi contacts minister Babulal Bhatia to bail her out in returns Babulal tells her that she should pay him 10 Crore within 10 days of her release or else on 11th day she will be back in jail.Bholi tracks Hunny,Choocha,Zafar and Lali and tells them as they were responsible for her arrest they should arrange the bail amount by opening a fraud finance company which will benefit them as well as the people.But Babulal plays a part and puts the company into losses.Fukrey Boys now are on the run to save their lives from Bholi as well as the people who have invested in the company.",
                abridged_cast: [
                    {
                        name: 'Pulkit Samrat',
                        id: '162654049',
                        characters: ['Hunny']
                    },
                    {
                        name: 'Priya Anand',
                        id: '162669130',
                        characters: ['Priya']
                    },
                    {
                        name: 'Manjot Singh',
                        id: '162669130',
                        characters: ['Lali']
                    }
                ],
                links: {
                    download: 'https://ia800201.us.archive.org/12/items/BigBuckBunny_328/BigBuckBunny_512kb.mp4'
                }
            },
            {
                id: '123123553133',
                title: 'Padman',
                categories: ['23423423423'],
                thumbnails: {
                    '400x207': 'http://via.placeholder.com/400x207',
                    '293x293': 'http://via.placeholder.com/293x293',
                    '295x144': 'https://image.ibb.co/cPjxGc/padman_01.jpg',
                    '640x333': 'http://via.placeholder.com/640x333',
                    '341x307': 'http://via.placeholder.com/341x307'
                },
                synopsis: "Biography on Tamil Nadu activist Arunachalam Muruganantham, whose mission was to provide sanitary napkin's to poor women of rural areas. Who would use rag cloths or leaves during periods where use of sanitary napkins was rare. After he did not get fruitful results from his family and a medical college he approached, he decided to try it himself by making a uterus out of football bladder and filling goat's blood in it. He would roam around the whole day with the bladder, the aim was to check the absorption rate of the sanitary napkins made by him.",
                abridged_cast: [
                    {
                        name: 'Akshay Kumar',
                        id: '162654049',
                        characters: ['Lakshmikant Chauhan']
                    },
                    {
                        name: 'Radhika Apte',
                        id: '162669130',
                        characters: ['Gayatri']
                    }
                ],
                links: {
                    download: 'https://ia800201.us.archive.org/12/items/BigBuckBunny_328/BigBuckBunny_512kb.mp4'
                }
            },
            {
                id: '123122223133',
                title: 'Raid',
                categories: ['23423423423'],
                thumbnails: {
                    '400x207': 'http://via.placeholder.com/400x207',
                    '293x293': 'http://via.placeholder.com/293x293',
                    '295x144': 'https://image.ibb.co/kkA4wc/raid_01.jpg',
                    '640x333': 'http://via.placeholder.com/640x333',
                    '341x307': 'http://via.placeholder.com/341x307'
                },
                synopsis: 'Set in the 80s in Uttar Pradesh, India, Raid is based on the true story of one of the most high profile raids the country has ever known. Amay Patnaik (Ajay Devgn), an upright and no-nonsense Income Tax officer has already been transferred 49 times in the past seven years owing to his idealistic and courageous disposition to uncover tax frauds, hitting hard the pockets of many a big shot. When Patnaik is assigned the case of Tauji, a highly influential and feared man in Uttar Pradesh, little does he know that his unerring determination to bring Tauji to justice would culminate in the longest and most challenging raid of his career as also the history of the Income Tax Department of India. Would Amay succeed in the face of an increasingly stubborn and belligerent Tauji forms the crux of the story.',
                abridged_cast: [
                    {
                        name: 'Akshay Kumar',
                        id: '162654049',
                        characters: ['Amay Patnaik']
                    },
                    {
                        name: 'Radhika Apte',
                        id: '162669130',
                        characters: ['Gayatri']
                    }
                ],
                links: {
                    download: 'https://ia800201.us.archive.org/12/items/BigBuckBunny_328/BigBuckBunny_512kb.mp4'
                }
            },
            {
                id: '123223123133',
                title: 'Sonu Ke Titu Ki Sweety',
                categories: ['23423423423'],
                thumbnails: {
                    '400x207': 'http://via.placeholder.com/400x207',
                    '293x293': 'http://via.placeholder.com/293x293',
                    '295x144': 'https://image.ibb.co/jOnTNH/sonu_01.jpg',
                    '640x333': 'http://via.placeholder.com/640x333',
                    '341x307': 'http://via.placeholder.com/341x307'
                },
                synopsis: "We have always been told that \"Marriage\" is a marriage between two families. 'Sonu ke Titu ki Sweety' explores the new age version of the same belief where \"Marriage\" is a marriage between two friend circles. What happens when you decide to get married, but your best friend and your girlfriend can't see eye to eye. Sonu and Titu are childhood friends. Titu has always been a naïve lover, who falls in love easily and Sonu has always had to step in to save him. But Sweety is the perfect bride and Titu is head over heels in love with her. Sonu's instinct to protect Titu at whatever cost, makes him feel that she's too good to be true. What ensues is a war between the best friend and the bride to be. While Sweety is trying to impress Titu and the family alike, Sonu is out to sabotage the utopian romance.",
                abridged_cast: [
                    {
                        name: 'Kartik Aaryan',
                        id: '162654049',
                        characters: ['Sonu']
                    },
                    {
                        name: 'Radhika Apte',
                        id: '162669130',
                        characters: ['Gayatri']
                    }
                ],
                links: {
                    download: 'https://ia800201.us.archive.org/12/items/BigBuckBunny_328/BigBuckBunny_512kb.mp4'
                }
            },
            {
                id: '133222123133',
                title: 'Student of the Year 2',
                categories: ['23423423423'],
                thumbnails: {
                    '400x207': 'http://via.placeholder.com/400x207',
                    '293x293': 'http://via.placeholder.com/293x293',
                    '295x144': 'https://image.ibb.co/j1BBbc/student_01.jpg',
                    '640x333': 'http://via.placeholder.com/640x333',
                    '341x307': 'http://via.placeholder.com/341x307'
                },
                synopsis: "Plot unknown. Follow up to the 2012 romantic comedy 'Student of the Year'.",
                abridged_cast: [
                    {
                        name: 'Tiger Shroff',
                        id: '162654049',
                        characters: ['Lead Actor']
                    },
                    {
                        name: 'Radhika Apte',
                        id: '162669130',
                        characters: ['Gayatri']
                    }
                ],
                links: {
                    download: 'https://ia800201.us.archive.org/12/items/BigBuckBunny_328/BigBuckBunny_512kb.mp4'
                }
            },
            {
                id: '123123123123',
                title: 'Big Buck Bunny',
                categories: ['11233123123'],
                thumbnails: {
                    '400x207': 'http://via.placeholder.com/400x207',
                    '293x293': 'http://via.placeholder.com/293x293',
                    '295x144': 'http://via.placeholder.com/295x144',
                    '640x333': 'http://via.placeholder.com/640x333',
                    '341x307': 'http://via.placeholder.com/341x307'
                },
                synopsis: "A recently awoken enormous and utterly adorable fluffy rabbit is heartlessly harassed by a flying squirrel's gang of rodents who are determined to squash his happiness.\n\n The green and sparkling spring has finally arrived in the thick and undisturbed forest, and all creatures, great and small, enjoy life. But somewhere on the other side of the woods, a recently awoken enormous and utterly adorable fluffy rabbit named Big Buck Bunny is heartlessly harassed by a flying squirrel's gang of rodents who simply find great pleasure in bullying innocent animals. Without a doubt, those mischievous pests are determined to squash Big Buck's happiness, furthermore, when two lustrous butterflies get in the gang's way with grave consequences, this will mean war. But who's gonna win?",
                abridged_cast: [
                    {
                        name: 'Keanu Reeves',
                        id: '162654049',
                        characters: ['Bunny']
                    },
                    {
                        name: 'Carrie-Anne Moss',
                        id: '162669130',
                        characters: ['Squirrel 1']
                    },
                    {
                        name: 'Laurence Fishburne',
                        id: '162669090',
                        characters: ['Squirrel 2']
                    },
                    {
                        name: 'Hugo Weaving',
                        id: '162709905',
                        characters: ['Squirrel 3']
                    },
                    {
                        name: 'Jada Pinkett Smith',
                        id: '162673877',
                        characters: ['Squirrel 4']
                    }
                ],
                links: {
                    download: 'https://ia800201.us.archive.org/12/items/BigBuckBunny_328/BigBuckBunny_512kb.mp4'
                }
            },
            {
                id: '123123123124',
                title: 'Big Buck Bunny 2',
                categories: ['11233123123', '546464564', '1233123103', '23423423423'],
                thumbnails: {
                    '400x207': 'http://via.placeholder.com/400x207',
                    '293x293': 'http://via.placeholder.com/293x293',
                    '295x144': 'http://via.placeholder.com/295x144',
                    '640x333': 'http://via.placeholder.com/640x333',
                    '341x307': 'http://via.placeholder.com/341x307'
                },
                synopsis: "A recently awoken enormous and utterly adorable fluffy rabbit is heartlessly harassed by a flying squirrel's gang of rodents who are determined to squash his happiness.\n\nA recently awoken enormous and utterly adorable fluffy rabbit is heartlessly harassed by a flying squirrel's gang of rodents who are determined to squash his happiness.",
                abridged_cast: [
                    {
                        name: 'Reeves Keanu',
                        id: '162654049',
                        characters: ['The Big Bunny']
                    },
                    {
                        name: 'Moss Carrie-Anne',
                        id: '162669130',
                        characters: ['The Squirrel 1']
                    },
                    {
                        name: 'Fishburne Laurence',
                        id: '162669090',
                        characters: ['The Squirrel 2']
                    },
                    {
                        name: 'Weaving Hugo',
                        id: '162709905',
                        characters: ['The Squirrel 3']
                    },
                    {
                        name: 'Smith Jada Pinkett',
                        id: '162673877',
                        characters: ['The Squirrel 4']
                    }
                ],
                links: {
                    download: 'https://ia800201.us.archive.org/12/items/BigBuckBunny_328/BigBuckBunny_512kb.mp4'
                }
            },
            {
                id: '345534535',
                title: 'Instructional',
                categories: ['23423453245'],
                thumbnails: {
                    '400x207': 'http://via.placeholder.com/400x207',
                    '293x293': 'http://via.placeholder.com/293x293',
                    '295x144': 'https://image.ibb.co/kLhUex/veriown_01.jpg',
                    '640x333': 'http://via.placeholder.com/640x333',
                    '341x307': 'http://via.placeholder.com/341x307'
                },
                synopsis: 'Introduction to Veriown CHS Panel',
                local_resource_id: 'p1_instructional_en',
                abridged_cast: [],
                links: {}
            },
            {
                id: '345534536',
                title: 'निर्देशात्मक',
                categories: ['23423453245'],
                thumbnails: {
                    '400x207': 'http://via.placeholder.com/400x207',
                    '293x293': 'http://via.placeholder.com/293x293',
                    '295x144': 'https://image.ibb.co/kLhUex/veriown_01.jpg',
                    '640x333': 'http://via.placeholder.com/640x333',
                    '341x307': 'http://via.placeholder.com/341x307'
                },
                synopsis: 'वेरिओन सीएचएस पैनल का परिचय',
                local_resource_id: 'p1_instructional_hi',
                abridged_cast: [],
                links: {}
            },
            {
                id: '345534537',
                title: 'Promotional (Short)',
                categories: ['23423453245'],
                thumbnails: {
                    '400x207': 'http://via.placeholder.com/400x207',
                    '293x293': 'http://via.placeholder.com/293x293',
                    '295x144': 'https://image.ibb.co/kLhUex/veriown_01.jpg',
                    '640x333': 'http://via.placeholder.com/640x333',
                    '341x307': 'http://via.placeholder.com/341x307'
                },
                synopsis: 'Introduction to Veriown CHS Panel',
                local_resource_id: 'p1_promo_short',
                abridged_cast: [],
                links: {}
            },
            {
                id: '345534538',
                title: 'Promotional (Long)',
                categories: ['23423453245'],
                thumbnails: {
                    '400x207': 'http://via.placeholder.com/400x207',
                    '293x293': 'http://via.placeholder.com/293x293',
                    '295x144': 'https://image.ibb.co/kLhUex/veriown_01.jpg',
                    '640x333': 'http://via.placeholder.com/640x333',
                    '341x307': 'http://via.placeholder.com/341x307'
                },
                synopsis: 'Introduction to Veriown CHS Panel',
                local_resource_id: 'p1_promo_long',
                abridged_cast: [],
                links: {}
            }
        ];
        var songs = [
            {
                id: 'song-1',
                title: 'Für_Elise',
                album: 'Mozart - Single',
                duration: 211,
                categories: ['music-23423423428'],
                thumbnails: {
                    '54x54': 'http://via.placeholder.com/54x54',
                    '40x40': 'http://via.placeholder.com/40x40'
                },
                links: {
                    download: 'http://www.amclassical.com/mp3/amclassical_beethoven_fur_elise.mp3'
                }
            },
            {
                id: 'song-2',
                title: 'Beethoven: Moonlight Sonata, movement 1',
                album: 'Classics',
                duration: 393,
                categories: ['music-23423423428'],
                thumbnails: {
                    '54x54': 'http://via.placeholder.com/54x54',
                    '40x40': 'http://via.placeholder.com/40x40'
                },
                links: {
                    download: 'http://www.amclassical.com/mp3/amclassical_moonlight_sonata_movement_1.mp3'
                }
            },
            {
                id: 'song-3',
                title: 'Some random song',
                album: 'Some Album',
                duration: 393,
                categories: ['music-11233123123', 'music-23423453245'],
                thumbnails: {
                    '54x54': 'http://via.placeholder.com/54x54',
                    '40x40': 'http://via.placeholder.com/40x40'
                },
                links: {
                    download: 'http://www.amclassical.com/mp3/amclassical_moonlight_sonata_movement_1.mp3'
                }
            }
        ];
        var videoCategories = [
            {
                id: '11233123123',
                name: 'Educational',
                thumbnails: {
                    '270x140': 'http://via.placeholder.com/270x140',
                    '295x144': 'http://via.placeholder.com/295x144',
                    '300x300': 'http://via.placeholder.com/300x300',
                    '341x307': 'https://image.ibb.co/fHELmc/kids_01.jpg'
                },
                sequence: 1
            },
            {
                id: '23423453245',
                name: 'Veriown Videos',
                thumbnails: {
                    '270x140': 'http://via.placeholder.com/270x140',
                    '295x144': 'https://image.ibb.co/kLhUex/veriown_01.jpg',
                    '300x300': 'http://via.placeholder.com/300x300',
                    '341x307': 'http://via.placeholder.com/341x307'
                },
                sequence: 2
            },
            {
                id: '1233123123',
                name: 'Spoken English',
                thumbnails: {
                    '270x140': 'http://via.placeholder.com/270x140',
                    '295x144': 'https://image.ibb.co/m4gNzx/english_01.jpg',
                    '300x300': 'http://via.placeholder.com/300x300',
                    '341x307': 'http://via.placeholder.com/341x307'
                },
                sequence: 3
            },
            {
                id: '546464564',
                name: 'Regional Movies',
                thumbnails: {
                    '270x140': 'http://via.placeholder.com/270x140',
                    '295x144': 'https://image.ibb.co/mTOrsH/series_01.jpg',
                    '300x300': 'http://via.placeholder.com/300x300',
                    '341x307': 'http://via.placeholder.com/341x307'
                },
                sequence: 4
            },
            {
                id: '23423423423',
                name: 'Bollywood Movies',
                thumbnails: {
                    '270x140': 'http://via.placeholder.com/270x140',
                    '295x144': 'https://image.ibb.co/iamSGc/tiger.jpg',
                    '300x300': 'http://via.placeholder.com/300x300',
                    '341x307': 'http://via.placeholder.com/341x307'
                },
                sequence: 5
            },
            {
                id: '23423423423',
                name: 'Hollywood Movies',
                thumbnails: {
                    '270x140': 'http://via.placeholder.com/270x140',
                    '295x144': 'https://image.ibb.co/m4gNzx/english_01.jpg',
                    '300x300': 'http://via.placeholder.com/300x300',
                    '341x307': 'http://via.placeholder.com/341x307'
                },
                sequence: 6
            }
        ];
        var songCategories = [
            {
                id: 'music-11233123123',
                name: 'Top 15 of 2018',
                thumbnails: {
                    '270x140': 'http://via.placeholder.com/270x140',
                    '295x144': 'http://via.placeholder.com/295x144',
                    '300x300': 'http://via.placeholder.com/300x300',
                    '341x307': 'https://image.ibb.co/fHELmc/kids_01.jpg'
                },
                sequence: 1
            },
            {
                id: 'music-23423453245',
                name: "Best of 90's",
                thumbnails: {
                    '270x140': 'http://via.placeholder.com/270x140',
                    '295x144': 'https://image.ibb.co/kLhUex/veriown_01.jpg',
                    '300x300': 'http://via.placeholder.com/300x300',
                    '341x307': 'http://via.placeholder.com/341x307'
                },
                sequence: 3
            },
            {
                id: 'music-1233123123',
                name: 'Punjabi',
                thumbnails: {
                    '270x140': 'http://via.placeholder.com/270x140',
                    '295x144': 'https://image.ibb.co/m4gNzx/english_01.jpg',
                    '300x300': 'http://via.placeholder.com/300x300',
                    '341x307': 'http://via.placeholder.com/341x307'
                },
                sequence: 5
            },
            {
                id: 'music-546464564',
                name: 'Telugu',
                thumbnails: {
                    '270x140': 'http://via.placeholder.com/270x140',
                    '295x144': 'https://image.ibb.co/mTOrsH/series_01.jpg',
                    '300x300': 'http://via.placeholder.com/300x300',
                    '341x307': 'http://via.placeholder.com/341x307'
                },
                sequence: 7
            },
            {
                id: 'music-23423423423',
                name: 'Wedding Songs',
                thumbnails: {
                    '270x140': 'http://via.placeholder.com/270x140',
                    '295x144': 'https://image.ibb.co/iamSGc/tiger.jpg',
                    '300x300': 'http://via.placeholder.com/300x300',
                    '341x307': 'http://via.placeholder.com/341x307'
                },
                sequence: 9
            },
            {
                id: 'music-23423423423',
                name: 'Devotional',
                thumbnails: {
                    '270x140': 'http://via.placeholder.com/270x140',
                    '295x144': 'https://image.ibb.co/m4gNzx/english_01.jpg',
                    '300x300': 'http://via.placeholder.com/300x300',
                    '341x307': 'http://via.placeholder.com/341x307'
                },
                sequence: 11
            },
            {
                id: 'music-23423423424',
                name: 'Bollywood Blockbuster',
                thumbnails: {
                    '270x140': 'http://via.placeholder.com/270x140',
                    '295x144': 'https://image.ibb.co/m4gNzx/english_01.jpg',
                    '300x300': 'http://via.placeholder.com/300x300',
                    '341x307': 'http://via.placeholder.com/341x307'
                },
                sequence: 2
            },
            {
                id: 'music-23423423425',
                name: 'Romantic Songs',
                thumbnails: {
                    '270x140': 'http://via.placeholder.com/270x140',
                    '295x144': 'https://image.ibb.co/m4gNzx/english_01.jpg',
                    '300x300': 'http://via.placeholder.com/300x300',
                    '341x307': 'http://via.placeholder.com/341x307'
                },
                sequence: 4
            },
            {
                id: 'music-23423423426',
                name: 'Hindi',
                thumbnails: {
                    '270x140': 'http://via.placeholder.com/270x140',
                    '295x144': 'https://image.ibb.co/m4gNzx/english_01.jpg',
                    '300x300': 'http://via.placeholder.com/300x300',
                    '341x307': 'http://via.placeholder.com/341x307'
                },
                sequence: 6
            },
            {
                id: 'music-23423423427',
                name: 'Dance Hits',
                thumbnails: {
                    '270x140': 'http://via.placeholder.com/270x140',
                    '295x144': 'https://image.ibb.co/m4gNzx/english_01.jpg',
                    '300x300': 'http://via.placeholder.com/300x300',
                    '341x307': 'http://via.placeholder.com/341x307'
                },
                sequence: 8
            },
            {
                id: 'music-23423423428',
                name: 'Folk',
                thumbnails: {
                    '270x140': 'http://via.placeholder.com/270x140',
                    '295x144': 'https://image.ibb.co/m4gNzx/english_01.jpg',
                    '300x300': 'http://via.placeholder.com/300x300',
                    '341x307': 'http://via.placeholder.com/341x307'
                },
                sequence: 10
            },
            {
                id: 'music-23423423429',
                name: 'Party',
                thumbnails: {
                    '270x140': 'http://via.placeholder.com/270x140',
                    '295x144': 'https://image.ibb.co/m4gNzx/english_01.jpg',
                    '300x300': 'http://via.placeholder.com/300x300',
                    '341x307': 'http://via.placeholder.com/341x307'
                },
                sequence: 12
            }
        ];
        return { videos: videos, songs: songs, videoCategories: videoCategories, songCategories: songCategories };
    };
    return InMemoryDataService;
}());



/***/ }),

/***/ "./src/app/layout/app-nav/app-nav.component.html":
/*!*******************************************************!*\
  !*** ./src/app/layout/app-nav/app-nav.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container class=\"sidenav-container\">\r\n  <mat-sidenav #drawer class=\"sidenav\" fixedInViewport=\"true\" [attr.role]=\"isHandset ? 'dialog' : 'navigation'\" [mode]=\"(isHandset | async)!.matches ? 'over' : 'side'\"\r\n    [opened]=\"!(isHandset | async)!.matches\">\r\n    <mat-toolbar color=\"primary\"></mat-toolbar>\r\n    <mat-nav-list>\r\n      <a mat-list-item routerLink=\"/videos\" routerLinkActive=\"active\">\r\n        <mat-icon matListIcon>play_circle_outline</mat-icon>\r\n        All Videos</a>\r\n      <a mat-list-item routerLink=\"/video-categories\" routerLinkActive=\"active\">\r\n        <mat-icon matListIcon>video_library</mat-icon>\r\n        Video Categories</a>\r\n      <a mat-list-item routerLink=\"/songs\" routerLinkActive=\"active\">\r\n        <mat-icon matListIcon>audiotrack</mat-icon>\r\n        All Songs</a>\r\n      <a mat-list-item routerLink=\"/song-categories\" routerLinkActive=\"active\">\r\n        <mat-icon matListIcon>library_music</mat-icon>\r\n        Song Categories</a>\r\n    </mat-nav-list>\r\n  </mat-sidenav>\r\n  <mat-sidenav-content id=\"app-sidenav-content\">\r\n    <mat-toolbar color=\"primary\">\r\n      <button type=\"button\" aria-label=\"Toggle sidenav\" mat-icon-button (click)=\"drawer.toggle()\" *ngIf=\"(isHandset | async)!.matches\">\r\n        <mat-icon aria-label=\"Side nav toggle icon\">menu</mat-icon>\r\n      </button>\r\n      <span id=\"app-title-text\">ADMIN DASHBOARD</span>\r\n    </mat-toolbar>\r\n    <app-main-content id=\"app-main-content\"></app-main-content>\r\n  </mat-sidenav-content>\r\n</mat-sidenav-container>\r\n"

/***/ }),

/***/ "./src/app/layout/app-nav/app-nav.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/layout/app-nav/app-nav.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* You can add global styles to this file, and also import other style files */\nbody {\n  margin: 0;\n  padding: 0; }\n.sidenav-container {\n  height: 100%; }\n.sidenav {\n  min-width: 200px;\n  box-shadow: 3px 0 6px rgba(0, 0, 0, 0.24); }\n#app-main-content {\n  display: flex;\n  box-sizing: border-box;\n  width: 100%;\n  flex-direction: row;\n  align-items: center;\n  white-space: nowrap; }\n#app-sidenav-content {\n  height: 100vh; }\n#app-title-text {\n  color: #f1f1f2; }\n"

/***/ }),

/***/ "./src/app/layout/app-nav/app-nav.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/layout/app-nav/app-nav.component.ts ***!
  \*****************************************************/
/*! exports provided: AppNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppNavComponent", function() { return AppNavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppNavComponent = /** @class */ (function () {
    function AppNavComponent(breakpointObserver) {
        this.breakpointObserver = breakpointObserver;
        this.isHandset = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].Handset);
    }
    AppNavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nav',
            template: __webpack_require__(/*! ./app-nav.component.html */ "./src/app/layout/app-nav/app-nav.component.html"),
            styles: [__webpack_require__(/*! ./app-nav.component.scss */ "./src/app/layout/app-nav/app-nav.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"]])
    ], AppNavComponent);
    return AppNavComponent;
}());



/***/ }),

/***/ "./src/app/layout/layout.component.html":
/*!**********************************************!*\
  !*** ./src/app/layout/layout.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav></app-nav>\r\n"

/***/ }),

/***/ "./src/app/layout/layout.component.scss":
/*!**********************************************!*\
  !*** ./src/app/layout/layout.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/layout.component.ts":
/*!********************************************!*\
  !*** ./src/app/layout/layout.component.ts ***!
  \********************************************/
/*! exports provided: LayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutComponent", function() { return LayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LayoutComponent = /** @class */ (function () {
    function LayoutComponent() {
    }
    LayoutComponent.prototype.ngOnInit = function () { };
    LayoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-layout',
            template: __webpack_require__(/*! ./layout.component.html */ "./src/app/layout/layout.component.html"),
            styles: [__webpack_require__(/*! ./layout.component.scss */ "./src/app/layout/layout.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], LayoutComponent);
    return LayoutComponent;
}());



/***/ }),

/***/ "./src/app/layout/layout.module.ts":
/*!*****************************************!*\
  !*** ./src/app/layout/layout.module.ts ***!
  \*****************************************/
/*! exports provided: LayoutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutModule", function() { return LayoutModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _layout_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layout.component */ "./src/app/layout/layout.component.ts");
/* harmony import */ var _app_nav_app_nav_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-nav/app-nav.component */ "./src/app/layout/app-nav/app-nav.component.ts");
/* harmony import */ var _main_content_main_content_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./main-content/main-content.component */ "./src/app/layout/main-content/main-content.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var LayoutModule = /** @class */ (function () {
    function LayoutModule() {
    }
    LayoutModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]],
            declarations: [_layout_component__WEBPACK_IMPORTED_MODULE_4__["LayoutComponent"], _app_nav_app_nav_component__WEBPACK_IMPORTED_MODULE_5__["AppNavComponent"], _main_content_main_content_component__WEBPACK_IMPORTED_MODULE_6__["MainContentComponent"]],
            exports: [_layout_component__WEBPACK_IMPORTED_MODULE_4__["LayoutComponent"], _app_nav_app_nav_component__WEBPACK_IMPORTED_MODULE_5__["AppNavComponent"], _main_content_main_content_component__WEBPACK_IMPORTED_MODULE_6__["MainContentComponent"]]
        })
    ], LayoutModule);
    return LayoutModule;
}());



/***/ }),

/***/ "./src/app/layout/main-content/main-content.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/layout/main-content/main-content.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"main-content\">\r\n  <router-outlet></router-outlet>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/layout/main-content/main-content.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/layout/main-content/main-content.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#main-content {\n  width: 100%; }\n"

/***/ }),

/***/ "./src/app/layout/main-content/main-content.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/layout/main-content/main-content.component.ts ***!
  \***************************************************************/
/*! exports provided: MainContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainContentComponent", function() { return MainContentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MainContentComponent = /** @class */ (function () {
    function MainContentComponent() {
    }
    MainContentComponent.prototype.ngOnInit = function () { };
    MainContentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-main-content',
            template: __webpack_require__(/*! ./main-content.component.html */ "./src/app/layout/main-content/main-content.component.html"),
            styles: [__webpack_require__(/*! ./main-content.component.scss */ "./src/app/layout/main-content/main-content.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MainContentComponent);
    return MainContentComponent;
}());



/***/ }),

/***/ "./src/app/shared/add-new/add-new.component.html":
/*!*******************************************************!*\
  !*** ./src/app/shared/add-new/add-new.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button class=\"pull-bottom-right\" mat-fab (click)=\"_onClick()\">\r\n  <mat-icon>add</mat-icon>\r\n</button>\r\n"

/***/ }),

/***/ "./src/app/shared/add-new/add-new.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/shared/add-new/add-new.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".pull-bottom-right {\n  position: fixed;\n  right: 1.33rem;\n  bottom: 1rem; }\n"

/***/ }),

/***/ "./src/app/shared/add-new/add-new.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/add-new/add-new.component.ts ***!
  \*****************************************************/
/*! exports provided: AddNewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddNewComponent", function() { return AddNewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AddNewComponent = /** @class */ (function () {
    function AddNewComponent() {
        this.new = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    AddNewComponent.prototype.ngOnInit = function () { };
    AddNewComponent.prototype._onClick = function () {
        this.new.emit();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], AddNewComponent.prototype, "new", void 0);
    AddNewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-new',
            template: __webpack_require__(/*! ./add-new.component.html */ "./src/app/shared/add-new/add-new.component.html"),
            styles: [__webpack_require__(/*! ./add-new.component.scss */ "./src/app/shared/add-new/add-new.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AddNewComponent);
    return AddNewComponent;
}());



/***/ }),

/***/ "./src/app/shared/delete-confirmation/delete-confirmation.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/shared/delete-confirmation/delete-confirmation.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Are you sure you want to delete?</h1>\r\n<div mat-dialog-content>\r\n  <p>{{item.id}}</p>\r\n  <p *ngIf=\"item.title\">{{item.title}}</p>\r\n  <p *ngIf=\"item.name\">{{item.name}}</p>\r\n</div>\r\n<div mat-dialog-actions>\r\n  <button mat-raised-button mat-dialog-close cdkFocusInitial>No</button>\r\n  <button mat-raised-button mat-dialog-close (click)=\"onDeleteConfirmation(item)\" color=\"warn\">Delete Forever</button>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/shared/delete-confirmation/delete-confirmation.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/shared/delete-confirmation/delete-confirmation.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shared/delete-confirmation/delete-confirmation.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/shared/delete-confirmation/delete-confirmation.component.ts ***!
  \*****************************************************************************/
/*! exports provided: DeleteConfirmationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteConfirmationComponent", function() { return DeleteConfirmationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var DeleteConfirmationComponent = /** @class */ (function () {
    function DeleteConfirmationComponent(item) {
        this.item = item;
        this.deleteConfirm = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    DeleteConfirmationComponent.prototype.ngOnInit = function () { };
    DeleteConfirmationComponent.prototype.onDeleteConfirmation = function (item) {
        this.deleteConfirm.emit(item);
    };
    DeleteConfirmationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-delete-confirmation',
            template: __webpack_require__(/*! ./delete-confirmation.component.html */ "./src/app/shared/delete-confirmation/delete-confirmation.component.html"),
            styles: [__webpack_require__(/*! ./delete-confirmation.component.scss */ "./src/app/shared/delete-confirmation/delete-confirmation.component.scss")]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [Object])
    ], DeleteConfirmationComponent);
    return DeleteConfirmationComponent;
}());



/***/ }),

/***/ "./src/app/shared/grid/grid.component.html":
/*!*************************************************!*\
  !*** ./src/app/shared/grid/grid.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"grid-head\">\r\n  <h2 class=\"grid-title\">{{gridTitle}}</h2>\r\n  <mat-form-field>\r\n    <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\r\n  </mat-form-field>\r\n</div>\r\n\r\n<mat-table [dataSource]=\"gridData\" matSort (matSortChange)=\"applySorting()\">\r\n  <ng-container *ngFor=\"let column of gridColumns\" matColumnDef={{column}}>\r\n    <mat-header-cell *matHeaderCellDef mat-sort-header=\"{{column}}\">\r\n      <h3>{{column.toUpperCase()}}</h3>\r\n    </mat-header-cell>\r\n    <mat-cell *matCellDef=\"let row\">{{row[column]}}</mat-cell>\r\n  </ng-container>\r\n  <ng-container matColumnDef=\"actions\">\r\n    <mat-header-cell *matHeaderCellDef>\r\n    </mat-header-cell>\r\n    <mat-cell *matCellDef=\"let cell\">\r\n      <button mat-icon-button>\r\n        <mat-icon (click)=\"onEdit(cell)\">edit</mat-icon>\r\n      </button>\r\n      <button mat-icon-button>\r\n        <mat-icon (click)=\"deleteConfirmation(cell)\">delete_outline</mat-icon>\r\n      </button>\r\n    </mat-cell>\r\n  </ng-container>\r\n  <mat-header-row *matHeaderRowDef=\"allColumns\"></mat-header-row>\r\n  <mat-row *matRowDef=\"let row; columns: allColumns;\"></mat-row>\r\n</mat-table>\r\n"

/***/ }),

/***/ "./src/app/shared/grid/grid.component.scss":
/*!*************************************************!*\
  !*** ./src/app/shared/grid/grid.component.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".grid-head {\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-columns: 7fr 3fr;\n      grid-template-columns: 7fr 3fr; }\n\n.grid-title {\n  padding-left: 24px; }\n"

/***/ }),

/***/ "./src/app/shared/grid/grid.component.ts":
/*!***********************************************!*\
  !*** ./src/app/shared/grid/grid.component.ts ***!
  \***********************************************/
/*! exports provided: GridComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridComponent", function() { return GridComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _delete_confirmation_delete_confirmation_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../delete-confirmation/delete-confirmation.component */ "./src/app/shared/delete-confirmation/delete-confirmation.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var GridComponent = /** @class */ (function () {
    function GridComponent(dialog) {
        this.dialog = dialog;
        this.edit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.delete = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    GridComponent.prototype.ngOnInit = function () {
        this.allColumns = this.gridColumns.concat(['actions']);
    };
    GridComponent.prototype.applySorting = function () {
        this.gridData.sort = this.sort;
    };
    GridComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim();
        filterValue = filterValue.toLowerCase();
        this.gridData.filter = filterValue;
    };
    GridComponent.prototype.onEdit = function (item) {
        this.edit.emit(item);
    };
    GridComponent.prototype.deleteConfirmation = function (item) {
        var _this = this;
        var dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogConfig"]();
        dialogConfig.autoFocus = true;
        dialogConfig.data = item;
        dialogConfig.height = '50vh';
        dialogConfig.width = '50vh';
        var dialogRef = this.dialog.open(_delete_confirmation_delete_confirmation_component__WEBPACK_IMPORTED_MODULE_3__["DeleteConfirmationComponent"], dialogConfig);
        var sub = dialogRef.componentInstance.deleteConfirm.subscribe(function (deleteItem) {
            _this.onDelete(deleteItem);
        });
        dialogRef.afterClosed().subscribe(function () {
            sub.unsubscribe();
        });
    };
    GridComponent.prototype.onDelete = function (item) {
        this.gridData.data = lodash__WEBPACK_IMPORTED_MODULE_2___default.a.reject(this.gridData.data, function (gridItem) {
            return gridItem.id === item.id;
        });
        this.delete.emit(item);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('gridData'),
        __metadata("design:type", Object)
    ], GridComponent.prototype, "gridData", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('gridColumns'),
        __metadata("design:type", Object)
    ], GridComponent.prototype, "gridColumns", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('gridTitle'),
        __metadata("design:type", String)
    ], GridComponent.prototype, "gridTitle", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], GridComponent.prototype, "edit", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], GridComponent.prototype, "delete", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"])
    ], GridComponent.prototype, "sort", void 0);
    GridComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-grid',
            template: __webpack_require__(/*! ./grid.component.html */ "./src/app/shared/grid/grid.component.html"),
            styles: [__webpack_require__(/*! ./grid.component.scss */ "./src/app/shared/grid/grid.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]])
    ], GridComponent);
    return GridComponent;
}());



/***/ }),

/***/ "./src/app/shared/material/material.module.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/material/material.module.ts ***!
  \****************************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm5/table.es5.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
            declarations: [],
            exports: [
                _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__["CdkTableModule"],
                _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__["LayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatBadgeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatBottomSheetModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTreeModule"]
            ]
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _grid_grid_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./grid/grid.component */ "./src/app/shared/grid/grid.component.ts");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./material/material.module */ "./src/app/shared/material/material.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _add_new_add_new_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-new/add-new.component */ "./src/app/shared/add-new/add-new.component.ts");
/* harmony import */ var _delete_confirmation_delete_confirmation_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./delete-confirmation/delete-confirmation.component */ "./src/app/shared/delete-confirmation/delete-confirmation.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _material_material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]],
            declarations: [_grid_grid_component__WEBPACK_IMPORTED_MODULE_2__["GridComponent"], _add_new_add_new_component__WEBPACK_IMPORTED_MODULE_5__["AddNewComponent"], _delete_confirmation_delete_confirmation_component__WEBPACK_IMPORTED_MODULE_6__["DeleteConfirmationComponent"]],
            exports: [_material_material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"], _grid_grid_component__WEBPACK_IMPORTED_MODULE_2__["GridComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _add_new_add_new_component__WEBPACK_IMPORTED_MODULE_5__["AddNewComponent"]],
            entryComponents: [_delete_confirmation_delete_confirmation_component__WEBPACK_IMPORTED_MODULE_6__["DeleteConfirmationComponent"]]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/songs/song-categories-editor/song-categories-editor.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/songs/song-categories-editor/song-categories-editor.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form (ngSubmit)=\"onSubmit(category)\">\r\n  <mat-form-field class=\"full-width\">\r\n    <input matInput name=\"name\" placeholder=\"Name\" [(ngModel)]=\"category.name\">\r\n  </mat-form-field>\r\n  <br/>\r\n  <mat-form-field class=\"full-width\">\r\n    <input matInput name=\"thumbnail270x140\" placeholder=\"Thumbnail 270x140\" [(ngModel)]=\"category.thumbnails['270x140']\">\r\n  </mat-form-field>\r\n  <br/>\r\n  <mat-form-field class=\"full-width\">\r\n    <input matInput name=\"thumbnail295x144\" placeholder=\"Thumbnail 295x144\" [(ngModel)]=\"category.thumbnails['295x144']\">\r\n  </mat-form-field>\r\n  <br/>\r\n  <mat-form-field class=\"full-width\">\r\n    <input matInput name=\"thumbnail300x300\" placeholder=\"Thumbnail 300x300\" [(ngModel)]=\"category.thumbnails['300x300']\">\r\n  </mat-form-field>\r\n  <br/>\r\n  <mat-form-field class=\"full-width\">\r\n    <input matInput name=\"thumbnail341x307\" placeholder=\"Thumbnail 341x307\" [(ngModel)]=\"category.thumbnails['341x307']\">\r\n  </mat-form-field>\r\n  <br/>\r\n  <mat-form-field class=\"full-width\">\r\n    <input matInput name=\"sequence\" placeholder=\"Sequence\" [(ngModel)]=\"category.sequence\">\r\n  </mat-form-field>\r\n  <br/>\r\n  <button type=\"submit\" mat-raised-button color=\"accent\" [mat-dialog-close]=\"true\">Save</button>\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/songs/song-categories-editor/song-categories-editor.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/songs/song-categories-editor/song-categories-editor.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/songs/song-categories-editor/song-categories-editor.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/songs/song-categories-editor/song-categories-editor.component.ts ***!
  \**********************************************************************************/
/*! exports provided: SongCategoriesEditorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SongCategoriesEditorComponent", function() { return SongCategoriesEditorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _songs_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../songs.service */ "./src/app/songs/songs.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var SongCategoriesEditorComponent = /** @class */ (function () {
    function SongCategoriesEditorComponent(category, songsService) {
        this.category = category;
        this.songsService = songsService;
    }
    SongCategoriesEditorComponent.prototype.ngOnInit = function () { };
    SongCategoriesEditorComponent.prototype.onSubmit = function (category) {
        this.songsService.updateCategory(category);
    };
    SongCategoriesEditorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-song-categories-editor',
            template: __webpack_require__(/*! ./song-categories-editor.component.html */ "./src/app/songs/song-categories-editor/song-categories-editor.component.html"),
            styles: [__webpack_require__(/*! ./song-categories-editor.component.scss */ "./src/app/songs/song-categories-editor/song-categories-editor.component.scss")]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [Object, _songs_service__WEBPACK_IMPORTED_MODULE_2__["SongsService"]])
    ], SongCategoriesEditorComponent);
    return SongCategoriesEditorComponent;
}());



/***/ }),

/***/ "./src/app/songs/song-categories/song-categories.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/songs/song-categories/song-categories.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-add-new (new)=\"onNew()\"></app-add-new>\r\n<app-grid [gridData]=\"tableDataSource\" [gridColumns]=\"displayedColumns\" [gridTitle]=\"title\" (edit)=\"onEdit($event)\" (delete)=\"onDelete($event)\">\r\n</app-grid>\r\n"

/***/ }),

/***/ "./src/app/songs/song-categories/song-categories.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/songs/song-categories/song-categories.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".pull-bottom-right {\n  position: fixed;\n  right: 1rem;\n  bottom: 1rem; }\n"

/***/ }),

/***/ "./src/app/songs/song-categories/song-categories.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/songs/song-categories/song-categories.component.ts ***!
  \********************************************************************/
/*! exports provided: SongCategoriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SongCategoriesComponent", function() { return SongCategoriesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _songs_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../songs.service */ "./src/app/songs/songs.service.ts");
/* harmony import */ var _song_categories_editor_song_categories_editor_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../song-categories-editor/song-categories-editor.component */ "./src/app/songs/song-categories-editor/song-categories-editor.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SongCategoriesComponent = /** @class */ (function () {
    function SongCategoriesComponent(dialog, songsService) {
        this.dialog = dialog;
        this.songsService = songsService;
        this.title = 'Song Categories';
        this.displayedColumns = ['id', 'name'];
    }
    SongCategoriesComponent.prototype.ngOnInit = function () {
        this.getSongCategories();
    };
    SongCategoriesComponent.prototype.getSongCategories = function () {
        var _this = this;
        this.songsService.getAllSongCategories().subscribe(function (SongCategoriesData) {
            _this.songCategories = SongCategoriesData;
            _this.tableDataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](SongCategoriesData);
        });
    };
    SongCategoriesComponent.prototype.openEditor = function (category) {
        var dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogConfig"]();
        dialogConfig.autoFocus = true;
        dialogConfig.data = category;
        dialogConfig.height = '80vh';
        dialogConfig.width = '70vh';
        this.dialog.open(_song_categories_editor_song_categories_editor_component__WEBPACK_IMPORTED_MODULE_3__["SongCategoriesEditorComponent"], dialogConfig);
    };
    SongCategoriesComponent.prototype.onNew = function () {
        var category = {
            id: '',
            name: '',
            thumbnails: {
                '270x140': '',
                '295x144': '',
                '300x300': '',
                '341x307': ''
            },
            sequence: this.songCategories.length + 1
        };
        this.openEditor(category);
    };
    SongCategoriesComponent.prototype.onEdit = function (category) {
        this.openEditor(category);
    };
    SongCategoriesComponent.prototype.onDelete = function (category) {
        this.songsService.deleteCategory(category);
    };
    SongCategoriesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-song-categories',
            template: __webpack_require__(/*! ./song-categories.component.html */ "./src/app/songs/song-categories/song-categories.component.html"),
            styles: [__webpack_require__(/*! ./song-categories.component.scss */ "./src/app/songs/song-categories/song-categories.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"], _songs_service__WEBPACK_IMPORTED_MODULE_2__["SongsService"]])
    ], SongCategoriesComponent);
    return SongCategoriesComponent;
}());



/***/ }),

/***/ "./src/app/songs/song-editor/song-editor.component.html":
/*!**************************************************************!*\
  !*** ./src/app/songs/song-editor/song-editor.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form (ngSubmit)=\"onSubmit(song)\">\r\n  <mat-form-field class=\"full-width\">\r\n    <input matInput name=\"title\" placeholder=\"Title\" [(ngModel)]=\"song.title\">\r\n  </mat-form-field>\r\n  <br/>\r\n  <mat-form-field class=\"full-width\">\r\n    <input matInput name=\"album\" placeholder=\"Album\" [(ngModel)]=\"song.album\">\r\n  </mat-form-field>\r\n  <br/>\r\n  <mat-form-field class=\"full-width\">\r\n    <input matInput name=\"duration\" placeholder=\"Duration\" [(ngModel)]=\"song.duration\">\r\n  </mat-form-field>\r\n  <br/>\r\n  <mat-form-field class=\"full-width\">\r\n    <mat-select placeholder=\"Categories\" [(ngModel)]=\"song.name\" name=\"categories\" multiple=\"true\">\r\n      <mat-option *ngFor=\"let category of songCategories\" [value]=\"category.id\">\r\n        {{ category.name }}\r\n      </mat-option>\r\n    </mat-select>\r\n  </mat-form-field>\r\n  <br/>\r\n  <mat-form-field class=\"full-width\">\r\n    <input matInput name=\"thumbnail400x207\" placeholder=\"Thumbnail 400x207\" [(ngModel)]=\"song.thumbnails['400x207']\">\r\n  </mat-form-field>\r\n  <br/>\r\n  <mat-form-field class=\"full-width\">\r\n    <input matInput name=\"thumbnail293x293\" placeholder=\"Thumbnail 293x293\" [(ngModel)]=\"song.thumbnails['293x293']\">\r\n  </mat-form-field>\r\n  <br/>\r\n  <mat-form-field class=\"full-width\">\r\n    <input matInput name=\"download\" placeholder=\"Download URL\" [(ngModel)]=\"song.links.download\">\r\n  </mat-form-field>\r\n  <br/>\r\n  <button type=\"submit\" mat-raised-button color=\"accent\" [mat-dialog-close]=\"true\">Save</button>\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/songs/song-editor/song-editor.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/songs/song-editor/song-editor.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/songs/song-editor/song-editor.component.ts":
/*!************************************************************!*\
  !*** ./src/app/songs/song-editor/song-editor.component.ts ***!
  \************************************************************/
/*! exports provided: SongEditorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SongEditorComponent", function() { return SongEditorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _songs_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../songs.service */ "./src/app/songs/songs.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var SongEditorComponent = /** @class */ (function () {
    function SongEditorComponent(song, songsService) {
        this.song = song;
        this.songsService = songsService;
    }
    SongEditorComponent.prototype.onSubmit = function (song) {
        this.songsService.updateSong(song);
    };
    SongEditorComponent.prototype.ngOnInit = function () {
        this.getSongCategories();
    };
    SongEditorComponent.prototype.getSongCategories = function () {
        var _this = this;
        this.songsService.getAllSongCategories().subscribe(function (songCategoriesData) {
            _this.songCategories = songCategoriesData;
        });
    };
    SongEditorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-song-editor',
            template: __webpack_require__(/*! ./song-editor.component.html */ "./src/app/songs/song-editor/song-editor.component.html"),
            styles: [__webpack_require__(/*! ./song-editor.component.scss */ "./src/app/songs/song-editor/song-editor.component.scss")]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [Object, _songs_service__WEBPACK_IMPORTED_MODULE_2__["SongsService"]])
    ], SongEditorComponent);
    return SongEditorComponent;
}());



/***/ }),

/***/ "./src/app/songs/songs-list/songs-list.component.html":
/*!************************************************************!*\
  !*** ./src/app/songs/songs-list/songs-list.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-add-new (new)=\"onNew()\"></app-add-new>\r\n<app-grid [gridData]=\"tableDataSource\" [gridColumns]=\"displayedColumns\" [gridTitle]=\"title\" (edit)=\"onEdit($event)\" (delete)=\"onDelete($event)\">\r\n</app-grid>\r\n"

/***/ }),

/***/ "./src/app/songs/songs-list/songs-list.component.scss":
/*!************************************************************!*\
  !*** ./src/app/songs/songs-list/songs-list.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".pull-bottom-right {\n  position: fixed;\n  right: 1rem;\n  bottom: 1rem; }\n"

/***/ }),

/***/ "./src/app/songs/songs-list/songs-list.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/songs/songs-list/songs-list.component.ts ***!
  \**********************************************************/
/*! exports provided: SongsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SongsListComponent", function() { return SongsListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _song_editor_song_editor_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../song-editor/song-editor.component */ "./src/app/songs/song-editor/song-editor.component.ts");
/* harmony import */ var _songs_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../songs.service */ "./src/app/songs/songs.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SongsListComponent = /** @class */ (function () {
    function SongsListComponent(dialog, songsService) {
        this.dialog = dialog;
        this.songsService = songsService;
        this.title = 'Songs List';
        this.displayedColumns = ['id', 'title'];
    }
    SongsListComponent.prototype.ngOnInit = function () {
        this.getSongs();
    };
    SongsListComponent.prototype.getSongs = function () {
        var _this = this;
        this.songsService.getAllSongs().subscribe(function (songs) {
            _this.songs = songs;
            _this.tableDataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](songs);
        });
    };
    SongsListComponent.prototype.openEditor = function (song) {
        var dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogConfig"]();
        dialogConfig.autoFocus = true;
        dialogConfig.data = song;
        dialogConfig.height = '80vh';
        dialogConfig.width = '70vh';
        this.dialog.open(_song_editor_song_editor_component__WEBPACK_IMPORTED_MODULE_2__["SongEditorComponent"], dialogConfig);
    };
    SongsListComponent.prototype.onNew = function () {
        var song = {
            id: '',
            title: '',
            album: '',
            duration: '',
            categories: [],
            thumbnails: {
                '54x54': '',
                '40x40': ''
            },
            links: {
                download: ''
            }
        };
        this.openEditor(song);
    };
    SongsListComponent.prototype.onEdit = function (song) {
        this.openEditor(song);
    };
    SongsListComponent.prototype.onDelete = function (song) {
        this.songsService.deleteSong(song);
    };
    SongsListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-songs-list',
            template: __webpack_require__(/*! ./songs-list.component.html */ "./src/app/songs/songs-list/songs-list.component.html"),
            styles: [__webpack_require__(/*! ./songs-list.component.scss */ "./src/app/songs/songs-list/songs-list.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"], _songs_service__WEBPACK_IMPORTED_MODULE_3__["SongsService"]])
    ], SongsListComponent);
    return SongsListComponent;
}());



/***/ }),

/***/ "./src/app/songs/songs.module.ts":
/*!***************************************!*\
  !*** ./src/app/songs/songs.module.ts ***!
  \***************************************/
/*! exports provided: SongsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SongsModule", function() { return SongsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _songs_list_songs_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./songs-list/songs-list.component */ "./src/app/songs/songs-list/songs-list.component.ts");
/* harmony import */ var _song_categories_song_categories_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./song-categories/song-categories.component */ "./src/app/songs/song-categories/song-categories.component.ts");
/* harmony import */ var _song_editor_song_editor_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./song-editor/song-editor.component */ "./src/app/songs/song-editor/song-editor.component.ts");
/* harmony import */ var _songs_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./songs.service */ "./src/app/songs/songs.service.ts");
/* harmony import */ var _song_categories_editor_song_categories_editor_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./song-categories-editor/song-categories-editor.component */ "./src/app/songs/song-categories-editor/song-categories-editor.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var SongsModule = /** @class */ (function () {
    function SongsModule() {
    }
    SongsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"]],
            declarations: [_songs_list_songs_list_component__WEBPACK_IMPORTED_MODULE_3__["SongsListComponent"], _song_categories_song_categories_component__WEBPACK_IMPORTED_MODULE_4__["SongCategoriesComponent"], _song_editor_song_editor_component__WEBPACK_IMPORTED_MODULE_5__["SongEditorComponent"], _song_categories_editor_song_categories_editor_component__WEBPACK_IMPORTED_MODULE_7__["SongCategoriesEditorComponent"]],
            entryComponents: [_song_editor_song_editor_component__WEBPACK_IMPORTED_MODULE_5__["SongEditorComponent"], _song_categories_editor_song_categories_editor_component__WEBPACK_IMPORTED_MODULE_7__["SongCategoriesEditorComponent"]],
            providers: [_songs_service__WEBPACK_IMPORTED_MODULE_6__["SongsService"]]
        })
    ], SongsModule);
    return SongsModule;
}());



/***/ }),

/***/ "./src/app/songs/songs.service.ts":
/*!****************************************!*\
  !*** ./src/app/songs/songs.service.ts ***!
  \****************************************/
/*! exports provided: SongsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SongsService", function() { return SongsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SongsService = /** @class */ (function () {
    function SongsService(http) {
        this.http = http;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' })
        };
        this.songsUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].api.songs;
        this.songCategoriesUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].api.songCategories;
    }
    /** GET songs from the server */
    SongsService.prototype.getAllSongs = function () {
        return this.http.get(this.songsUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    /** GET song categories from the server */
    SongsService.prototype.getAllSongCategories = function () {
        return this.http.get(this.songCategoriesUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    SongsService.prototype.updateCategory = function (category) { };
    SongsService.prototype.deleteCategory = function (category) { };
    SongsService.prototype.updateSong = function (category) { };
    SongsService.prototype.deleteSong = function (category) { };
    SongsService.prototype.handleError = function (error) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error("Backend returned code " + error.status + ", " + ("body was: " + error.error));
        }
        // return an observable with a user-facing error message
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])('Something bad happened; please try again later.');
    };
    SongsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], SongsService);
    return SongsService;
}());



/***/ }),

/***/ "./src/app/videos/video-categories-editor/video-categories-editor.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/videos/video-categories-editor/video-categories-editor.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form (ngSubmit)=\"onSubmit(category)\">\r\n  <mat-form-field class=\"full-width\">\r\n    <input matInput name=\"name\" placeholder=\"Name\" [(ngModel)]=\"category.name\">\r\n  </mat-form-field>\r\n  <br/>\r\n  <mat-form-field class=\"full-width\">\r\n    <input matInput name=\"thumbnail270x140\" placeholder=\"Thumbnail 270x140\" [(ngModel)]=\"category.thumbnails['270x140']\">\r\n  </mat-form-field>\r\n  <br/>\r\n  <mat-form-field class=\"full-width\">\r\n    <input matInput name=\"thumbnail295x144\" placeholder=\"Thumbnail 295x144\" [(ngModel)]=\"category.thumbnails['295x144']\">\r\n  </mat-form-field>\r\n  <br/>\r\n  <mat-form-field class=\"full-width\">\r\n    <input matInput name=\"thumbnail300x300\" placeholder=\"Thumbnail 300x300\" [(ngModel)]=\"category.thumbnails['300x300']\">\r\n  </mat-form-field>\r\n  <br/>\r\n  <mat-form-field class=\"full-width\">\r\n    <input matInput name=\"thumbnail341x307\" placeholder=\"Thumbnail 341x307\" [(ngModel)]=\"category.thumbnails['341x307']\">\r\n  </mat-form-field>\r\n  <br/>\r\n  <mat-form-field class=\"full-width\">\r\n    <input matInput name=\"sequence\" placeholder=\"Sequence\" [(ngModel)]=\"category.sequence\">\r\n  </mat-form-field>\r\n  <br/>\r\n  <button type=\"submit\" mat-raised-button color=\"accent\" [mat-dialog-close]=\"true\">Save</button>\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/videos/video-categories-editor/video-categories-editor.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/videos/video-categories-editor/video-categories-editor.component.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/videos/video-categories-editor/video-categories-editor.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/videos/video-categories-editor/video-categories-editor.component.ts ***!
  \*************************************************************************************/
/*! exports provided: VideoCategoriesEditorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoCategoriesEditorComponent", function() { return VideoCategoriesEditorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _videos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../videos.service */ "./src/app/videos/videos.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var VideoCategoriesEditorComponent = /** @class */ (function () {
    function VideoCategoriesEditorComponent(category, videosService) {
        this.category = category;
        this.videosService = videosService;
    }
    VideoCategoriesEditorComponent.prototype.ngOnInit = function () { };
    VideoCategoriesEditorComponent.prototype.onSubmit = function (category) {
        this.videosService.updateCategory(category);
    };
    VideoCategoriesEditorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-video-categories-editor',
            template: __webpack_require__(/*! ./video-categories-editor.component.html */ "./src/app/videos/video-categories-editor/video-categories-editor.component.html"),
            styles: [__webpack_require__(/*! ./video-categories-editor.component.scss */ "./src/app/videos/video-categories-editor/video-categories-editor.component.scss")]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [Object, _videos_service__WEBPACK_IMPORTED_MODULE_2__["VideosService"]])
    ], VideoCategoriesEditorComponent);
    return VideoCategoriesEditorComponent;
}());



/***/ }),

/***/ "./src/app/videos/video-categories/video-categories.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/videos/video-categories/video-categories.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-add-new (new)=\"onNew()\"></app-add-new>\r\n<app-grid [gridData]=\"tableDataSource\" [gridColumns]=\"displayedColumns\" [gridTitle]=\"title\" (edit)=\"onEdit($event)\" (delete)=\"onDelete($event)\">\r\n</app-grid>\r\n"

/***/ }),

/***/ "./src/app/videos/video-categories/video-categories.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/videos/video-categories/video-categories.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".pull-bottom-right {\n  position: fixed;\n  right: 1rem;\n  bottom: 1rem; }\n"

/***/ }),

/***/ "./src/app/videos/video-categories/video-categories.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/videos/video-categories/video-categories.component.ts ***!
  \***********************************************************************/
/*! exports provided: VideoCategoriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoCategoriesComponent", function() { return VideoCategoriesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _videos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../videos.service */ "./src/app/videos/videos.service.ts");
/* harmony import */ var _video_categories_editor_video_categories_editor_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../video-categories-editor/video-categories-editor.component */ "./src/app/videos/video-categories-editor/video-categories-editor.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var VideoCategoriesComponent = /** @class */ (function () {
    function VideoCategoriesComponent(dialog, videosService) {
        this.dialog = dialog;
        this.videosService = videosService;
        this.title = 'Video Categories';
        this.displayedColumns = ['id', 'name'];
    }
    VideoCategoriesComponent.prototype.ngOnInit = function () {
        this.getVideoCategories();
    };
    VideoCategoriesComponent.prototype.getVideoCategories = function () {
        var _this = this;
        this.videosService.getAllVideoCategories().subscribe(function (videoCategoriesData) {
            _this.videoCategories = videoCategoriesData;
            _this.tableDataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](videoCategoriesData);
        });
    };
    VideoCategoriesComponent.prototype.openEditor = function (category) {
        var dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogConfig"]();
        dialogConfig.autoFocus = true;
        dialogConfig.data = category;
        dialogConfig.height = '80vh';
        dialogConfig.width = '70vh';
        this.dialog.open(_video_categories_editor_video_categories_editor_component__WEBPACK_IMPORTED_MODULE_3__["VideoCategoriesEditorComponent"], dialogConfig);
    };
    VideoCategoriesComponent.prototype.onNew = function () {
        var category = {
            id: '',
            name: '',
            thumbnails: {
                '270x140': '',
                '295x144': '',
                '300x300': '',
                '341x307': ''
            },
            sequence: this.videoCategories.length + 1
        };
        this.openEditor(category);
    };
    VideoCategoriesComponent.prototype.onEdit = function (category) {
        this.openEditor(category);
    };
    VideoCategoriesComponent.prototype.onDelete = function (category) {
        this.videosService.deleteCategory(category);
    };
    VideoCategoriesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-video-categories',
            template: __webpack_require__(/*! ./video-categories.component.html */ "./src/app/videos/video-categories/video-categories.component.html"),
            styles: [__webpack_require__(/*! ./video-categories.component.scss */ "./src/app/videos/video-categories/video-categories.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"], _videos_service__WEBPACK_IMPORTED_MODULE_2__["VideosService"]])
    ], VideoCategoriesComponent);
    return VideoCategoriesComponent;
}());



/***/ }),

/***/ "./src/app/videos/video-editor/video-editor.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/videos/video-editor/video-editor.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form (ngSubmit)=\"onSubmit(video)\">\r\n  <mat-form-field class=\"full-width\">\r\n    <input matInput name=\"title\" placeholder=\"Title\" [(ngModel)]=\"video.title\">\r\n  </mat-form-field>\r\n  <br/>\r\n  <mat-form-field class=\"full-width\">\r\n    <textarea matInput name=\"synopsis\" placeholder=\"Synopsis\" [(ngModel)]=\"video.synopsis\"></textarea>\r\n  </mat-form-field>\r\n  <br/>\r\n  <mat-form-field class=\"full-width\">\r\n    <mat-select placeholder=\"Categories\" [(ngModel)]=\"video.name\" name=\"categories\" multiple=\"true\">\r\n      <mat-option *ngFor=\"let category of videoCategories\" [value]=\"category.id\">\r\n        {{ category.name }}\r\n      </mat-option>\r\n    </mat-select>\r\n  </mat-form-field>\r\n  <br/>\r\n  <label>Abridged Cast</label>\r\n  <mat-list>\r\n    <mat-list-item *ngFor=\"let member of video.abridged_cast\">\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"Artist Name\" [(ngModel)]=\"member.name\" [ngModelOptions]=\"{standalone: true}\">\r\n      </mat-form-field>\r\n    </mat-list-item>\r\n    <mat-list-item>\r\n      <button (click)=\"addCast()\" mat-mini-fab color=\"primary\">\r\n        <mat-icon>add</mat-icon>\r\n      </button>\r\n    </mat-list-item>\r\n  </mat-list>\r\n\r\n  <br/>\r\n  <mat-form-field class=\"full-width\">\r\n    <input matInput name=\"thumbnail400x207\" placeholder=\"Thumbnail 400x207\" [(ngModel)]=\"video.thumbnails['400x207']\">\r\n  </mat-form-field>\r\n  <br/>\r\n  <mat-form-field class=\"full-width\">\r\n    <input matInput name=\"thumbnail293x293\" placeholder=\"Thumbnail 293x293\" [(ngModel)]=\"video.thumbnails['293x293']\">\r\n  </mat-form-field>\r\n  <br/>\r\n  <mat-form-field class=\"full-width\">\r\n    <input matInput name=\"thumbnail295x144\" placeholder=\"Thumbnail 295x144\" [(ngModel)]=\"video.thumbnails['295x144']\">\r\n  </mat-form-field>\r\n  <br/>\r\n  <mat-form-field class=\"full-width\">\r\n    <input matInput name=\"thumbnail640x333\" placeholder=\"Thumbnail 640x333\" [(ngModel)]=\"video.thumbnails['640x333']\">\r\n  </mat-form-field>\r\n  <br/>\r\n  <mat-form-field class=\"full-width\">\r\n    <input matInput name=\"thumbnail341x307\" placeholder=\"Thumbnail 341x307\" [(ngModel)]=\"video.thumbnails['341x307']\">\r\n  </mat-form-field>\r\n  <br/>\r\n  <mat-form-field class=\"full-width\">\r\n    <input matInput name=\"download\" placeholder=\"Download URL\" [(ngModel)]=\"video.links.download\">\r\n  </mat-form-field>\r\n  <br/>\r\n  <button type=\"submit\" mat-raised-button color=\"accent\" [mat-dialog-close]=\"true\">Save</button>\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/videos/video-editor/video-editor.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/videos/video-editor/video-editor.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".full-width {\n  width: 100%; }\n"

/***/ }),

/***/ "./src/app/videos/video-editor/video-editor.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/videos/video-editor/video-editor.component.ts ***!
  \***************************************************************/
/*! exports provided: VideoEditorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoEditorComponent", function() { return VideoEditorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _videos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../videos.service */ "./src/app/videos/videos.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var VideoEditorComponent = /** @class */ (function () {
    function VideoEditorComponent(video, videosService) {
        this.video = video;
        this.videosService = videosService;
    }
    VideoEditorComponent.prototype.onSubmit = function (video) {
        this.videosService.updateVideo(video);
    };
    VideoEditorComponent.prototype.addCast = function () {
        this.video.abridged_cast.push({
            name: '',
            id: '',
            characters: []
        });
    };
    VideoEditorComponent.prototype.ngOnInit = function () {
        this.getVideoCategories();
    };
    VideoEditorComponent.prototype.getVideoCategories = function () {
        var _this = this;
        this.videosService.getAllVideoCategories().subscribe(function (videoCategoriesData) {
            _this.videoCategories = videoCategoriesData;
        });
    };
    VideoEditorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-video-editor',
            template: __webpack_require__(/*! ./video-editor.component.html */ "./src/app/videos/video-editor/video-editor.component.html"),
            styles: [__webpack_require__(/*! ./video-editor.component.scss */ "./src/app/videos/video-editor/video-editor.component.scss")]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [Object, _videos_service__WEBPACK_IMPORTED_MODULE_2__["VideosService"]])
    ], VideoEditorComponent);
    return VideoEditorComponent;
}());



/***/ }),

/***/ "./src/app/videos/videos-list/videos-list.component.html":
/*!***************************************************************!*\
  !*** ./src/app/videos/videos-list/videos-list.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-add-new (new)=\"onNew()\"></app-add-new>\r\n<app-grid [gridData]=\"tableDataSource\" [gridColumns]=\"displayedColumns\" [gridTitle]=\"title\" (edit)=\"onEdit($event)\" (delete)=\"onDelete($event)\">\r\n</app-grid>\r\n"

/***/ }),

/***/ "./src/app/videos/videos-list/videos-list.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/videos/videos-list/videos-list.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".pull-bottom-right {\n  position: fixed;\n  right: 1rem;\n  bottom: 1rem; }\n"

/***/ }),

/***/ "./src/app/videos/videos-list/videos-list.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/videos/videos-list/videos-list.component.ts ***!
  \*************************************************************/
/*! exports provided: VideosListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideosListComponent", function() { return VideosListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _video_editor_video_editor_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../video-editor/video-editor.component */ "./src/app/videos/video-editor/video-editor.component.ts");
/* harmony import */ var _videos_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../videos.service */ "./src/app/videos/videos.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var VideosListComponent = /** @class */ (function () {
    function VideosListComponent(dialog, videosService) {
        this.dialog = dialog;
        this.videosService = videosService;
        this.title = 'Videos List';
        this.displayedColumns = ['id', 'title'];
    }
    VideosListComponent.prototype.ngOnInit = function () {
        this.getVideos();
    };
    VideosListComponent.prototype.getVideos = function () {
        var _this = this;
        this.videosService.getAllVideos().subscribe(function (vids) {
            _this.videos = vids;
            _this.tableDataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](vids);
        });
    };
    VideosListComponent.prototype.openEditor = function (video) {
        var dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogConfig"]();
        dialogConfig.autoFocus = true;
        dialogConfig.data = video;
        dialogConfig.height = '80vh';
        dialogConfig.width = '70vh';
        this.dialog.open(_video_editor_video_editor_component__WEBPACK_IMPORTED_MODULE_2__["VideoEditorComponent"], dialogConfig);
    };
    VideosListComponent.prototype.onNew = function () {
        var video = {
            id: '',
            title: '',
            categories: [],
            thumbnails: {
                '400x207': '',
                '293x293': '',
                '295x144': '',
                '640x333': '',
                '341x307': ''
            },
            synopsis: '',
            abridged_cast: [
                {
                    id: '',
                    name: '',
                    characters: []
                }
            ],
            links: {
                download: ''
            }
        };
        this.openEditor(video);
    };
    VideosListComponent.prototype.onEdit = function (video) {
        this.openEditor(video);
    };
    VideosListComponent.prototype.onDelete = function (video) {
        this.videosService.deleteVideo(video);
    };
    VideosListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-videos-list',
            template: __webpack_require__(/*! ./videos-list.component.html */ "./src/app/videos/videos-list/videos-list.component.html"),
            styles: [__webpack_require__(/*! ./videos-list.component.scss */ "./src/app/videos/videos-list/videos-list.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"], _videos_service__WEBPACK_IMPORTED_MODULE_3__["VideosService"]])
    ], VideosListComponent);
    return VideosListComponent;
}());



/***/ }),

/***/ "./src/app/videos/videos.module.ts":
/*!*****************************************!*\
  !*** ./src/app/videos/videos.module.ts ***!
  \*****************************************/
/*! exports provided: VideosModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideosModule", function() { return VideosModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _video_editor_video_editor_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./video-editor/video-editor.component */ "./src/app/videos/video-editor/video-editor.component.ts");
/* harmony import */ var _video_categories_video_categories_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./video-categories/video-categories.component */ "./src/app/videos/video-categories/video-categories.component.ts");
/* harmony import */ var _videos_list_videos_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./videos-list/videos-list.component */ "./src/app/videos/videos-list/videos-list.component.ts");
/* harmony import */ var _videos_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./videos.service */ "./src/app/videos/videos.service.ts");
/* harmony import */ var _video_categories_editor_video_categories_editor_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./video-categories-editor/video-categories-editor.component */ "./src/app/videos/video-categories-editor/video-categories-editor.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var VideosModule = /** @class */ (function () {
    function VideosModule() {
    }
    VideosModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"]],
            declarations: [_video_editor_video_editor_component__WEBPACK_IMPORTED_MODULE_3__["VideoEditorComponent"], _video_categories_video_categories_component__WEBPACK_IMPORTED_MODULE_4__["VideoCategoriesComponent"], _videos_list_videos_list_component__WEBPACK_IMPORTED_MODULE_5__["VideosListComponent"], _video_categories_editor_video_categories_editor_component__WEBPACK_IMPORTED_MODULE_7__["VideoCategoriesEditorComponent"]],
            entryComponents: [_video_editor_video_editor_component__WEBPACK_IMPORTED_MODULE_3__["VideoEditorComponent"], _video_categories_editor_video_categories_editor_component__WEBPACK_IMPORTED_MODULE_7__["VideoCategoriesEditorComponent"]],
            providers: [_videos_service__WEBPACK_IMPORTED_MODULE_6__["VideosService"]]
        })
    ], VideosModule);
    return VideosModule;
}());



/***/ }),

/***/ "./src/app/videos/videos.service.ts":
/*!******************************************!*\
  !*** ./src/app/videos/videos.service.ts ***!
  \******************************************/
/*! exports provided: VideosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideosService", function() { return VideosService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var VideosService = /** @class */ (function () {
    function VideosService(http) {
        this.http = http;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' })
        };
        this.videosUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].api.videos;
        this.videoCategoriesUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].api.videoCategories;
    }
    /** GET videos from the server */
    VideosService.prototype.getAllVideos = function () {
        return this.http.get(this.videosUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    /** GET videos from the server */
    VideosService.prototype.getAllVideoCategories = function () {
        return this.http.get(this.videoCategoriesUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    VideosService.prototype.updateCategory = function (category) { };
    VideosService.prototype.deleteCategory = function (category) { };
    VideosService.prototype.updateVideo = function (category) { };
    VideosService.prototype.deleteVideo = function (category) { };
    VideosService.prototype.handleError = function (error) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error("Backend returned code " + error.status + ", " + ("body was: " + error.error));
        }
        // return an observable with a user-facing error message
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])('Something bad happened; please try again later.');
    };
    VideosService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], VideosService);
    return VideosService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    inMemoryDBServiceOptions: {
        dataEncapsulation: false,
        delay: 100
    },
    api: {
        songs: 'api/songs',
        videos: 'api/videos',
        videoCategories: 'api/videoCategories',
        songCategories: 'api/songCategories'
    }
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])()
    .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\ayush\projects\github\chs-admin\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map