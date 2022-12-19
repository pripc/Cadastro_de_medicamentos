const  med=[]
function addMed(){ //função principal//
    event.preventDefault(); //evita que o formulário faça auto preenchimento//
    let newMed={
        'medName': document.getElementById('medicamento').value,
        'medQuantidade':document.getElementById('qtdmedicamento').value,
        'medClass': document.getElementById('classemedicamento').value

    }
    resetForm()
    med.push(newMed)
    renderTable()
}
    

    function renderTable(){ //função secundária//
        let table = document.getElementById('dataTable')
        table.innerHTML =`
                    <tr>
                        <th>ID</th>
                        <th>Medicamentos</th>
                        <th>Quantidade</th>
                        <th>Classe de Medicamento</th>
                        <th>Remover</th>
    
                    </tr>`
        for (i=0; i < med.length; i++){
            table.innerHTML += `<tr>
                    <td>${i}</td>
                    <td>${med[i].medName}</td>
                    <td>${med[i].medQuantidade}</td>
                    <td>${med[i].medClass}</td>
                    <td><img src=images/lixeira.svg onclick='removeMed(${i})'></td>
            
            </tr>`
        }
    }
    function resetForm(){  //função secundária//
        document.getElementById('medicamento').value='';
        document.getElementById('qtdmedicamento').value='';
        document.getElementById('classemedicamento').value='';
    }
 
    function removeMed(index){ //função secundária//
        med.splice(index,1)
        renderTable()

    }