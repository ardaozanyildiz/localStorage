function sauvegarder(){
    let Nom = document.getElementById("Nom").value;
    let Nom2 = document.getElementById("Nom2").value;
    localStorage.setItem("hello",Nom);
    localStorage.setItem("allo",Nom2);
  
}