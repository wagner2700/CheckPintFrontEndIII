import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
    const[id , setId] = useState("")
    const[titulo , setTitulo] = useState("")
    const[categoria,setCategoria] = useState("")
    const[data,SetData] = useState ("")
    const[descricao , setDescricao] = useState ("")
    const [listaItem,setListaItem] = useState([])
    
    // funcção para add item
    function addItem(event){
      event.preventDefault()
      //Verificar campos vazios
      if( titulo === "" | categoria === ""|data === ""  | descricao === ""){
        alert("Preencha todas as informações")
        return
    }
    // Verificar se ja id venha preenchido,caso positivo então é uma edição
    if(id){ 
      const copiaListaItem = [... listaItem];

      const index = copiaListaItem.findIndex((item) => item.id === id)

      copiaListaItem[index].titulo = titulo
      copiaListaItem[index].categoria = categoria
      copiaListaItem[index].data = data
      copiaListaItem[index].descricao = descricao
      console.log(copiaListaItem)
      setTitulo(copiaListaItem[index].titulo)
      setCategoria(copiaListaItem[index].categoria)
      SetData(copiaListaItem[index].data)
      setDescricao(copiaListaItem[index].descricao)
      setId("")
      setTitulo("")
      setCategoria("")
      SetData("")
      setDescricao("")



    }else{
      setListaItem([...listaItem , {
        id: Date.now(),
        titulo : titulo,
        categoria : categoria,
        data : data,
        descricao : descricao
      }])
      setTitulo("")
      setCategoria("")
      SetData("")
      setDescricao("")
    
    }

    }
  
    // função para editar item
    function editarItem(item){
      // Atribui valores
      setId(item.id)  
      setTitulo(item.titulo)
      setCategoria(item.categoria)
      SetData(item.data)
      setDescricao(item.descricao)
      
    }

    function apagarItem( id){
      const resultado = listaItem.filter((item)=>item.id !== id)
      setListaItem(resultado)
      setId("")
    }


  return (
    <div className="App">
      <form onSubmit={addItem}>

      <input value={titulo}  onChange = {(event)=>setTitulo(event.target.value)} placeholder="Titulo"/>
      <br />
      <br />
      <select value={categoria}  onChange = {(event)=>setCategoria(event.target.value)} placeholder="Categoria"> 
        <option value = "">Selecione uma opção</option>
        <option value = "T">Trabalho"</option>
        <option value = "L">Lazer</option>
        <option value = "P">Prioridade</option>
        <option value = "O">Outros</option>
      </select>  
     <br />
      <br />
      <input value={data} type="date"  onChange = {(event)=>SetData(event.target.value)} placeholder="Data"/>
      <br />
      <br />
      <input value={descricao} onChange = {(event)=>setDescricao(event.target.value)} placeholder="Descrição"/>
      <br />
      <br />
      <input type ="Submit" value={id? "Salvar" : "Cadastrar"} />
      </form>
      
    <ul>
      {listaItem.map((item)=>
        <li key={item.id}>
          <p>
           {item.titulo} - {item.categoria} - {item.data} - {item.descricao} 
            <button onClick={()=> editarItem(item)}>Editar</button>
            <button onClick={()=> apagarItem(item.id)}>Apagar</button>
          </p>
        </li>)}
      
    </ul>

    </div>
  )
}

export default App
