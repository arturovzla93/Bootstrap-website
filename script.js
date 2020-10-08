var myArray = [
    {'Restaurante':'La Pumarada', 'Localización':'Oviedo', 'precio':'Alto'},
    {'Restaurante':'El ferroviario', 'Localización':'Oviedo', 'precio':'medio'},
    {'Restaurante':'la Noceda', 'Localización':'Gijon', 'precio':'bajo'},
    {'Restaurante':'Café Victoria', 'Localización':'Oviedo', 'precio':'alto'},
    {'Restaurante':'La Finca', 'Localización':'Gijon', 'precio':'alto'},
    {'Restaurante':'Terrastur', 'Localización':'Oviedo', 'precio':'medio'},
    {'Restaurante':'Terrastur-Colloto', 'Localización':'Pola de Siero', 'precio':'bajo'},
    {'Restaurante':'Terrastur-Avilés', 'Localización':'Aviles' , 'precio':'bajo'},
    {'Restaurante':'Terrastur-pichote', 'Localización':'Gijon', 'precio':'alto'},
    {'Restaurante':'La quinquilla', 'Localización':'Oviedo', 'precio':'medio'},
    {'Restaurante':'Chocolates valor', 'Localización':'Gijon', 'precio':'Alto'},
    {'Restaurante':'La guineana', 'Localización':'Oviedo', 'precio':'Bajo'},
    {'Restaurante':'Iguanas', 'Localización':'Aviles', 'precio':'medio'},
]

buildTable(myArray)



	function buildTable(data){
		var table = document.getElementById('myTable')

		for (var i = 0; i < data.length; i++){
			var row = `<tr>
							<td>${data[i].Restaurante}</td>
							<td>${data[i].Localización}</td>
							<td>${data[i].precio}</td>
					  </tr>`
			table.innerHTML += row


		}
	}
