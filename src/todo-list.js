import { bindable } from 'aurelia-framework';

export class TodoList {
    @bindable todos;
}

/* dependency injection */
// import { bindable, inject } from 'aurelia-framework';
// import {App} from "./app";
//
// @inject(App)
// export class TodoList {
//     @bindable todos;
//
//     constructor(app){
//         this.app = app;
//     }
//
//     removeTodo(todo) {
//         console.log(this.app);
//         this.app.removeTodo(todo);
//     }
// }