import { Component, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';

@Component({
	selector: 'app-home',
	templateUrl: 'home.page.html',
	styleUrls: ['home.page.scss'],
})
export class HomePage {
	public todos: Array<any> = [];

	// @ViewChild('addModal') addModal: IonModal;

	constructor() {}

	public addTodo() {
		console.log('Todo added');
		this.todos.push({
			name: 'Test',
		});
	}

	public openAddModal() {}
}
