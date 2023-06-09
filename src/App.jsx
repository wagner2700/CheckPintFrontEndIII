import { useState } from 'react'
import './App.css'
import editar from "./assets/magem1.png"
import apagar from "./assets/apagar.png"

function App() {
    const[id , setId] = useState("")
    const[titulo , setTitulo] = useState("")
    const[categoria,setCategoria] = useState("")
    const[data,SetData] = useState ("")
    const[descricao , setDescricao] = useState ("")
    const [listaItem,setListaItem] = useState([])
    const [qtdItens , setQtdItens] = useState (0)
    
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
      setQtdItens(qtdItens  +1 )
    
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
    <div className='Main'>
    <div className="App">
      <form onSubmit={addItem}>
      <h2 className='tituloForm'>Cadastrar Tarefa</h2>
     
      <input value={titulo}  onChange = {(event)=>setTitulo(event.target.value)} placeholder="Titulo"/>
      
      <select value={categoria}  onChange = {(event)=>setCategoria(event.target.value)} placeholder="Categoria"> 
        <option value = "">Selecione uma opção</option>
        <option value = "Trabalho">Trabalho</option>
        <option value = "Lazer">Lazer</option>
        <option value = "Prioridade">Prioridade</option>
        <option value = "Outros">Outros</option>
      </select>  
     
 
      <input value={data} type="date"  onChange = {(event)=>SetData(event.target.value)} placeholder="Data"/>
  
      <input value={descricao} onChange = {(event)=>setDescricao(event.target.value)} placeholder="Descrição"/>
      <input className='cadastrar' type ="Submit" value={id? "Salvar" : "Cadastrar"} />
      </form>
     
    </div>
    <div className='Cards'>
      <div className='cabecalho'>
        <h3>Lista de Tarefas</h3>
        <p> Total : {qtdItens} tarefas</p>
      </div>
        
        
        <ul>
        {listaItem.map((item)=>
          <li key={item.id}>
            
              <div className='titulo1'>
                <h4>{item.titulo}</h4> <p className='categoria'>{item.categoria} </p>  <p>{item.descricao} </p>
                </div>
              <div className='Button'>
               <h4>{item.data}</h4> 
               <div className='apagarOuEditar'>
               <img src={editar} onClick={()=> editarItem(item)} alt="Editar" />
               <img src={apagar} onClick={()=> apagarItem(item.id)} alt="Apagar" />
               </div> 
                {/*<button onClick={()=> editarItem(item)}>Editar</button>
                <button onClick={()=> apagarItem(item.id)}>Apagar</button>*/}
              </div>
            
          </li>)}
      
      </ul>
    </div> 
    </div>
  )
}

export default App
