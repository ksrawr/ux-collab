const tableData = document.querySelector('tbody');

console.log(tableData);

const render = (json) => {
	const template = json.foundUsers.map((key) => {
		return `
			<tr>
			<td>${key.firstName}</td>
			<td>${key.lastName}</td>
			<td>${key.email}</td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			</tr>
		`;
	}).join('');

	tableData.innerHTML = '';
	tableData.insertAdjacentHTML('afterbegin', template);
};

const getAllSubscribers = () => {
	fetch('/api/v1/Subscribers', {
		method: 'GET',
	})
		.then(response => response.json())
		.then(data => render(data))
		.catch(error => console.warn(error));
};

getAllSubscribers();