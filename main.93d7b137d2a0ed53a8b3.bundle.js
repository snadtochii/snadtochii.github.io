webpackJsonp([1,5],{"+jHA":function(e,t,r){"use strict";var i=r("EoZ3");r.d(t,"d",function(){return i.a});var n=r("sgJz");r.d(t,"c",function(){return n.a});var a=r("AD2s");r.d(t,"b",function(){return a.a});var o=r("Pntu");r.d(t,"a",function(){return o.a})},1:function(e,t,r){e.exports=r("x35b")},"3pEL":function(e,t,r){t=e.exports=r("FZ+f")(),t.push([e.i,"",""]),e.exports=e.exports.toString()},"5xMp":function(e,t){e.exports="<app-navbar></app-navbar>\r\n<router-outlet></router-outlet>"},"6DqP":function(e,t,r){"use strict";var i=r("3j3K"),n=r("fwo/");r.d(t,"a",function(){return s});var a=this&&this.__decorate||function(e,t,r,i){var n,a=arguments.length,o=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(o=(a<3?n(o):a>3?n(t,r,o):n(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o},o=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},s=function(){function e(e){this.carsService=e}return e.prototype.ngOnInit=function(){var e=this;this.carsService.getCars().subscribe(function(t){e.cars=e.carsFiltered=t}),this.carsService.carToShare$.subscribe(function(t){return e.selectedCar=t})},e.prototype.filterCars=function(e){this.carsFiltered=this.cars.filter(function(t){return(t.brand+" "+t.model).trim().toLowerCase().includes(e.toLowerCase())})},e.prototype.shareCar=function(e){this.carsService.shareCar(e)},e}();s=a([r.i(i._14)({selector:"app-cars-list",template:r("foCa"),styles:[r("fjFP")]}),o("design:paramtypes",["function"==typeof(c=void 0!==n.a&&n.a)&&c||Object])],s);var c},AD2s:function(e,t,r){"use strict";r.d(t,"a",function(){return i});var i=function(){function e(){}return e}()},AG92:function(e,t,r){"use strict";var i=r("3j3K");r.d(t,"a",function(){return o});var n=this&&this.__decorate||function(e,t,r,i){var n,a=arguments.length,o=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(o=(a<3?n(o):a>3?n(t,r,o):n(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o},a=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},o=function(){function e(){}return e.prototype.ngOnInit=function(){},e}();o=n([r.i(i._14)({selector:"app-navbar",template:r("UdWZ"),styles:[r("s46N")]}),a("design:paramtypes",[])],o)},Bkuo:function(e,t,r){t=e.exports=r("FZ+f")(),t.push([e.i,"ul.tabs{background-color:transparent}",""]),e.exports=e.exports.toString()},DSpk:function(e,t){e.exports='<div class="fixed-action-btn">\r\n  <a class="btn-floating btn-large waves-effect waves-light red modal-trigger" (click)="openModal(form, null)"><i class="material-icons">add</i></a>\r\n</div>\r\n<div id="modal2" class="modal bottom-sheet" materialize="modal" [materializeParams]="[{dismissible: true}]" [materializeActions]="modalActions">\r\n  <form #form="ngForm" (submit)="saveDriver(form, driver?.key)">\r\n    <div class="modal-content">\r\n      <h5>DRIVER CARD</h5>\r\n      <div class="row">\r\n        <div class="col s2 hoverable">\r\n          <img class="responsive-img" src="{{car?.imgUrl || \'/assets/img/guest-256.png\'}}">\r\n        </div>\r\n        <div class="col s10">\r\n          <div class="row">\r\n            <div class="input-container col s4">\r\n              <label for="first-name">FIRST NAME<span class="red-text"> *</span></label>\r\n              <input required id="first-name" type="text" [ngModel]="driver?.firstName" name="firstName">\r\n            </div>\r\n            <div class="input-container col s4">\r\n              <label for="last-name">LAST NAME<span class="red-text"> *</span></label>\r\n              <input required id="last-name" type="text" [ngModel]="driver?.lastName" name="lastName">\r\n            </div>\r\n            <div class="input-container col s4">\r\n              <label for="fathers-name">FATHER\'s NAME</label>\r\n              <input id="fathers-name" type="text" [ngModel]="driver?.fathersName" name="fathersName">\r\n            </div>\r\n          </div>\r\n          <div class="input-container col s4">\r\n            <label for="birthdate">BIRTH DATE<span class="red-text"> *</span></label>\r\n            <input required materialize="pickadate" id="birthdate" [materializeParams]="[{ selectMonths: true,  selectYears: 100}]" [ngModel]="driver?.birthdate" name="birthdate">\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <hr>\r\n      <div class="row">\r\n        <h6>CONTACTS</h6>\r\n        <div class="row">\r\n          <div class="input-field col s4">\r\n            <i class="material-icons prefix">phone</i>\r\n            <input required id="phone" placeholder="+380987654321" type="text" [ngModel]="driver?.phone" name="phone">\r\n            <label for="phone"><span class="red-text"> *</span></label>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <hr>\r\n      <div class="modal-footer">\r\n        <div class="row">\r\n          <div class="col s6">\r\n            <div *ngIf="driver" class=" valign-wrapper">\r\n              <i class="material-icons red-text delete-icon" (click)="deleteDriver(driver)">delete</i>\r\n            </div>\r\n          </div>\r\n        <div class="col s6">\r\n          <button type="submit" class="modal-action modal-close waves-effect waves-green btn-flat" [class.disabled]="!form.valid">Save</button>\r\n          <button class="waves-effect waves-green btn-flat" type="button" (click)="closeModal()">Close</button>\r\n        </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </form>\r\n</div>'},"DeC/":function(e,t,r){"use strict";var i=r("3j3K"),n=r("fwo/");r.d(t,"a",function(){return s});var a=this&&this.__decorate||function(e,t,r,i){var n,a=arguments.length,o=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(o=(a<3?n(o):a>3?n(t,r,o):n(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o},o=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},s=function(){function e(e,t){this.carsService=e,this.driversSevice=t,this.driversOfCar=[]}return e.prototype.ngOnInit=function(){var e=this;this.driversSevice.getDrivers().subscribe(function(t){return e.drivers=t}),this.carsService.carToShare$.subscribe(function(t){e.car=t,e.car&&e.filterDrivers(e.car.drivers)})},e.prototype.deleteCar=function(e){this.carsService.deleteCar(e),this.car=void 0},e.prototype.addDriver=function(e,t){t&&this.carsService.addDriver(e,t)},e.prototype.deleteDriver=function(e,t){this.carsService.deleteDriver(e,t)},e.prototype.filterDrivers=function(e){var t=this;if(this.driversOfCar=[],e)for(var r in e)e.hasOwnProperty(r)&&this.drivers.forEach(function(e){e.$key==r&&t.driversOfCar.push(e)})},e}();a([r.i(i.O)(),o("design:type",Object)],s.prototype,"mod",void 0),s=a([r.i(i._14)({selector:"app-car-details",template:r("oFLy"),styles:[r("O8EE")]}),o("design:paramtypes",["function"==typeof(c=void 0!==n.a&&n.a)&&c||Object,"function"==typeof(l=void 0!==n.b&&n.b)&&l||Object])],s);var c,l},EoZ3:function(e,t,r){"use strict";r.d(t,"a",function(){return i});var i=function(){function e(){}return e}()},I8EI:function(e,t,r){t=e.exports=r("FZ+f")(),t.push([e.i,".editable{cursor:pointer}",""]),e.exports=e.exports.toString()},Iksp:function(e,t,r){"use strict";var i=r("Qbdm"),n=r("3j3K"),a=r("NVOs"),o=r("Fzro"),s=r("5oXY"),c=r("gwU6"),l=r("iKb+"),d=r("4SaG"),p=r("kZql"),f=r("YWx4"),v=r("6DqP"),u=r("K+ie"),h=r("laB4"),b=r("AG92"),m=r("ZrT/"),y=r("DeC/"),g=r("bny+"),O=r("oLgK"),j=r("cikh"),S=r("fwo/");r.d(t,"a",function(){return C});var R=this&&this.__decorate||function(e,t,r,i){var n,a=arguments.length,o=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(o=(a<3?n(o):a>3?n(t,r,o):n(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o},x=[{path:"",component:m.a},{path:"dashboard",component:j.a}],C=function(){function e(){}return e}();C=R([r.i(n.b)({declarations:[f.a,v.a,u.a,h.a,b.a,m.a,y.a,g.a,O.a,u.a,j.a],imports:[i.a,a.a,o.a,c.a,l.a.initializeApp(p.a.firebase),s.a.forRoot(x)],providers:[S.a,S.b,d.a],bootstrap:[f.a]})],C)},Jbi1:function(e,t){e.exports='<div *ngIf="driver" class="col s4">\n  <div class="card">\n    <div class="card-stacked">\n      <div class="card-content">\n        <i class="material-icons teal-text modal-trigger editable" (click)="mod.openModal(null, driver)">mode_edit</i>\n        <i class="material-icons right red-text editable" (click)="deleteDriver(driver)">delete</i>\n        <div class="row">\n          <div class="col s12 m6 l4">\n            <img class="responsive-img" src="{{driver?.imgUrl || \'/assets/img/guest-256.png\'}}">\n          </div>\n          <div class="col s12 m6 l8">\n            <p>{{driver.firstName}} {{driver.fathersName}}</p>\n            <p>{{driver.lastName}}</p>\n            <p>{{driver.color}}</p>\n            <p>{{driver.regNumber}}</p>\n          </div>\n        </div>\n        <hr>\n        <div class="row">\n          <div class="col s12">\n            <h6>CONTACTS</h6>\n            <div class="valign-wrapper"><i class="material-icons phone-icon valign-center">phone</i><span>{{driver.phone}}</span></div>\n          </div>\n        </div>\n        <hr>\n        <div class="row">\n          <div class="col s12">\n            Cars:\n            <div *ngFor="let car of carsOfDriver" class="chip">\n              {{car.brand}} {{car.model}} - {{car.regNumber}}\n              <i class="material-icons close" (click)="deleteCar(driver, car.$key)">close</i>\n            </div>\n            <div>\n              <select required materialize="material_select" [materializeSelectOptions]="cars" #selectedCar name="car">\n                <option value="" selected>Choose car</option>\n                <option *ngFor="let car of cars" [value]="car.$key">{{car.brand}} {{car.model}}- {{car.regNumber}}</option>\n              </select>\n              <button class="btn" (click)="addCar(driver, selectedCar.value)">ADD</button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>'},"K+ie":function(e,t,r){"use strict";var i=r("3j3K"),n=r("fwo/");r.d(t,"a",function(){return s});var a=this&&this.__decorate||function(e,t,r,i){var n,a=arguments.length,o=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(o=(a<3?n(o):a>3?n(t,r,o):n(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o},o=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},s=function(){function e(e){this.driversService=e}return e.prototype.ngOnInit=function(){var e=this;this.driversService.getDrivers().subscribe(function(t){e.drivers=e.driversFiltered=t}),this.driversService.driverToShare$.subscribe(function(t){return e.selectedDriver=t})},e.prototype.filterDrivers=function(e){this.driversFiltered=this.drivers.filter(function(t){return(t.lastName+" "+t.firstName+" "+t.fathersName).trim().toLowerCase().includes(e.toLowerCase())})},e.prototype.shareDriver=function(e){this.driversService.shareDriver(e)},e}();s=a([r.i(i._14)({selector:"app-drivers-list",template:r("vt7z"),styles:[r("3pEL")]}),o("design:paramtypes",["function"==typeof(c=void 0!==n.b&&n.b)&&c||Object])],s);var c},MOVZ:function(e,t){function r(e){throw new Error("Cannot find module '"+e+"'.")}r.keys=function(){return[]},r.resolve=r,e.exports=r,r.id="MOVZ"},O8EE:function(e,t,r){t=e.exports=r("FZ+f")(),t.push([e.i,".editable{cursor:pointer}",""]),e.exports=e.exports.toString()},Pntu:function(e,t,r){"use strict";r.d(t,"a",function(){return i});var i={STATUS:["free","busy"]}},TWAt:function(e,t){e.exports='<div class="row">\n  <div class="col s12">\n    <ul class="tabs" materialize="tabs">\n      <li class="tab col s3"><a class="active" href="#cars">Cars</a></li>\n      <li class="tab col s3"><a href="#drivers">Drivers</a></li>\n    </ul>\n  </div>\n  <div id="cars" class="col s12">\n    <app-cars-list></app-cars-list>\n  </div>\n  <div id="drivers" class="col s12">\n    <app-drivers-list></app-drivers-list>\n  </div>\n</div>'},UdWZ:function(e,t){e.exports='  <nav>\n    <div class="nav-wrapper">\n      <a href="#" class="brand-logo right">Car-Driver Manager</a>\n      <ul id="nav-mobile" class="left">\n        <li [routerLinkActive]="[\'active\']" [routerLinkActiveOptions]="{exact:true}"><a [routerLink]="[\'dashboard\']">Dashboard</a></li>\n      </ul>\n    </div>\n  </nav>'},YWx4:function(e,t,r){"use strict";var i=r("3j3K");r.d(t,"a",function(){return a});var n=this&&this.__decorate||function(e,t,r,i){var n,a=arguments.length,o=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(o=(a<3?n(o):a>3?n(t,r,o):n(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o},a=function(){function e(){this.title="app works!"}return e}();a=n([r.i(i._14)({selector:"app-root",template:r("5xMp"),styles:[r("okgc")]})],a)},"ZrT/":function(e,t,r){"use strict";var i=r("3j3K");r.d(t,"a",function(){return o});var n=this&&this.__decorate||function(e,t,r,i){var n,a=arguments.length,o=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(o=(a<3?n(o):a>3?n(t,r,o):n(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o},a=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},o=function(){function e(){}return e.prototype.ngOnInit=function(){},e}();o=n([r.i(i._14)({selector:"app-home",template:r("xmFu"),styles:[r("nqQb")]}),a("design:paramtypes",[])],o)},"bny+":function(e,t,r){"use strict";var i=r("3j3K"),n=r("+jHA"),a=r("fwo/");r.d(t,"a",function(){return c});var o=this&&this.__decorate||function(e,t,r,i){var n,a=arguments.length,o=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(o=(a<3?n(o):a>3?n(t,r,o):n(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o},s=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},c=function(){function e(e){this.carService=e,this.brands=n.c.BRANDS,this.colors=n.c.COLORS,this.bodyTypes=n.c.BODYTYPES,this.locations=n.c.LOCATIONS,this.modalActions=new i.F}return e.prototype.ngOnInit=function(){},e.prototype.changeModels=function(e){this.models=this.brands.find(function(t){return t.name==e}).models},e.prototype.saveCar=function(e,t){this.car?this.carService.updateCar(t,e.value).subscribe(console.log):this.carService.addCar(e.value).subscribe(console.log)},e.prototype.deleteCar=function(e){this.carService.deleteCar(e),this.car=void 0,this.closeModal()},e.prototype.openModal=function(e,t){this.car=void 0,t?(this.car=t,this.changeModels(this.car.brand),this.models.slice()):e&&e.resetForm(),this.modalActions.emit({action:"modal",params:["open"]})},e.prototype.closeModal=function(){this.modalActions.emit({action:"modal",params:["close"]})},e}();o([r.i(i.O)(),s("design:type","function"==typeof(l=void 0!==n.d&&n.d)&&l||Object)],c.prototype,"car",void 0),c=o([r.i(i._14)({selector:"app-add-car",template:r("yzTm"),styles:[r("fNN2")]}),s("design:paramtypes",["function"==typeof(d=void 0!==a.a&&a.a)&&d||Object])],c);var l,d},cikh:function(e,t,r){"use strict";var i=r("3j3K");r.d(t,"a",function(){return o});var n=this&&this.__decorate||function(e,t,r,i){var n,a=arguments.length,o=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(o=(a<3?n(o):a>3?n(t,r,o):n(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o},a=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},o=function(){function e(){}return e.prototype.ngOnInit=function(){},e}();o=n([r.i(i._14)({selector:"app-dashboard",template:r("TWAt"),styles:[r("Bkuo")]}),a("design:paramtypes",[])],o)},fNN2:function(e,t,r){t=e.exports=r("FZ+f")(),t.push([e.i,".modal{max-height:100%}.delete-icon{font-size:3rem;cursor:pointer}",""]),e.exports=e.exports.toString()},fjFP:function(e,t,r){t=e.exports=r("FZ+f")(),t.push([e.i,"tbody>tr{cursor:pointer}",""]),e.exports=e.exports.toString()},foCa:function(e,t){e.exports='<app-add-car #modalEditCar></app-add-car>\n<div class="row">\n  <div class="input-field col s12">\n    <i class="material-icons prefix">search</i>\n    <input type="text" id="search-cars" placeholder="Search the car" #searchCars (keyup)="filterCars(searchCars.value)">\n  </div>\n  <div class="col" [ngClass]="{s12: !selectedCar, s8: selectedCar}">\n    <table class="bordered highlight">\n      <thead>\n        <tr>\n          <th>Brand</th>\n          <th>Model</th>\n          <th>Color</th>\n          <th>Regisrtation number</th>\n          <th>Location</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor="let car of carsFiltered" (click)="selectedCar=car; shareCar(car)" [class.active]="car === selectedCar">\n          <td>{{car.brand}}</td>\n          <td>{{car.model}}</td>\n          <td>{{car.color}}</td>\n          <td>{{car.regNumber}}</td>\n          <td>{{car.location}}</td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n  <app-car-details [mod]="modalEditCar"></app-car-details>\n</div>'},"fwo/":function(e,t,r){"use strict";var i=r("wiMF");r.d(t,"a",function(){return i.a});var n=r("raqp");r.d(t,"b",function(){return n.a})},hWGW:function(e,t,r){t=e.exports=r("FZ+f")(),t.push([e.i,".modal{max-height:100%}.delete-icon{font-size:3rem;cursor:pointer}",""]),e.exports=e.exports.toString()},kZql:function(e,t,r){"use strict";r.d(t,"a",function(){return i});var i={production:!0,firebase:{apiKey:"AIzaSyATmzhboLJ1w0K-eiG_yCp3GxXNmnCuxYA",authDomain:"car-driver-manager.firebaseapp.com",databaseURL:"https://car-driver-manager.firebaseio.com",projectId:"car-driver-manager",storageBucket:"car-driver-manager.appspot.com",messagingSenderId:"375745896275"}}},laB4:function(e,t,r){"use strict";var i=r("3j3K"),n=r("fwo/");r.d(t,"a",function(){return s});var a=this&&this.__decorate||function(e,t,r,i){var n,a=arguments.length,o=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(o=(a<3?n(o):a>3?n(t,r,o):n(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o},o=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},s=function(){function e(e,t){this.driversService=e,this.carService=t,this.carsOfDriver=[]}return e.prototype.ngOnInit=function(){var e=this;this.carService.getCars().subscribe(function(t){return e.cars=t}),this.driversService.driverToShare$.subscribe(function(t){e.driver=t,e.driver&&e.filterCars(e.driver.cars)}),this.carService.getCars().subscribe(function(t){return e.cars=t})},e.prototype.deleteDriver=function(e){this.driversService.deleteDriver(e),this.driver=void 0},e.prototype.addCar=function(e,t){t&&this.driversService.addCar(e,t)},e.prototype.deleteCar=function(e,t){this.driversService.deleteCar(e,t)},e.prototype.filterCars=function(e){var t=this;if(this.carsOfDriver=[],this.driver.cars)for(var r in this.driver.cars)this.driver.cars.hasOwnProperty(r)&&this.cars.forEach(function(e){e.$key==r&&t.carsOfDriver.push(e)})},e}();a([r.i(i.O)(),o("design:type",Object)],s.prototype,"mod",void 0),s=a([r.i(i._14)({selector:"app-driver-details",template:r("Jbi1"),styles:[r("I8EI")]}),o("design:paramtypes",["function"==typeof(c=void 0!==n.b&&n.b)&&c||Object,"function"==typeof(l=void 0!==n.a&&n.a)&&l||Object])],s);var c,l},nqQb:function(e,t,r){t=e.exports=r("FZ+f")(),t.push([e.i,"",""]),e.exports=e.exports.toString()},oFLy:function(e,t){e.exports='<div *ngIf="car" class="col s4">\n  <div class="card">\n    <div class="card-stacked">\n      <div class="card-content">\n        <i class="material-icons teal-text editable" (click)="mod.openModal(null, car)">mode_edit</i>\n        <i class="material-icons right red-text editable" (click)="deleteCar(car)">delete</i>\n        <div class="row">\n          <div class="col s12 m6 l4">\n            <img class="responsive-img" src="{{car?.imgUrl || \'/assets/img/car-256.png\'}}">\n          </div>\n          <div class="col s12 m6 l8">\n            <p>{{car.brand}}</p>\n            <p>{{car.model}}</p>\n            <p>{{car.color}}</p>\n            <p>{{car.regNumber}}</p>\n          </div>\n        </div>\n        <hr>\n        <div class="row">\n          <div class="col s12">\n            Located at:\n            <p>{{car.location}}</p>\n          </div>\n        </div>\n        <hr>\n        <div class="row">\n          <div class="col s12">\n            Drivers:\n            <div *ngFor="let driver of driversOfCar" class="chip">\n              {{driver.firstName}} {{driver.lastName}}\n              <i class="material-icons close" (click)="deleteDriver(car, driver.$key)">close</i>\n            </div>\n            <select required materialize="material_select" #selectedDriver name="driver">\n                <option value="" selected>Choose driver</option>\n                <option *ngFor="let driver of drivers" [value]="driver.$key">{{driver.firstName}} - {{driver.lastName}}</option>\n              </select>\n            <button class="btn" (click)="addDriver(car, selectedDriver.value)">ADD</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>'},oLgK:function(e,t,r){"use strict";var i=r("3j3K"),n=r("fwo/"),a=r("+jHA");r.d(t,"a",function(){return c});var o=this&&this.__decorate||function(e,t,r,i){var n,a=arguments.length,o=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(o=(a<3?n(o):a>3?n(t,r,o):n(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o},s=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},c=function(){function e(e){this.driversService=e,this.modalActions=new i.F}return e.prototype.ngOnInit=function(){},e.prototype.saveDriver=function(e,t){var r=e.value;r.status=a.a.STATUS[0],r.accountBalance=0,this.driver?this.driversService.updateDriver(t,e.value).subscribe(console.log):this.driversService.addDriver(r).subscribe(console.log)},e.prototype.deleteDriver=function(e){this.driversService.deleteDriver(e),this.driver=void 0,this.closeModal()},e.prototype.openModal=function(e,t){this.driver=void 0,t?this.driver=t:e&&e.resetForm(),this.modalActions.emit({action:"modal",params:["open"]})},e.prototype.closeModal=function(){this.modalActions.emit({action:"modal",params:["close"]})},e}();o([r.i(i.O)(),s("design:type","function"==typeof(l=void 0!==a.b&&a.b)&&l||Object)],c.prototype,"driver",void 0),c=o([r.i(i._14)({selector:"app-add-driver",template:r("DSpk"),styles:[r("hWGW")]}),s("design:paramtypes",["function"==typeof(d=void 0!==n.b&&n.b)&&d||Object])],c);var l,d},okgc:function(e,t,r){t=e.exports=r("FZ+f")(),t.push([e.i,"",""]),e.exports=e.exports.toString()},raqp:function(e,t,r){"use strict";var i=r("3j3K"),n=r("Fzro"),a=r("Gvdl"),o=(r.n(a),r("4SaG")),s=r("kZql");r.d(t,"a",function(){return d});var c=this&&this.__decorate||function(e,t,r,i){var n,a=arguments.length,o=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(o=(a<3?n(o):a>3?n(t,r,o):n(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o},l=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},d=function(){function e(e,t){this.http=e,this.afd=t,this.dbUrl=s.a.firebase.databaseURL,this.driverToShare=new a.Subject,this.driverToShare$=this.driverToShare.asObservable()}return e.prototype.getDrivers=function(){return this.afd.list("/drivers")},e.prototype.addDriver=function(e){return this.http.post(this.dbUrl+"/drivers.json",e)},e.prototype.deleteDriver=function(e){var t=this,r=e.cars,i=e.$key;this.http.delete(this.dbUrl+"/drivers/"+i+".json").subscribe(function(){var e=[];for(var n in r)r.hasOwnProperty(n)&&e.push(t.http.delete(t.dbUrl+"/cars/"+n+"/drivers/"+i+".json"));a.Observable.forkJoin(e).subscribe(function(){return t.driverToShare.next(null)})})},e.prototype.updateDriver=function(e,t){return this.http.patch(this.dbUrl+"/drivers/"+e+".json",t)},e.prototype.addCar=function(e,t){var r=this,i=e.$key,n={},a={};n[i]=!0,a[t]=!0,this.http.patch(this.dbUrl+"/drivers/"+i+"/cars.json",a).subscribe(function(){return r.http.patch(r.dbUrl+"/cars/"+t+"/drivers.json",n).subscribe(function(){var i=e;!i.cars&&(i.cars={}),i.cars[t]=!0,r.driverToShare.next(i)})})},e.prototype.deleteCar=function(e,t){var r=this,i=e.$key;this.http.delete(this.dbUrl+"/drivers/"+i+"/cars/"+t+".json").subscribe(function(){return r.http.delete(r.dbUrl+"/cars/"+t+"/drivers/"+i+".json").subscribe(function(){var i=e;delete i.cars[t],r.driverToShare.next(i)})})},e.prototype.shareDriver=function(e){return this.driverToShare.next(e)},e}();d=c([r.i(i.d)(),l("design:paramtypes",["function"==typeof(p=void 0!==n.b&&n.b)&&p||Object,"function"==typeof(f=void 0!==o.a&&o.a)&&f||Object])],d);var p,f},s46N:function(e,t,r){t=e.exports=r("FZ+f")(),t.push([e.i,"",""]),e.exports=e.exports.toString()},sgJz:function(e,t,r){"use strict";r.d(t,"a",function(){return i});var i={BRANDS:[{name:"BMW",models:["X1","X4","i8"]},{name:"Mersedess",models:["SLS AMG","CLA-Class","GLA-Class"]},{name:"Toyota",models:["Yaris","Corolla","Camry"]}],COLORS:["Black","White","Gray"],BODYTYPES:["Sedan","Roadster","Super Car"],LOCATIONS:["Kyiv","Dnipro","Lviv"]}},vt7z:function(e,t){e.exports='<app-add-driver #modalEditDriver></app-add-driver>\n<div class="row">\n  <div class="input-field col s12">\n    <i class="material-icons prefix">search</i>\n    <input type="text" id="search-drivers" placeholder="Search the drivers" #searchDrivers (keyup)="filterDrivers(searchDrivers.value)">\n  </div>\n  <div class="col" [ngClass]="{s12: !selectedDriver, s8: selectedDriver}">\n    <table class="bordered highlight">\n      <thead>\n        <tr>\n          <th>UID</th>\n          <th>Name</th>\n          <th>Status</th>\n          <th>Account balance</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor="let driver of driversFiltered" (click)="selectedDriver=driver; shareDriver(driver)" [class.active]="driver === selectedDriver">\n          <td>{{driver.$key}}</td>\n          <td>\n            {{driver.firstName}} \n            {{driver.fathersName}}\n            {{driver.lastName}}\n          </td>\n          <td>{{driver.status}}</td>\n          <td>{{driver.accountBalance}}</td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n  <app-driver-details [mod]="modalEditDriver"></app-driver-details>\n</div>'},wiMF:function(e,t,r){"use strict";var i=r("3j3K"),n=r("Fzro"),a=r("Gvdl"),o=(r.n(a),r("4SaG")),s=r("kZql");r.d(t,"a",function(){return d});var c=this&&this.__decorate||function(e,t,r,i){var n,a=arguments.length,o=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(o=(a<3?n(o):a>3?n(t,r,o):n(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o},l=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},d=function(){function e(e,t){this.http=e,this.afd=t,this.dbUrl=s.a.firebase.databaseURL,this.carToShare=new a.Subject,this.carToShare$=this.carToShare.asObservable()}return e.prototype.getCars=function(){return this.afd.list("/cars")},e.prototype.addCar=function(e){return this.http.post(this.dbUrl+"/cars.json",e)},e.prototype.deleteCar=function(e){var t=this,r=e.drivers,i=e.$key;this.http.delete(this.dbUrl+"/cars/"+i+".json").subscribe(function(){var e=[];for(var n in r)r.hasOwnProperty(n)&&e.push(t.http.delete(t.dbUrl+"/drivers/"+n+"/cars/"+i+".json"));a.Observable.forkJoin(e).subscribe(function(){return t.carToShare.next(null)})})},e.prototype.updateCar=function(e,t){return this.http.patch(this.dbUrl+"/cars/"+e+".json",t)},e.prototype.addDriver=function(e,t){var r=this,i=e.$key,n={},a={};n[i]=!0,a[t]=!0,this.http.patch(this.dbUrl+"/drivers/"+t+"/cars.json",n).subscribe(function(){return r.http.patch(r.dbUrl+"/cars/"+i+"/drivers.json",a).subscribe(function(){var i=e;!i.drivers&&(i.drivers={}),i.drivers[t]=!0,r.carToShare.next(i)})})},e.prototype.deleteDriver=function(e,t){var r=this,i=e.$key;this.http.delete(this.dbUrl+"/drivers/"+t+"/cars/"+i+".json").subscribe(function(){return r.http.delete(r.dbUrl+"/cars/"+i+"/drivers/"+t+".json").subscribe(function(){var i=e;delete i.drivers[t],r.carToShare.next(i)})})},e.prototype.shareCar=function(e){return this.carToShare.next(e)},e}();d=c([r.i(i.d)(),l("design:paramtypes",["function"==typeof(p=void 0!==n.b&&n.b)&&p||Object,"function"==typeof(f=void 0!==o.a&&o.a)&&f||Object])],d);var p,f},x35b:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=r("3j3K"),n=r("O61y"),a=r("Iksp");r("kZql").a.production&&r.i(i.a)(),r.i(n.a)().bootstrapModule(a.a)},xmFu:function(e,t){e.exports='<div>\n  <h2 class="center-align">Car-Driver Manager</h2>\n</div>'},yzTm:function(e,t){e.exports='<div class="fixed-action-btn">\r\n  <a class="btn-floating btn-large waves-effect waves-light red modal-trigger" (click)="openModal(form, null)"><i class="material-icons">add</i></a>\r\n</div>\r\n<div id="modal1" class="modal bottom-sheet" materialize="modal" [materializeParams]="[{dismissible: true}]" [materializeActions]="modalActions">\r\n  <form #form="ngForm" (submit)="saveCar(form, car?.$key)">\r\n    <div class="modal-content">\r\n      <h5>CAR CARD</h5>\r\n      <div class="row">\r\n        <div class="col s2 hoverable">\r\n          <img class="responsive-img" src="{{car?.imgUrl || \'/assets/img/car-256.png\'}}">\r\n        </div>\r\n        <div class="col s10">\r\n          <div class="row">\r\n            <div class="input-field col s4">\r\n              <select required materialize="material_select" [materializeSelectOptions]="brands" #selectedBrand (change)="changeModels(selectedBrand.value)"\r\n                [ngModel]="car?.brand" name="brand">\r\n                <option value="" disabled selected>Choose brand</option>\r\n                <option *ngFor="let brand of brands; let i=index;" [value]="brand.name">{{brand.name}}</option>\r\n              </select>\r\n              <label>BRAND <span class="red-text">*</span></label>\r\n            </div>\r\n            <div class="input-field col s4">\r\n              <select required materialize="material_select" [materializeSelectOptions]="models" [ngModel]="car?.model" name="model">\r\n                <option value="" disabled selected>Choose model</option>\r\n                <option *ngFor="let model of models" [value]="model">{{model}}</option>\r\n              </select>\r\n              <label>MODEL <span class="red-text">*</span></label>\r\n            </div>\r\n            <div class="input-field col s4">\r\n              <select required materialize="material_select" [materializeSelectOptions]="colors" [ngModel]="car?.color" name="color">\r\n                <option value="" disabled selected>Choose color</option>\r\n                <option *ngFor="let color of colors" [value]="color">{{color}}</option>\r\n              </select>\r\n              <label>COLOR <span class="red-text">*</span></label>\r\n            </div>\r\n          </div>\r\n          <div class="input-container col s3">\r\n            <label for="reg-number">REGISTRATION NUMBER <span class="red-text">*</span></label>\r\n            <input required id="reg-number" type="text" [ngModel]="car?.regNumber" name="regNumber">\r\n          </div>\r\n          <div class="input-container col s1">\r\n            <label for="year">YEAR <span class="red-text">*</span></label>\r\n            <input required id="year" type="number" min="1900" max="2050" [ngModel]="car?.year" name="year">\r\n          </div>\r\n          <div class="input-field col s4">\r\n            <select required materialize="material_select" [materializeSelectOptions]="bodyTypes" [ngModel]="car?.bodyType" name="bodyType">\r\n              <option value="" disabled selected>Choose body type</option>\r\n              <option *ngFor="let bodyType of bodyTypes" [value]="bodyType">{{bodyType}}</option>\r\n            </select>\r\n            <label>BODY TYPE <span class="red-text">*</span></label>\r\n          </div>\r\n          <div class="input-field col s4">\r\n            <select required materialize="material_select" [materializeSelectOptions]="locations" [ngModel]="car?.location" name="location">\r\n              <option value="" disabled selected>Choose location</option>\r\n              <option *ngFor="let location of locations" [value]="location">{{location}}</option>\r\n            </select>\r\n            <label>LOCATION <span class="red-text">*</span></label>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class="modal-footer">\r\n        <div class="row">\r\n          <div class="col s6">\r\n            <div *ngIf="car" class=" valign-wrapper">\r\n              <i class="material-icons red-text delete-icon" (click)="deleteCar(car)">delete</i>\r\n            </div>\r\n          </div>\r\n          <div class="col s6">\r\n            <button type="submit" class="modal-action modal-close waves-effect waves-green btn-flat" [class.disabled]="!form.valid">Save</button>\r\n            <button class="waves-effect waves-green btn-flat" type="button" (click)="closeModal()">Close</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </form>\r\n</div>'}},[1]);