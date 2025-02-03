const express = require('express');
const app = express();
const path = require('path');


app.use(express.static(path.join(__dirname, 'public')));
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
    });

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando na
porta ${PORT}`));     

window.addEventListener('scroll', function (){
    const navbar = this.document.getElementById('navbar')
    if(this.window.scrollY > 100){
        navbar.style.backgroundColor= '#333'
    } else{
         navbar.style.backgroundColor= 'transparent'

    }
})