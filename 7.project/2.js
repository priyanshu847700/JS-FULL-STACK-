const form=document.querySelector('form')

form.addEventListener('submit',function(e){
    e.preventDefault()

    const height=parseFloat(document.querySelector('.height').value)
    const weight=parseFloat(document.querySelector('.weigth').value)
    const res=document.querySelector('.res')


    if(height === '' || height<0 || isNaN(height)){
        res.innerHTML=`please give a valid height`;
    }
    else if(weight === '' || weight<0 || isNaN(weight)){
        res.innerHTML=`please give a valid weight`;
    }
    else{
        const bmi=(weight/((height*height) / 10000)).toFixed(2)
        const p=document.createElement('p')
        res.innerHTML=`<p>${bmi}</p>`;
        if(bmi<18.6){
            res.appendChild(p).innerHTML=`<p> Under weight<p>`;
        }
        else if(bmi>=18.6 && bmi<=34.9){
            res.appendChild(p).innerHTML=`<p>Under weight</p>`;
        }
        else{
            res.appendChild(p).innerHTML=`<p>Under weight</p>`;
        }
    }
})


