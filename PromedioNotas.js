function subirNotas(){
  
    let nom=document.getElementById('nombres').value;
    let apellm=document.getElementById('apellidomaterno').value;
    let apellp=document.getElementById('apellidopaterno').value;
    let cod=document.getElementById('codigo').value;
    let not1=document.getElementById('nota1').value;
    let not2=document.getElementById('nota2').value;
    let not3=document.getElementById('nota3').value;
    let not4=document.getElementById('nota4').value;

    if(nom===""){
        swal("Ingrese los nombres del estudiante", "El campo de nombre no puede ser vacio", "warning");return false;
    }
    if(not1==="" || not2==="" || not3==="" || not4===""){
        swal("Ingrese las notas del estudiante", "La notas no pueden ser vacios", "warning");return false;  
    }
    if(not1 >= 21 || not2 >= 21  || not3 >= 21 || not4 >= 21){
        alert("La nota máxima es 20")
        return false;
    }
   
    
    var prom = (parseFloat(not1)+ parseFloat(not2)+ parseFloat(not3)+ parseFloat(not4)) /4;  
    var  obs = 0;
    if(prom >=10.5){
        obs =value="¡Aprobado! &#x2714";
    }
    else{
    obs =value="¡Desaprobado! &#x274c";
    }   
      
    const tabla=document.getElementById('añadirtabla');
    const fila=document.createElement('tr');            
              
    
    fila.innerHTML=`<td> ${nom} </td><td> ${apellp} </td><td> ${apellm} </td><td> ${cod} </td><td> ${not1} </td><td> ${not2} </td><td> ${not3} </td><td> ${not4} </td><td> ${prom.toFixed(1)} </td><td> ${obs} </td>`;
    tabla.appendChild(fila);

    document.getElementById('nombres').value='';
    document.getElementById('apellidomaterno').value='';
    document.getElementById('apellidopaterno').value='';
    document.getElementById('codigo').value='';
    document.getElementById('nota1').value='';
    document.getElementById('nota2').value='';
    document.getElementById('nota3').value='';
    document.getElementById('nota4').value='';
}

function Limpiar(){    
    document.getElementById('nombres').value='';
    document.getElementById('apellidomaterno').value='';
    document.getElementById('apellidopaterno').value='';
    document.getElementById('codigo').value='';
    document.getElementById('nota1').value='';
    document.getElementById('nota2').value='';
    document.getElementById('nota3').value='';
    document.getElementById('nota4').value='';
}