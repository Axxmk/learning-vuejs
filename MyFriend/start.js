const app = new Vue({
	el: '#app',
	data: {
		Person: [
			{
				id: 1,
				name: "Ann",
				gender: "Female",
				age: 19,
			},
			{
				id: 2,
				name: "Cream",
				gender: "Female",
				age: 18,
			},
			{
				id: 3,
				name: "Art",
				gender: "Male",
				age: 20,
			},
		],
		newFriend: {
			name: "",
			gender: "Male",
			age: "",
		},
		selectedPerson: 0,
		isEdit: false,
	},
	computed: {
		count() {
			return this.Person.length
		}
	},
	methods: {
		clear() {
			this.Person = []
		},
		remove(index) {
			this.Person.splice(index, 1)
		},
		add() {
			if (this.newFriend.name && this.newFriend.age) {
				this.Person.push({
					id: this.Person.length + 1,
					name: this.newFriend.name,
					gender: this.newFriend.gender,
					age: parseInt(this.newFriend.age)
				})

				this.newFriend = {
					name: "",
					gender: "Male",
					age: "",
				}
			}
		},
		selected(index) {
			this.selectedPerson = index
		},
		update() {
			if (document.getElementById('editName').value && document.getElementById('editAge').value) {
				this.Person[this.selectedPerson].name = document.getElementById('editName').value
				this.Person[this.selectedPerson].age = document.getElementById('editAge').value
				this.Person[this.selectedPerson].gender = document.getElementById('editGender').value
			}
		},
	},
})