/* Películas */
titulo = "Interstellar";
precioTxt = "3.99";
edadMinimaTxt = "16";
disponible = true;
formato = "4K";

titulo = "Irreversible";
precioTxt = "2.99";
edadMinimaTxt = "18";
disponible = true;
formato = "HD";

/* Clientes */
nombre = "Pedro";
diasSolicitados = "6";
edad = 17;
saldo = 5.01;

nombre = "Laura";
diasSolicitados = "5";
edad = 18;
saldo = 15;


if(titulo == "Interstellar" && edad >= 16 && saldo >= 3.99){
   text1==" ===== VIDECLUB AURORA =====
Película: Interstellar
Días: 6
Formato: 4K
Total: XX.XX €
Alquiler confirmado a CLIENTE
Saldo disponible: XX.XX €
==========================="



    

}else{
    ===== VIDECLUB AURORA =====
Película: Interstellar
Alquiler no permitido a: CLIENTE
Motivo: [motivo]
===========================
}