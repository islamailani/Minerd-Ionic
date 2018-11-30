webpackJsonp([1],{

/***/ 109:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 109;

/***/ }),

/***/ 150:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/videos/videos.module": [
		272,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 150;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_contact__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(197);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TabsPage = /** @class */ (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__about_about__["a" /* AboutPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__contact_contact__["a" /* ContactPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"c:\temp\minerd\src\pages\tabs\tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Aprende ya!" tabIcon="md-book"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Locaciones" tabIcon="md-locate"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"c:\temp\minerd\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__videos_videos__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AboutPage = /** @class */ (function () {
    function AboutPage(navCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.items = [
            'Español Basico',
            'Español Intermedio',
            'Español Intenso',
            'Encuentra personas en Linea',
            'Encuentra Lugares para practicar'
        ];
    }
    AboutPage.prototype.showAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'Proximamente',
            subTitle: 'Aun estamos implementando esta opcion, proximamente sera utilizable.',
            buttons: ['OK']
        });
        alert.present();
    };
    AboutPage.prototype.itemSelect = function (item) {
        if (item == 'Español Basico') {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__videos_videos__["a" /* VideosPage */]);
        }
        else if (item == 'Español Intermedio') {
            this.showAlert();
        }
        else if (item == 'Español Intenso') {
            this.showAlert();
        }
        else if (item == 'Encuentra personas en Linea') {
            this.showAlert();
        }
        else if (item == 'Encuentra Lugares para practicar') {
            this.showAlert();
        }
    };
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"c:\temp\minerd\src\pages\about\about.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Aprende Con Nosotros!\n      Learn we us!\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-card>\n    <ion-card-header>\n      Explore Nearby\n    </ion-card-header>\n    <ion-list>\n      <button ion-item (click)="itemSelect(\'Español Basico\')">\n        <ion-icon name="logo-youtube" item-start></ion-icon>\n        Videos of learning\n      </button>\n\n      <button ion-item (click)="itemSelect(\'Español Intermedio\')">\n        <ion-icon name="ios-body" item-start></ion-icon>\n        Parts of Body\n      </button>\n\n      <button ion-item (click)="itemSelect(\'Español Intermedio\')">\n        <ion-icon name="ios-pizza" item-start></ion-icon>\n        Food\n      </button>\n\n      <button ion-item (click)="itemSelect(\'Español Intermedio\')">\n        <ion-icon name="paw" item-start></ion-icon>\n        Animals\n      </button>\n\n      <button ion-item (click)="itemSelect(\'Español Intermedio\')">\n        <ion-icon name="ios-american-football" item-start></ion-icon>\n        Sports\n      </button>\n\n      <button ion-item (click)="itemSelect(\'Español Basico\')">\n        <ion-icon name="planet" item-start></ion-icon>\n        Planets and space\n      </button>\n\n    </ion-list>\n  </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"c:\temp\minerd\src\pages\about\about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactPage = /** @class */ (function () {
    function ContactPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"c:\temp\minerd\src\pages\contact\contact.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Locaciones para alfabetizarse\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <!--1-->\n  <ion-card>\n    <ion-card-header>\n      Localizacion del ministerio de <br>\n      Educacion de la Republica Dominicana\n    </ion-card-header>\n    <ion-card-content>\n      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.450339315456!2d-69.91082918553342!3d18.46324958744237!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8eaf89d5224a858d%3A0x5b0910d7a59c5aa3!2sMinisterio+de+Educaci%C3%B3n!5e0!3m2!1ses!2sdo!4v1543541034663" width="100%" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>\n    </ion-card-content>\n  </ion-card>\n  <!--2-->\n  <ion-card>\n    <ion-card-header>\n      Junta Municipal de Pantoja\n    </ion-card-header>\n    <ion-card-content>\n      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121061.51714361116!2d-70.04896260520323!3d18.521109380014508!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8eaf8b00b3b71765%3A0x15f866e0dcf1c8a2!2sJunta+Municipal+de+Pantoja!5e0!3m2!1ses!2sdo!4v1543538578701" width="100%" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>\n    </ion-card-content>\n  </ion-card>\n  <!--3-->\n  <ion-card>\n    <ion-card-header>\n      Palacio Municipal Santo Domingo Este\n    </ion-card-header>\n    <ion-card-content>\n      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121077.86897950887!2d-69.98819447776184!3d18.497994412665392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x8b015019c483b06!2sPalacio+Municipal+Santo+Domingo+Este!5e0!3m2!1ses!2sdo!4v1543538788098" width="100%" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>\n    </ion-card-content>\n  </ion-card>\n  <!--4-->\n  <ion-card>\n    <ion-card-header>\n      EDUCA\n    </ion-card-header>\n    <ion-card-content>\n      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15138.058495634146!2d-69.9283601!3d18.4603344!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xcc31202b2af7731!2sEDUCA!5e0!3m2!1ses!2sdo!4v1543540071477" width="100%" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>\n    </ion-card-content>\n  </ion-card>\n  <!--5-->\n  <ion-card>\n    <ion-card-header>\n      CONAPE\n    </ion-card-header>\n    <ion-card-content>\n      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15137.255572346052!2d-69.8965167!3d18.4694357!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf20fd90ac1b91328!2sCONAPE!5e0!3m2!1ses!2sdo!4v1543540249822" width="100%" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>\n    </ion-card-content>\n  </ion-card>\n  <!--6-->\n  <ion-card>\n    <ion-card-header>\n      Edificio de Oficinas Gubernamentales<br>\n      Juan Pablo Duarte\n    </ion-card-header>\n    <ion-card-content>\n      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.198547902997!2d-69.90864688553316!3d18.4746635874357!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8eaf8832d8e6c14d%3A0xdfeca96dfb675988!2sEdificio+de+Oficinas+Gubernamentales+Juan+Pablo+Duarte!5e0!3m2!1ses!2sdo!4v1543540672820" width="100%" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>\n    </ion-card-content>\n  </ion-card>\n  <!--7-->\n  <!--<ion-card>-->\n    <!--<ion-card-header>-->\n      <!--Palacio Municipal Santo Domingo Este-->\n    <!--</ion-card-header>-->\n    <!--<ion-card-content>-->\n      <!--<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121077.86897950887!2d-69.98819447776184!3d18.497994412665392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x8b015019c483b06!2sPalacio+Municipal+Santo+Domingo+Este!5e0!3m2!1ses!2sdo!4v1543538788098" width="100%" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>-->\n    <!--</ion-card-content>-->\n  <!--</ion-card>-->\n  <!--8-->\n  <!--<ion-card>-->\n    <!--<ion-card-header>-->\n      <!--Palacio Municipal Santo Domingo Este-->\n    <!--</ion-card-header>-->\n    <!--<ion-card-content>-->\n      <!--<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121077.86897950887!2d-69.98819447776184!3d18.497994412665392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x8b015019c483b06!2sPalacio+Municipal+Santo+Domingo+Este!5e0!3m2!1ses!2sdo!4v1543538788098" width="100%" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>-->\n    <!--</ion-card-content>-->\n  <!--</ion-card>-->\n  <!--9-->\n  <!--<ion-card>-->\n    <!--<ion-card-header>-->\n      <!--Palacio Municipal Santo Domingo Este-->\n    <!--</ion-card-header>-->\n    <!--<ion-card-content>-->\n      <!--<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121077.86897950887!2d-69.98819447776184!3d18.497994412665392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x8b015019c483b06!2sPalacio+Municipal+Santo+Domingo+Este!5e0!3m2!1ses!2sdo!4v1543538788098" width="100%" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>-->\n    <!--</ion-card-content>-->\n  <!--</ion-card>-->\n  <!--10-->\n  <!--<ion-card>-->\n    <!--<ion-card-header>-->\n      <!--Palacio Municipal Santo Domingo Este-->\n    <!--</ion-card-header>-->\n    <!--<ion-card-content>-->\n      <!--<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121077.86897950887!2d-69.98819447776184!3d18.497994412665392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x8b015019c483b06!2sPalacio+Municipal+Santo+Domingo+Este!5e0!3m2!1ses!2sdo!4v1543538788098" width="100%" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>-->\n    <!--</ion-card-content>-->\n  <!--</ion-card>-->\n\n\n\n</ion-content>\n'/*ion-inline-end:"c:\temp\minerd\src\pages\contact\contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__videos_videos__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.items = [
            'Español Basico',
            'Español Intermedio',
            'Español Intenso',
            'Encuentra personas en Linea',
            'Encuentra Lugares para practicar'
        ];
    }
    HomePage.prototype.showAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'Proximamente',
            subTitle: 'Aun estamos implementando esta opcion, proximamente sera utilizable.',
            buttons: ['OK']
        });
        alert.present();
    };
    HomePage.prototype.itemSelect = function (item) {
        if (item == 'Español Basico') {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__videos_videos__["a" /* VideosPage */]);
        }
        else if (item == 'Español Intermedio') {
            this.showAlert();
        }
        else if (item == 'Español Intenso') {
            this.showAlert();
        }
        else if (item == 'Encuentra personas en Linea') {
            this.showAlert();
        }
        else if (item == 'Encuentra Lugares para practicar') {
            this.showAlert();
        }
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"c:\temp\minerd\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h2>Welcome to Minerd Ionic App!</h2>\n  <p>\n    This starter project comes with simple tabs-based layout for apps\n    that are going to primarily use a Tabbed UI.\n  </p>\n</ion-content>\n'/*ion-inline-end:"c:\temp\minerd\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(221);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_about_about__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_videos_videos__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__ = __webpack_require__(193);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_videos_videos__["a" /* VideosPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/videos/videos.module#VideosPageModule', name: 'VideosPage', segment: 'videos', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_videos_videos__["a" /* VideosPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 264:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(194);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"c:\temp\minerd\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"c:\temp\minerd\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the VideosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var VideosPage = /** @class */ (function () {
    function VideosPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    VideosPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad VideosPage');
    };
    VideosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-videos',template:/*ion-inline-start:"c:\temp\minerd\src\pages\videos\videos.html"*/'<!--\n  Generated template for the VideosPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>videos</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-card>\n\n    <ion-card-header>\n      Las Vocales , Los Colores, <br>\n      Los Números y Muchas Más\n    </ion-card-header>\n\n    <ion-card-content>\n      <iframe width="100%" height="315" src="https://www.youtube.com/embed/DZjknE0EpM4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>\n    </ion-card-content>\n  </ion-card>\n  <ion-card>\n\n    <ion-card-header>\n      Aprender a leer con El Mono Silabo\n    </ion-card-header>\n\n    <ion-card-content>\n      <iframe width="100%" height="315" src="https://www.youtube.com/embed/c2peYoOxNck" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>\n    </ion-card-content>\n  </ion-card>\n\n\n\n  <ion-card>\n    <ion-card-header>\n      Spanish For Beginners\n    </ion-card-header>\n\n    <ion-card-content>\n      <iframe width="100%" height="315" src="https://www.youtube.com/embed/hyLl_0d0EBw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>\n    </ion-card-content>\n\n  </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"c:\temp\minerd\src\pages\videos\videos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], VideosPage);
    return VideosPage;
}());

//# sourceMappingURL=videos.js.map

/***/ })

},[198]);
//# sourceMappingURL=main.js.map